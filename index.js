

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".top-btn").fadeIn(); 
        }
            else {
                $(".top-btn").fadeOut();
                }
            });

        $(".top-btn").click(function(event){
            event.preventDefault();
        $("html, body").animate({ 
            scrollTop : 0 
        }, 500);
            });
});