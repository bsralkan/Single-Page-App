var uploader = (function() {

    var btn = undefined,

        fInput = undefined,

        preview = undefined;

    function uploader(file) {

        var xmlHttpRequest = new XMLHttpRequest(),

            fileName = file.name,

            target = "http://localhost/ImageUploadDemo/api/ImageUpload",

            mimeType = file.type;

        xmlHttpRequest.open('POST', target, true);

        xmlHttpRequest.setRequestHeader('Content-Type', mimeType);

        // xmlHttpRequest.setRequestHeader('Content-Disposition', 'attachment; filename="' + fileName + '"');

        xmlHttpRequest.send(file);

    }

    function btnClick() {

        if (fInput.files.length > 0) {

            var file = fInput.files[0];

            uploader(file);

        }

    }

    uploader.prototype.upload = function() {

        btn = document.getElementById("uploadButton");

        fInput = document.getElementById("fInput");



        btnClick();
    }

    return {
        upload: function() {
            uploader.prototype.upload();
        },
        showPreview: function(event) {
            preview = document.getElementById("preview");
            preview.src = URL.createObjectURL(event.target.files[0]);
            preview.style.display = "block";
        }
    }


})();