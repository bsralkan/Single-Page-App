var uploadController = (function () {

    var uController = function () {

    }
    uController.prototype = Object.create(baseController.prototype);
    uController.prototype.show = function () {
        this.init(document.body, "templates/launch.html",uController.prototype.choose);
        this.loadTemplate()               
    }
    uController.prototype.choose = function(){
        var loginButton = document.getElementById("login");
        var signupButton = document.getElementById("signup");
        loginButton.addEventListener("click", (click) => {
            baseController.prototype.destroy(loginController.show);
            
        })
        signupButton.addEventListener("click", (click) => {
            baseController.prototype.destroy(signupController.show);            
        })
    }

    return {
        show: function(){
            var abc=new uController();
            uController.prototype.show();

        }
    }

})();   