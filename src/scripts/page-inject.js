(function () {
  // @ts-ignore
  if (window.prpcClient) {
    let previousToken;
    setInterval(() => {
      // @ts-ignore
      let token = window?.prpcClient?.token;
      if (previousToken != token) {
        previousToken = token;
        window.postMessage({ type: "TOKEN", token: token }, "*");
      }
    }, 1000);
  }
})();
