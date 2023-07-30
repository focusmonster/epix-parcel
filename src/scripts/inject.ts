(function () {
  // @ts-ignore
  if (window.prpcClient) {
    let previousToken: string;
    setInterval(() => {
      // @ts-ignore
      let token = window?.prpcClient?.token;
      if (previousToken != token) {
        previousToken = token;
        window.postMessage(
          { type: ContentScriptActionTypes.TOKEN, token: token },
          "*"
        );
      }
    }, 1000);
  }
})();
