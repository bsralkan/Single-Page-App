var slideController = (function() {
    var slideDiv = undefined,
        numberDiv = undefined,
        image = undefined,
        count = undefined,
        str = undefined,
        prev = undefined,
        next = undefined,
        textDiv = undefined;
    var slideIndex = 1;



    var slide = function(parent, photos) {
        for (i = 0; i < photos.length; i++) {
            slide.prototype.createSlide(parent, photos[i], i, photos.length);
        }
        this.prev = document.createElement("a");
        this.next = document.createElement("a");
        this.prev.setAttribute("class", "prev");
        this.next.setAttribute("class", "next");
        this.prev.innerHTML = "&#10094;";
        this.next.innerHTML = "&#10095;";
        this.prev.onclick = function() {
            slide.prototype.show(slideIndex += -1);
        }
        this.next.onclick = function() {
            slide.prototype.show(slideIndex += 1);
        }
        parent.appendChild(this.prev);
        parent.appendChild(this.next);

    }
    slide.prototype.createSlide = function(parent, photo, count, len) {
        this.slideDiv = document.createElement("div");
        this.numberDiv = document.createElement("div");
        this.image = document.createElement("img");
        this.textDiv = document.createElement("div");
        this.slideDiv.setAttribute("class", "mySlides fade");
        this.numberDiv.setAttribute("class", "numbertext");
        this.textDiv.setAttribute("class", "text");
        this.image.src = photo.url;
        count++;
        this.numberDiv.innerHTML = count.toString() + " / " + len.toString();
        this.str = photo.tag1 + " " + photo.tag2 + " " + photo.tag3;
        this.textDiv.innerHTML = this.str;
        this.slideDiv.appendChild(this.numberDiv);
        this.slideDiv.appendChild(this.image);
        this.slideDiv.appendChild(this.textDiv);
        parent.appendChild(this.slideDiv);
        slide.prototype.show(slideIndex);
    }
    slide.prototype.show = function(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
    }
    var slideController = function(parent, photos) {
        var slider = new slide(parent, photos);
    }
    return slideController;
})();