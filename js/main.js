$(document).ready(function(){
  $("#qoutes").owlCarousel({
  				items: 1,
                responsiveClass: true,
                rtl: true,
                mouseDrag: true,
                touchDrag: true,
                loop:true,
                autoplay:true,
    			autoplayTimeout:2000,
              
            });


    $("#owl").owlCarousel({
                items: 5,
                responsiveClass: true,
                rtl: true,
                mouseDrag: true,
                touchDrag: true,
                loop:true,
                autoplay:true,
                autoplayTimeout:2000,
              
            });




});


$("#pop").on("click", function() {
    $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
 });




