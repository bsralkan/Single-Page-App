var uploadController = (function() {

    var uController = function() {

    }
    uController.prototype = Object.create(baseController.prototype);
    uController.prototype.show = function() {
        var div = document.createElement("div");
        this.init(div, "templates/upload.html", uController.prototype.choose);
        this.loadTemplate()
    }
    uController.prototype.choose = function() {
        var uploadButton = document.getElementById("uploadButton");
        uploadButton.addEventListener("click", (c) => {
            uploader.show();
        })
    }
    uController.prototype.showPreview = function(event) {
        if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("file-ip-1-preview");
            preview.src = src;
            preview.style.display = "block";
        }
    }

    return {
        show: function() {
            var abc = new uController();
            uController.prototype.show();

        },
        showPreview: function() {
            uController.prototype.showPreview
        }
    }

})();