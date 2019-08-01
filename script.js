$(document).ready(function(){


    // Hover over hexagons
    $(".hex").mouseenter(function(){
        // current_hover = $(this).html();
        // $(".hex-box").html(current_hover);
    })

    // // Hover box 2
    // $(".hex-box-2").hover(function(){
    //     $(".hex-box-2").animate({"left": $(".hex-box-2").finish().position().left - 15, "top": $(".hex-box-2").position().top + 15}, 200);        
    // }, function(){
    //     $(".hex-box-2").animate({"left": $(".hex-box-2").finish().position().left + 15, "top": $(".hex-box-2").position().top - 15}, 200);        
    // });
    
    // // Hover box 3
    // $(".hex-box-3").hover(function(){
    //     $(".hex-box-3").animate({"left": $(".hex-box-3").finish().position().left - 15, "top": $(".hex-box-3").position().top - 15}, 200);        
    // }, function(){
    //     $(".hex-box-3").animate({"left": $(".hex-box-3").finish().position().left + 15, "top": $(".hex-box-3").position().top + 15}, 200);        
    // });
    
    // // Hover box 4
    // $(".hex-box-4").hover(function(){
    //     $(".hex-box-4").animate({"top": $(".hex-box-4").finish().position().top - 15}, 200);        
    // }, function(){
    //     $(".hex-box-4").animate({"top": $(".hex-box-4").finish().position().top + 15}, 200);        
    // });
    
    // // Hover box 5
    // $(".hex-box-5").hover(function(){
    //     $(".hex-box-5").animate({"left": $(".hex-box-5").finish().position().left + 15, "top": $(".hex-box-5").position().top - 15}, 200);        
    // }, function(){
    //     $(".hex-box-5").animate({"left": $(".hex-box-5").finish().position().left - 15, "top": $(".hex-box-5").position().top + 15}, 200);        
    // });
    
    // // Hover box 6
    // $(".hex-box-6").hover(function(){
    //     $(".hex-box-6").animate({"left": $(".hex-box-6").finish().position().left + 15, "top": $(".hex-box-6").position().top + 15}, 200);        
    // }, function(){
    //     $(".hex-box-6").animate({"left": $(".hex-box-6").finish().position().left - 15, "top": $(".hex-box-6").position().top - 15}, 200);        
    // });
    
    // // Hover box 7
    // $(".hex-box-7").hover(function(){
    //     $(".hex-box-7").animate({"top": $(".hex-box-7").finish().position().top + 15}, 200);        
    // }, function(){
    //     $(".hex-box-7").animate({"top": $(".hex-box-7").finish().position().top - 15}, 200);        
    // });

    // Clicking a hexagon
    clickable = true;
    $(".hex").click(function(){
        if(clickable){

            // Change contents of description box
            if($(this).attr('name') == 'python'){
                $(".description-box").html($(".description-box-python").html())
            } else if($(this).attr('name') == 'mean'){
                $(".description-box").html($(".description-box-mean").html())
            } else if($(this).attr('name') == 'webfunds'){
                $(".description-box").html($(".description-box-webfunds").html())
            }

            // $(".hex-box").fadeOut();
            $(".hex-box-2").animate({"left": $(".hex-box-2").position().left - 50, "top": $(".hex-box-2").position().top + 50}, 1500).fadeOut();
            $(".hex-box-3").animate({"left": $(".hex-box-3").position().left - 50, "top": $(".hex-box-3").position().top - 50}, 1500).fadeOut();
            $(".hex-box-4").animate({"top": $(".hex-box-4").position().top - 50}, 1500).fadeOut();
            $(".hex-box-5").animate({"left": $(".hex-box-5").position().left + 50, "top": $(".hex-box-5").position().top - 50}, 1500).fadeOut();
            $(".hex-box-6").animate({"left": $(".hex-box-6").position().left + 50, "top": $(".hex-box-6").position().top + 50}, 1500).fadeOut();
            $(".hex-box-7").animate({"top": $(".hex-box-7").position().top + 50}, 1500).fadeOut();
            
            $(".hex-box").delay(750).fadeOut();
            $(".description-box").animate({opacity: 1}, 3500);
            $(".reload").animate({opacity: 1}, 4500);
            
            // Center description box
            $(".description-box").css({left: $(window).width()/2 - $(".description-box").width()/2});
            $(".description-box").css({top: $(window).height()/2 - $(".description-box").height()/2});

            clickable = false;
        }
    })

    // Reload animations
    $(".reload").click(function(){
        $(".hex-box-2").fadeIn().animate({"left": $(".hex-box-2").position().left + 50, "top": $(".hex-box-2").position().top - 50}, 1500);
        $(".hex-box-3").fadeIn().animate({"left": $(".hex-box-3").position().left + 50, "top": $(".hex-box-3").position().top + 50}, 1500);
        $(".hex-box-4").fadeIn().animate({"top": $(".hex-box-4").position().top + 50}, 1500);
        $(".hex-box-5").fadeIn().animate({"left": $(".hex-box-5").position().left - 50, "top": $(".hex-box-5").position().top + 50}, 1500);
        $(".hex-box-6").fadeIn().animate({"left": $(".hex-box-6").position().left - 50, "top": $(".hex-box-6").position().top - 50}, 1500);
        $(".hex-box-7").fadeIn().animate({"top": $(".hex-box-7").position().top - 50}, 1500);

        // clickable = false;
        
        $(".hex-box").delay(750).fadeIn();
        $(".description-box").animate({opacity: 0}, 500);
        $(".reload").animate({opacity: 0}, 500);

        clickable = true;
    })

});