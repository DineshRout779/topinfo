$(document).ready(function () {
    $(".menu").click(function (e) { 
        e.preventDefault();
        $(".nav").toggleClass("open");  // Close Nav when clicked outside
    });
    $(document).click(function (e) { 
        if(!$(".nav").is(e.target) && !$(".menu").is(e.target)){
            if($('.nav').hasClass("open")){
                $(".nav").removeClass("open");
            }
        }
    });
});

