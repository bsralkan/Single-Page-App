var profile = (function () {
    var pController = function () {

    }
    pController.prototype = Object.create(baseController.prototype);
    pController.prototype.show = function () {
        var div = document.createElement("div")
        this.init(div, "templates/profile.html", pController.prototype.profile)
        this.loadTemplate()
    }
    pController.prototype.profile = function () {
        document.getElementById("profilName").innerHTML = baseController.formName;;
        var uploadButton = document.getElementById("uploadButton");
        var editButton = document.getElementById("editButton")
        var updateButton = document.getElementById("updateButton");
        uploadButton.addEventListener("click", (c) => {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var div = document.getElementById("log");
            modal.style.display = "block";
            baseController.prototype.loadContent(div, "templates/upload.html");

            span.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        })
        editButton.addEventListener("click", (e) => {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var div = document.getElementById("log");
            modal.style.display = "block";
            baseController.prototype.loadContent(div, "templates/profilUpdate.html");
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
    pController.prototype.updateProfil = function () {
        var name = document.getElementById("name").value;
        var userName = document.getElementById("username").value
        var password = document.getElementById("password").value
        var http = new XMLHttpRequest();
        var url = '';
        var params = 'name=' + name + '&username=' + userName + '&password=' + password;
        http.open('GET', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);

    }
    return {
        show: function () {
            var abc = new pController();
            pController.prototype.show();

        },
        updateProfil: function () {
            pController.prototype.updateProfil();
        }
    }
})();