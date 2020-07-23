var loginController = (function () {
    var iController = function () {

    }
    iController.prototype = Object.create(baseController.prototype);
    iController.prototype.show = function () {
        var div = document.createElement("div");
        this.init(div, "templates/login.html",iController.prototype.login);
        this.loadTemplate()               
    }

    iController.prototype.login = function(){
        

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
    
            if (username == "bsr" && password == "alkan") {                
                baseController.prototype.destroy(profile.show)           
            } else {
                alert("you don't have logged in")
            }
        
    }
    iController.prototype.loadContent = function(div){
        var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    div.innerHTML = this.responseText;
                    
                }
            };
            xhttp.open("GET", "templates/login.html", true);
            xhttp.send();
    }

    return {
        show: function(){
            var abc=new iController();
            iController.prototype.show();

        },
        loadContent: function loadContent(div){
            iController.prototype.loadContent(div);
        },
        login: function login(){
            iController.prototype.login();
        }

    }

})();