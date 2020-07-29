var loginController = (function () {
    var iController = function () {
    }
    iController.prototype = Object.create(baseController.prototype);
    iController.prototype.show = function () {
        var div = document.createElement("div");
        this.init(div, "templates/login.html", iController.prototype.login);
        this.loadTemplate()
    }
    iController.prototype.login = function () {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var url = "Model/user.json";
        var xhttp = new XMLHttpRequest();
        var kontrol = 0;
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                var parse = JSON.parse(response);
                var leng = parse.user1.length;
                for (var i = 0; i < leng; i++) {
                    if (parse.user1[i].username == username && parse.user1[i].password == password) {
                        kontrol = 1;
                        baseController.formName = parse.user1[i].name;
                        break;
                    }
                }
                if (kontrol == 1) {

                    baseController.prototype.destroy(profile.show);
                }
                else
                    alert("you don't have logged in")

            }
        };
        xhttp.send();
    }
    return {
        show: function () {
            var abc = new iController();
            iController.prototype.show();

        },
        login: function login() {
            iController.prototype.login();
        }
    }
})();