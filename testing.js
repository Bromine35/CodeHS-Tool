(function() {
    const originalOpen = window.XMLHttpRequest.prototype.open;

    window.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
        if (url.includes("https://services.classkick.com/v1/assignment-works/") && url.includes("questions/") && url.includes("manipulatives/")) {
            const payload = this.send.bind(this);
            this.send = function() {
                try {
                    const parsedPayload = JSON.parse(arguments[0]);
                    if (parsedPayload.data.reason === "paste") {
                        // stop the request before it sends
                    }
                } catch (error) {
                    console.log(parsedPayload)
                    console.error("Error:", error);
                }
                payload.apply(this, arguments);
            };
        }
        originalOpen.call(this, method, url, async, user, password);
    };
})();