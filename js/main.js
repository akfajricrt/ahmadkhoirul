// carousel



$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active');
});


// scroll
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 120
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.hash = hash;
            });
        } // End if
    });
});




// btn Top
$(document).ready(function(){
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('#btnScroll').fadeIn();
		}
		else{
			$('#btnScroll').fadeOut();
		}

	});

	$("#btnScroll").click(function(){
		$('html,body').animate({scrollTop : 0},800);
	});


});
