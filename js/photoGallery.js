$(document).ready(function() {

    var dir = "gallery/images/2010/2010_1(";
    var thumbdir = "gallery/thumbnail/2010/2010_1(";
    var i = 1;
    while (i < 61) {
      $("#images").append('<a class="lightbox" href="'+dir+i+').JPG"> <img src="'+thumbdir+i+')-min.JPG" alt="2010"> </a>');
      i++;
    }

    baguetteBox.run('.img-gallery');
  
});
