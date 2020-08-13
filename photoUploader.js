"use strict"
var uploader = (function() {

    var btn = undefined,

        fInput = undefined,

        preview = undefined;

    function uploader(files) {
        var fInput = document.getElementById("fInput");
        var file = fInput.files[0];
        var xmlHttpRequest = new XMLHttpRequest(),

            target = "http://localhost/ImageUploadDemo/api/ImageUpload";

        xmlHttpRequest.open('POST', target, true);
        xmlHttpRequest.setRequestHeader("encrypt", "multipart/form-data");
        var formData = new FormData();
        formData.append("file", file);
        xmlHttpRequest.send(formData);

        xmlHttpRequest.onreadystatechange = function() {
            debugger;
            if (xmlHttpRequest.readyState == 4 && xmlHttp.status == 200) {
                alert(xmlHttpRequest.responseText);
            }
        }

    }

    function btnClick(fInput) {

        if (fInput.files.length > 0) {

            var file = fInput.files[0];

            uploader(file);

        }

    }

    uploader.prototype.upload = function() {

        btn = document.getElementById("uploadButton");

        fInput = document.getElementById("fInput");



        btnClick(fInput);
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