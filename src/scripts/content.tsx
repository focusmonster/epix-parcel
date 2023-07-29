import React from 'react';
import ReactDOM from 'react-dom';

import BugLink from './../pages/Issues/bugLinks';

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'content-app-root');
document.body.appendChild(newDiv);

const GLOBALS = {
    cancelKey: 0,
    tokenRecieved: false,
};

let startTokenMonitor = () => {
    const existingScript = document.querySelector("script#epifi-extension");
    if (!existingScript) {
        console.debug("Script does not exists, creating new instance");
        const script = document.createElement("script");
        // @ts-ignore
        script.src = browser.runtime.getURL("/content_scripts/inject.js");
        script.id = "epifi-extension";
        document.documentElement.appendChild(script);
    } else {
        console.debug("Script already exists, skipping");
    }

    window.addEventListener("message", async (e) => {
        if (e?.data?.type == "TOKEN") {
            let token = e?.data?.token;
            GLOBALS.tokenRecieved = true;
            console.debug({ token });
            // @ts-ignore
            await browser.runtime.sendMessage({ action: "STORE_TOKEN", data: token });
        }
    });
};

let sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let waitForTableLoad = async () => {
    let retryTimeoutSeconds = 30;
    let startTime = new Date().getTime();

    // while (!GLOBALS.tokenRecieved) {
    //     console.debug("Did not recieve token, sleeping for 200ms");
    //     await sleep(200);
    // }
    console.log('waitForTableLoad')


    // let configs = await api.GetAllConfigs();
    // console.debug({ configs });

    GLOBALS.cancelKey = window.setInterval(() => {
        const table = document
            .querySelector("mr-list-page")
            ?.shadowRoot?.querySelector("mr-issue-list")
            ?.shadowRoot?.querySelector("table");
        if (table != null && table != undefined) {
            // processTable(table, configs);
            console.log("table", table);
            renderSummary(table);
            clearInterval(GLOBALS.cancelKey);
            return;
        }

        let currentTime = new Date().getTime();
        if (currentTime - startTime > retryTimeoutSeconds * 1000) {
            clearInterval(GLOBALS.cancelKey);
            console.log("Exhausted all retries finding table. Exiting");
            return;
        }
        console.log("Cannot find table, sleeping");
    }, 200);
};

let init = () => {
    // @ts-ignore
    console.log('content script loaded');
    // if (typeof browser === "undefined") {
    //     // @ts-ignore
    //     browser = chrome;
    // }

    // startTokenMonitor();
    let previousUrl = "";
    // @ts-ignore
    const observer = new MutationObserver((mutations) => {
        if (location.href !== previousUrl) {
            clearInterval(GLOBALS.cancelKey);
            previousUrl = location.href;
            console.debug("mutation detected, triggering extension re-processing");
            waitForTableLoad();
        }
    });
    const config = { subtree: true, childList: true };
    observer.observe(document, config);
};
init();


let renderSummary = (table: any) => {
    const allRows = table.querySelectorAll("tbody tr");
    allRows.forEach((row: any) => {;
        const idCell = row.querySelector("td.col-id");
        if (!idCell) {
            return;
        }
        const ticketId = row
            .querySelector("td.col-id mr-issue-link")
            ?.shadowRoot?.querySelector("a")?.text;
        if (!ticketId) {
            return;
        }

        if (!idCell.classList.contains("ignore-navigation")) {
            idCell.classList.add("ignore-navigation");
        }

        const summaryDiv = document.createElement("div");
        // summaryDiv.textContent = ticketId;

        //get href and text from a component in idCell
        const href = idCell.querySelector("mr-issue-link")?.shadowRoot?.querySelector("a")?.href;
        const text = idCell.querySelector("mr-issue-link")?.shadowRoot?.querySelector("a")?.text;

        ReactDOM.render(<BugLink href={href} text={text}/>, summaryDiv);

        //replace idcell with summary div
        idCell.innerHTML = "";
        
        idCell.appendChild(summaryDiv);
    });
}
