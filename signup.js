var signupController = (function () {

    var sController = function () {

    }
    sController.prototype = Object.create(baseController.prototype);
    sController.prototype.show = function () {
        this.init(document.body, "templates/signup.html", sController.prototype.sign);
        this.loadTemplate()
    }
    sController.prototype.sign = function () {
        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var user = {
            "name": name,
            "username": username,
            "password": password
        }
        var obj = {
            users: []
        };
        obj.users.push(user);
        var json = JSON.stringify(obj);  
        console.log(json)      
        alert("we are happy to see you!")
        baseController.prototype.destroy(profile.show);
        
    }


    return {
        show: function () {
            var abc = new sController();
            sController.prototype.show();

        },
        sign: function () {
            sController.prototype.sign();
        }
    }

})();   