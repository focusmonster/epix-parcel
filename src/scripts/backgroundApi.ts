type apiResponse = {
  ok: boolean;
  data: {};
};

class backgroundAPI {
  GetAllConfigs = async () => {
    let resp: apiResponse = await new Promise((resolve, reject) => {
      // @ts-ignore
      browser.runtime.sendMessage(
        {
          action: "GET_CONFIGS",
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
          action: "UPDATE_TICKET_STATUS",
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
  /**
   *
   * @param {{ticketId:string, labelToRemove:string, labelToAdd:string}} payload
   * @returns {Promise<boolean>}
   */
  UpdateTicketLabel = async (payload: {}) => {
    let resp: apiResponse = await new Promise((resolve, reject) => {
      // @ts-ignore
      browser.runtime.sendMessage(
        {
          action: "UPDATE_TICKET_LABEL",
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
}

export default backgroundAPI;
