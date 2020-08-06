var photosController = (function() {
    var textDiv = undefined,
        str = undefined,
        div = undefined,
        childDiv = undefined,
        textContent = undefined,
        Parent = undefined,
        image = undefined;

    var photos = function(parent, model) {
        this.Parent = parent;
        this.div = document.createElement("div");
        this.childDiv = document.createElement("div");
        this.textDiv = document.createElement("div");
        this.image = document.createElement("img");
        this.image.setAttribute("src", model.url);
        this.str = model['tag1'] + " " + model['tag2'] + " " + model['tag3'];
    }
    photos.prototype.show = function() {
        this.textDiv.innerHTML = this.str;
        this.image.setAttribute("style", "width:300px; height:300px;")
        this.div.setAttribute("class", "column");
        this.childDiv.setAttribute("class", "content_img")
        this.childDiv.appendChild(this.image);
        this.childDiv.appendChild(this.textDiv);
        this.div.appendChild(this.childDiv);
        this.Parent.appendChild(this.div);
    }
    photos.prototype.destroy = function(div) {
        div.remove();
    }

    var obj = undefined;

    var pController = function(parent, model) {
        obj = new photos(parent, model);
    }

    pController.prototype.show = function() {
        obj.show();
    }
    pController.prototype.destroy = function() {
        obj.destroy();
    }


    return pController;

})();