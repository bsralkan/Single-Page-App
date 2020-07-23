var baseController = (function () {
    var container = undefined;
    var templateName = undefined,
    onloadCB = undefined;

    var iBaseController = function () {
        
    }
    iBaseController.prototype = {
        init: function (c, t, cb) {
            
            templateName = t;
            onloadCB = cb;
            container = c
            document.body.appendChild(container);
        },
        destroy: function (cb) {
            
            document.body.removeChild(container)
            cb();

        },
        loadTemplate: function () {
            
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    container.innerHTML = this.responseText;
                    onloadCB()
                }
            };
            xhttp.open("GET", templateName, true);
            xhttp.send();
        },


    }
    return iBaseController;
})();