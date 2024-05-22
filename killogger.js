(function() {
    var originalOpen = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
        var self = this;
        var originalSend = this.send.bind(this);
        this.send = function(payload) {
            if (url.includes('/editor/ajax/save_keystroke')) {
                self.abort();
                return false;
            } else {
                return originalSend.apply(self, arguments);
            }
        };
        originalOpen.call(this, method, url, async, user, password);
    };
})();