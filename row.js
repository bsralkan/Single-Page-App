var rowController = (function() {
    var container = undefined;
    var row = function(parent, model) { //constructor
        container = document.createElement("div");
        container.setAttribute("class", "row");
        for (i = 0; i < model.length; i++) {
            var photo = model[i];
            var pcontroller = new photosController(container, photo);
            pcontroller.show();
        }
        parent.appendChild(container);
    }

    var rowController = function(parent, model) { // model fotoğraf dizisi, her bir eleman içinde url, tag'ler ve detail bilgisi var.
        var line = row(parent, model);
    }


    return rowController;
})();