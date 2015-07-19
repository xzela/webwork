onmessage = function (evnt) {
    console.log('worker', evnt);
    postMessage('worker result: ' + new Date().getTime());
};
