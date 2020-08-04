var baseController = (function () {
    var container = undefined;
    var templateName = undefined,
        parent = undefined,
        formName = undefined;

    var iBaseController = function () {

    }
    iBaseController.prototype = {
        init: function (p, c, t) {
            parent = p;
            templateName = t;

            container = c
            parent.appendChild(container);
        },
        destroy: function (cb) {

            parent.removeChild(container)
            cb();

        },
        loadTemplate: function () {

            var xhttp = new XMLHttpRequest(),
                self = this;
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    container.innerHTML = this.responseText;
                    if (self.onload)
                        self.onload();
                }
            };
            xhttp.open("GET", templateName, true);
            xhttp.send();
        },

        //loadContent function is wrote for pop-up
        loadContent: function (div, themplate) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    div.innerHTML = this.responseText;

                }
            };
            xhttp.open("GET", themplate, true);
            xhttp.send();
        }


    }
    return iBaseController;
})();