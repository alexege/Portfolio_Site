$(document).ready(function(){
    
    // Hover over hexagons
    $(".hex").mouseenter(function(){
        current_hover = $(this).html();
        $(".hex-box").html(current_hover);
    })

    // Clicking a hexagon
    clickable = true;
    $(".hex").click(function(){
        $(".contents").html($(this).attr('name'));
        // console.log($(this).html())
        // $(".description-box").html($(this).html());
        if(clickable){
            // $(".hex-box").html($(this).html());

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
            clickable = false;
            
            $(".hex-box").delay(750).fadeOut();
            $(".description-box").animate({opacity: 1}, 3500);
            
            // Center description box
            $(".description-box").css({left: $(window).width()/2 - $(".description-box").width()/2});
            $(".description-box").css({top: $(window).height()/2 - $(".description-box").height()/2});
            

            // $(".hex-box-2").animate({"left": $(".hex-box-2").position().left - 75, "top": $(".hex-box-2").position().top + 75}, function(){
            //     $(".hex-box-3").animate({"left": $(".hex-box-3").position().left - 75}, function(){
            //         $(".hex-box-4").animate({"left": $(".hex-box-4").position().left - 75, "top": $(".hex-box-4").position().top - 75}, function(){
            //             $(".hex-box-5").animate({"left": $(".hex-box-5").position().left + 75, "top": $(".hex-box-5").position().top - 75}, function(){
            //                 $(".hex-box-6").animate({"left": $(".hex-box-6").position().left + 75}, function(){
            //                     $(".hex-box-7").animate({"left": $(".hex-box-7").position().left + 75, "top": $(".hex-box-7").position().top + 75});
                                    // clickable = false;
            //                 });
            //             });
            //         });
            //     });
            // });

        } else {
            $(".hex-box").html($(this).html());
            $(".hex-box-2").animate({"left": $(".hex-box-2").position().left + 75, "top": $(".hex-box-2").position().top - 75});
            $(".hex-box-3").animate({"left": $(".hex-box-3").position().left + 75});
            $(".hex-box-4").animate({"left": $(".hex-box-4").position().left + 75, "top": $(".hex-box-4").position().top + 75});
            $(".hex-box-5").animate({"left": $(".hex-box-5").position().left - 75, "top": $(".hex-box-5").position().top + 75});
            $(".hex-box-6").animate({"left": $(".hex-box-6").position().left - 75});
            $(".hex-box-7").animate({"left": $(".hex-box-7").position().left - 75, "top": $(".hex-box-7").position().top - 75});
            clickable = true;
        }
    })
});