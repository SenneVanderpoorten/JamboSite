$(document).ready(function() {

    
      var dir = "./gallery/images/2010/2010_1 (";
      var i = 0;
      e.preventDefault();
      while (i < 59) {
        $("#images").append('<a class="lightbox" href="'+dir+i+').JPG"> <img src="gallery/images/2010/2010_1 ('+i+').JPG" alt="2010"> </a>');
        i++;
      }
    
  });




