var launchController = (function () {

    var lController = function () {

    }
    lController.prototype = Object.create(baseController.prototype);
    lController.prototype.show = function () {
        var div = document.createElement("div");
        this.init(div, "templates/launch.html", lController.prototype.choose);
        this.loadTemplate()
    }
    lController.prototype.choose = function () {
        lController.prototype.modal();

    }
    lController.prototype.modal = function () {
        var buton = document.getElementById("logi");
        var buton2 = document.getElementById("sign");

        buton.addEventListener("click", (e) => {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var div = document.getElementById("log");
            this.loadContent(div, "templates/login.html");
            modal.style.display = "block";
            span.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        })
        buton2.addEventListener("click", (e) => {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var div = document.getElementById("log");
            this.loadContent(div, "templates/signup.html");
            modal.style.display = "block";
            span.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        })

    }



    return {
        show: function () {
            var abc = new lController();
            lController.prototype.show();

        }
    }

})();   