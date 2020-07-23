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
        console.log("profile")
    }
    return {
        show: function(){
            var abc=new pController();
            pController.prototype.show();

        }
    }
})();