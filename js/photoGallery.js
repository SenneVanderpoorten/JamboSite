$(document).ready(function() {
    $.fn.modal.Constructor.prototype.enforceFocus = function () {};  
    let dir;
    let thumbdir;

    if(window.location.pathname.split("/")[1] == "languages"){
      dir = "/gallery/images/2010/2010_1(";
      thumbdir = "../../gallery/thumbnail/2010/2010_1(";
    }
    else{
      dir = "gallery/images/2010/2010_1(";
      thumbdir = "gallery/thumbnail/2010/2010_1(";
    }
    var i = 1;
    while (i < 61) {
      $("#images").append('<a class="lightbox" href="'+dir+i+').JPG"> <img src="'+thumbdir+i+')-min.JPG" alt="2010"> </a>');
      i++;
    }
    baguetteBox.run('.img-gallery');
});
