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
        /*var loginButton = document.getElementById("login");
        var signupButton = document.getElementById("signup");
        lController.prototype.modal();

        loginButton.addEventListener("click", (click) => {
            var div = document.createElement("div")
            //loginController.prototype.loadContent(div);
            //lController.prototype.container.appendChild(div);

            //baseController.prototype.destroy(loginController.show);
            loginController.show()
        })
        signupButton.addEventListener("click", (click) => {
            baseController.prototype.destroy(signupController.show);
        })*/
    }
    lController.prototype.modal = function () {
        var buton = document.getElementById("myBtn");
        
        buton.addEventListener("click", (e) => {
            // Get the modal
            var modal = document.getElementById("myModal");

            
            // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            buton.addEventListener("click", (c)=>{
                var div = document.getElementById("log");
                loginController.loadContent(div);
                modal.style.display = "block";
            })        
            

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
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