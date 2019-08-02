// Play Video
function playVideo(id){
  console.log("Play video");
  $(`.${id}`).get(0).play()
  $(".enter_button").fadeOut(400);
  // $(`.${id}`).delay(5000).fadeOut(400);
  }

function switchToPage(page_num){
  console.log(page_num);
  if(page_num == 0){
    $(".page0").css({display: "block"});
    $(".page1").css({display: "none"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "none"});
  } else if(page_num == 1){
    $(".page0").css({display: "none"});
    $(".page1").css({display: "block"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "none"});
  } else if (page_num == 2){
    $(".page0").css({display: "none"});
    $(".page1").css({display: "none"});
    $(".page2").css({display: "block"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "none"});
  }else if (page_num == 3){
    $(".page0").css({display: "none"});
    $(".page1").css({display: "none"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "block"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "none"});
  }else if (page_num == 4){
    $(".page0").css({display: "none"});
    $(".page1").css({display: "none"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "block"});
    $(".page5").css({display: "none"});
  } else if (page_num == 5){
    $(".page0").css({display: "none"});
    $(".page1").css({display: "none"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "block"});
  }else {
    $(".page0").css({display: "block"});
    $(".page1").css({display: "none"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "none"});
  }
}


$(document).ready(function(){

  // Smooth Scrolling
  // $('a[href*="#"]').on('click', function(e) {
  //   e.preventDefault()
  
  //   $('html, body').animate(
  //     {
  //       scrollTop: $($(this).attr('href')).offset().top,
  //     },
  //     750,
  //     'linear'
  //   )
  // })

  // Create a random color
  function randomColor(){
    var colors = ['#ff0000', '#00ff00', '#0000ff'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    return random_color;
  }
  rand_color = randomColor();

  $(".hex-fill").children().children().css({stroke: "red"});

  $(".hex-fill").hover(function(){
    $(this).finish().animate({opacity: 0}, 2000);
    $(this).css({'z-index': 9999});
  }, function(){
    $(this).finish().animate({opacity: 1}, 2500);
    $(this).css({'z-index': 0});
  })

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


    // Move navbar on scroll
    $(function () {
        var lastScrollTop = 0;
        var $navbar = $('.navbar');
        var navbarHeight = $navbar.outerHeight();
        var movement = 0;
        var lastDirection = 0;
      
        $(window).scroll(function(event){
          var st = $(this).scrollTop();
          movement += st - lastScrollTop;
      
          if (st > lastScrollTop) { // scroll down
            if (lastDirection != 1) {
              movement = 0;
            }
            var margin = Math.abs(movement);
            if (margin > navbarHeight) {
              margin = navbarHeight;
            }
            margin = -margin;
            $navbar.css('margin-top', margin+"px")
      
            lastDirection = 1;
          } else { // scroll up
            if (lastDirection != -1) {
              movement = 0;
            }
            var margin = Math.abs(movement);
            if (margin > navbarHeight) {
              margin = navbarHeight;
            }
            margin = margin-navbarHeight;
            $navbar.css('margin-top', margin+"px")
      
            lastDirection = -1;
          }
      
          lastScrollTop = st;
          // console.log(margin);
        });
      });
});