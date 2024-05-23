(function() {
    var originalOpen = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
        var self = this;
        var originalSend = this.send.bind(this);
        this.send = function(payload) {
            console.log("found POST request, detecting paste");

            if (typeof payload === 'string' && payload.includes('&reason=paste')) {
                console.log("DETECTED PASTE");
                // Abort the request
                self.abort();
                return false;
            } else {
                console.log("did not find paste")
            }
            return originalSend.apply(self, arguments);
        };
        originalOpen.call(this, method, url, async, user, password);
    };
})();