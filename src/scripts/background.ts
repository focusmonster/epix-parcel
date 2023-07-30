import { browser } from "webextension-polyfill-ts";

var token = "";

// Make the `request` function generic
// to specify the return data type:
async function request<TResponse>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {}

  // This function is async, it will return a Promise:
): Promise<TResponse> {
  // Inside, we call the `fetch` function with
  // a URL and config given:
  const response = await fetch(url, config);
  const data = await response.json();
  return data as TResponse;

  // We also can use some post-response
  // data-transformations in the last `then` clause.
}

const commonApiConfig: () => RequestInit = () => {
  return {
    credentials: "include",
    headers: <HeadersInit>{
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.5",
      "content-type": "application/json",
      "X-Xsrf-Token": `${token}`,
    },
    method: "POST",
    mode: "cors",
  };
};

let getAllConfigs = async (response: any) => {
  let resp = await fetch(
    "https://monorail.pointz.in/prpc/monorail.Projects/GetConfig",
    {
      ...commonApiConfig(),
      body: '{"projectName":"fi-app"}',
    }
  );
  const jsonResp = (await resp.text()).substring(4);
  let jsonData = JSON.parse(jsonResp);
  console.log(jsonData);
  response({ ok: true, data: jsonData });
};

/**
 *
 * @param {{ticketId: string, status:string}} payload
 * @param {any} response
 */
let updateTicketStatus = async (payload: any, response: any) => {
  let resp = await fetch(
    "https://monorail.pointz.in/prpc/monorail.Issues/UpdateIssue",
    {
      ...commonApiConfig(),
      body: JSON.stringify({
        issueRef: {
          localId: Number(payload.ticketId),
          projectName: "fi-app",
        },
        delta: {
          status: payload.status,
        },
        commentContent: "",
        sendEmail: false,
      }),
    }
  );
  response({ ok: resp.ok });
};

/**
 *
 * @param {{ticketId: string, labelToRemove:string, labelToAdd:string}} payload
 * @param {any} response
 */
let updateTicketLabel = async (payload: any, response: any) => {
  let delta: any = {};
  if (payload.labelToRemove !== "----") {
    delta["labelRefsRemove"] = [
      {
        label: payload.labelToRemove,
      },
    ];
  }
  if (payload.labelToAdd !== "----") {
    delta["labelRefsAdd"] = [
      {
        label: payload.labelToAdd,
      },
    ];
  }

  let resp = await fetch(
    "https://monorail.pointz.in/prpc/monorail.Issues/UpdateIssue",
    {
      ...commonApiConfig(),
      body: JSON.stringify({
        issueRef: {
          localId: payload.ticketId,
          projectName: "fi-app",
        },
        delta: delta,
        commentContent: "",
        sendEmail: false,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );
  response({ ok: resp.ok });
};

// @ts-ignore
browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log({ msg, sender });
  switch (msg?.action) {
    case BackgroundActionTypes.STORE_TOKEN:
      token = msg.data;
      sendResponse({ ok: true });
      break;
    case BackgroundActionTypes.GET_CONFIGS:
      getAllConfigs(sendResponse);
      break;
    case BackgroundActionTypes.UPDATE_TICKET_STATUS:
      updateTicketStatus(msg?.payload, sendResponse);
      break;
    case BackgroundActionTypes.UPDATE_TICKET_LABEL:
      updateTicketLabel(msg?.payload, sendResponse);
      break;
  }
  return true;
});
