// import { browser } from "webextension-polyfill-ts";
import { BackgroundActionTypes as action } from "../types/messageAction";

type apiResponse = {
  ok: boolean;
  data: {};
};

// @ts-ignore
if (typeof browser == "undefined") {
  // @ts-ignore
  browser = chrome;
}

class backgroundAPI {
  GetAllConfigs = async () => {
    let resp: apiResponse = await new Promise((resolve, reject) => {
      // @ts-ignore
      browser.runtime.sendMessage(
        {
          action: action.GET_CONFIGS,
        },
        (data: apiResponse) => {
          resolve(data);
        }
      );
    });

    if (!resp.ok) {
      console.error("Error getting all configs");
      return;
    }
    return resp.data;
  };
  UpdateTicketStatus = async (payload: {}) => {
    let resp: apiResponse = await new Promise((resolve, reject) => {
      // @ts-ignore
      browser.runtime.sendMessage(
        {
          action: action.UPDATE_TICKET_STATUS,
          payload: payload,
        },
        (data: apiResponse) => resolve(data)
      );
    });

    let { ok } = resp;
    if (!ok) {
      console.error("Error updating ticket status");
    }
    return ok;
  };

  UpdateTicketLabel = async (payload: {
    ticketId: string;
    labelToRemove: string;
    labelToAdd: string;
  }) => {
    let resp: apiResponse = await new Promise((resolve, reject) => {
      // @ts-ignore
      browser.runtime.sendMessage(
        {
          action: action.UPDATE_TICKET_LABEL,
          payload: payload,
        },
        (data: apiResponse) => resolve(data)
      );
    });

    let { ok } = resp;
    if (!ok) {
      console.error("Error updating ticket status");
    }
    return ok;
  };

  GetTicketDetails = async (payload: { ticketId: string }) => {
    let resp: apiResponse = await new Promise((resolve, reject) => {
      // @ts-ignore
      browser.runtime.sendMessage(
        {
          action: action.GET_TICKET_DETAILS,
          payload: payload,
        },
        (data: apiResponse) => resolve(data)
      );
    });

    let { ok } = resp;
    if (!ok) {
      console.error("Error getting ticket details");
      return;
    }
    return resp.data;
  };

  GetTicketComments = async (payload: { ticketId: string }) => {
    let resp: apiResponse = await new Promise((resolve, reject) => {
      // @ts-ignore
      browser.runtime.sendMessage(
        {
          action: action.GET_TICET_COMMENTS,
          payload: payload,
        },
        (data: apiResponse) => resolve(data)
      );
    });

    let { ok } = resp;
    if (!ok) {
      console.error("Error getting ticket comments");
      return;
    }
    return resp.data;
  };
}

export default backgroundAPI;
