var signupController = (function () {

    var sController = function () {

    }
    sController.prototype = Object.create(baseController.prototype);
    sController.prototype.show = function () {
        this.init(document.body, "templates/signup.html",sController.prototype.sign);
        this.loadTemplate()               
    }
    sController.prototype.sign = function(){
        
        var signupButton = document.getElementById("signup");
       
        signupButton.addEventListener("click", (click) => {
            alert("We are happy to see you")
            
        })
    }

    return {
        show: function(){
            var abc=new sController();
            sController.prototype.show();

        }
    }

})();   