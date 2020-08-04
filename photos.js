var photosController = (function() {
    var textDiv = undefined,
        str = undefined,
        div = undefined,
        childDiv = undefined,
        image = undefined;

    function photosController(parent, url) {
        this.div = document.createElement("div");
        this.childDiv = document.createElement("div");
        this.textDiv = document.createElement("div");
        this.image = document.createElement("img");
        this.str = url.tag1 + " " + url.tag2 + " " + url.tag3;
        this.textDiv.innerHTML = str;
        this.image.setAttribute("src", url.url);
        this.image.setAttribute("style", "width:300px; height:300px;")
        this.div.setAttribute("class", "column");
        this.childDiv.setAttribute("class", "content_img")
        this.childDiv.appendChild(this.image);
        this.childDiv.appendChild(this.textDiv);
        this.div.appendChild(this.childDiv);
        parent.appendChild(this.div);
    }
    photosController.prototype = {

    }


    return {
        photosController
    }

})();