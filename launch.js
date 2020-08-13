var launchController = (function() {

    var lController = function(pa) {

    };
    lController.prototype = Object.create(baseController.prototype);
    lController.prototype.show = function(parent) {
        var div = document.createElement("div");
        this.init(parent, div, "templates/launch.html");
        this.loadTemplate()
    }
    lController.prototype.onload = function() {
        this.img();
        //lController.prototype.modal();

    }
    lController.prototype.slide = function() {
        var self = this;
        var url = "Model/slide.json";
        var xhttp = new XMLHttpRequest();
        self.parent = document.getElementById("slideShow");
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                var parse = JSON.parse(response);
                var slideShow = slideController(self.parent, parse.photos);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    lController.prototype.img = function() {
        lController.prototype.slide();
        var self = this;
        var url = "Model/photo.json";
        var xhttp = new XMLHttpRequest();
        var container = document.querySelector(".photosDiv");
        self.parent = document.getElementById("slideShow");

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                var parse = JSON.parse(response);
                //var slideShow = slideController(self.parent, parse.photos);
                var row = new rowController(container, parse.photos);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();


        lController.prototype.modal();

    }
    lController.prototype.modal = function() {
        var buton = document.getElementById("logi");
        var buton2 = document.getElementById("sign");

        buton.addEventListener("click", (e) => {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var div = document.getElementById("log");
            this.loadContent(div, "templates/login.html");
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
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
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        })

    };


    return {
        show: function(parent) {

            lController.prototype.show(parent);

        }
    }

})();