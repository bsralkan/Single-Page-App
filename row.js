var rowController = (function() {
    var container = undefined;
    var rowController = function(parent, model) { //constructor
        container = document.createElement("div");
        for (i = 0; i < model.length; i++) {
            var photo = parse.photos[i];
            var pcontroller = new photosController(container, photo);
            pcontroller.show();
        }
        parent.appendChild(container);
    }

    var row = function(parent, model) {
        rowController(parent, model);
    }


    return row;
})();