$(document).ready(function(){
  console.log("Page finished loading");
})


// $(".hex-box-enter").css({top: $(window).height()/2 - $(".hex-box-enter").height()/2});
// $(".hex-box-enter").css({left: $(window).width()/2 - $(".hex-box-enter").width()/2});
// Randomly populate with hexagons
function loadAtRandom(){
    
  var count = 0; 
  var maxDelay = 2500;
  var minSpeed = 1500;
  var maxSpeed = 2000;
  var fadeTo = 1;

  $('.hex-grid div').each(function(){
      var delay = Math.ceil(Math.random() * maxDelay);
      var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
      count++;
      fadeTo = Math.random(0.5, 1);
      $(this).delay(delay).fadeTo(speed, fadeTo, function(){
          count--;
          if (count == 0){
              onFinish();
          }
      });
  });
  
  function onFinish() {
      loadContent();
  }  
}

function loadContent(){
  console.log("Finished loading");
  $(".contents").fadeIn();
}


function pageOneTransition(){

  // $(".clip1").get(0).play();
  // $(".clip1").delay(5000).fadeOut();

  $(".hex-grid").css({display: "block"});
  $(".hex-grid div").css({"opacity": "0"});
  $(".hex-box-enter").fadeOut();
  setTimeout(loadAtRandom, 500);

  $(".enter_button").fadeOut();
}

function pageTwoTransition(){
  $(".about-contents").hide().delay(1000).fadeIn();
  // $(".center-content a:nth-child(2)").css({color: "red"});
  // $(".center-content a:nth-child(2)").css({"border-color": "#5fe5c9"});
  $(".hex-grid div").css({"opacity": "0"});
  // $(".clip2").get(0).play();
  // $(".clip2").delay(5000).fadeOut();
  switchToPage(1)
  setTimeout(loadAtRandom, 500);
  // setInterval(function(){
  //   console.log("Firing again");
  //   setTimeout(loadAtRandom, 500);
  // }, 1000);
  $(".contents").hide().delay(2000).fadeIn(500);
  // loadAtRandom();
}

function pageThreeTransition(){
  $(".project-contents").hide().delay(1000).fadeIn();
  $(".hex-grid div").css({"opacity": "0"}); 
  setTimeout(loadAtRandom, 500);
  // $(".clip3").get(0).play();
  // $(".clip3").delay(5000).fadeOut();
  switchToPage(2);
}

function pageFourTransition(){
  $(".work-contents").hide().delay(1000).fadeIn();
  $(".hex-grid div").css({"opacity": "0"}); 
  setTimeout(loadAtRandom, 500);
  switchToPage(3);
}

function pageFiveTransition(){
  $(".hex-grid div").css({"opacity": "0"}); 
  setTimeout(loadAtRandom, 500);
  switchToPage(4);
}

function pageSixTransition(){
  $(".hex-grid div").css({"opacity": "0"}); 
  setTimeout(loadAtRandom, 500);
  switchToPage(5);
}


// Play Video
function playVideo(id){
  console.log("Play video");
  $(`.${id}`).get(0).play()
  $(".enter_button").fadeOut(400);
  $(`.${id}`).delay(5000).fadeOut(400);
  }

// Hide elements
function hideProjectHex(){
  $(".hex-row-1_1").finish().finish().fadeOut();
  $(".hex-row-2_1").finish().fadeOut();
  $(".hex-row-2_2").finish().fadeOut();
  $(".hex-row-2_3").finish().fadeOut();
  $(".hex-row-2_4").finish().fadeOut();
  $(".hex-row-2_5").finish().fadeOut();
  $(".hex-row-2_6").finish().fadeOut();
  $(".hex-row-3_1").finish().fadeOut();
  $(".hex-row-3_2").finish().fadeOut();
  $(".hex-row-3_3").finish().fadeOut();
  $(".hex-row-3_4").finish().fadeOut();
  $(".hex-row-3_5").finish().fadeOut();
  $(".hex-row-3_6").finish().fadeOut();
  $(".hex-row-3_7").finish().fadeOut();
  $(".hex-row-3_8").finish().fadeOut();
  $(".hex-row-3_9").finish().fadeOut();
  $(".hex-row-3_10").finish().fadeOut();
  $(".hex-row-3_11").finish().fadeOut();
  $(".hex-row-3_12").finish().fadeOut();
}

// Center contents
// function centerContents(){
//   console.log("WinHeight: ", $(window).height());
//   console.log("WinWidth: ", $(window).width());
//   console.log("divHeight: ", $(".contents").height());
//   console.log("WinWidth: ", $(".contents").width());
//   $(".contents").css({top: $(window).height()/2 - $(".contents").height()/2});
//   $(".contents").css({left: $(window).width()/2 - $(".contents").width()/2});
// }


function switchToPage(page_num){
  console.log(page_num);
  if(page_num == 0){
    hideProjectHex();
    $(".hex-box-enter").css({display: "none"});
    $(".page0").css({display: "block"});
    $(".page1").css({display: "none"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "none"});
    
    $(".center-content").css({display: "block"});
    $(".enter_button").css({display: "none"});
  } else if(page_num == 1){
    $(".page0").css({display: "none"});
    $(".page1").css({display: "block"});
    $(".page2").css({display: "none"});
    $(".page3").css({display: "none"});
    $(".page4").css({display: "none"});
    $(".page5").css({display: "none"});

    // $(".hex-row-1_1").fadeIn(500);
    // $(".contents").hide().delay(5000).fadeIn(500);
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


function moveSlice(){
  console.log("Moving ");
  $(".slice_5").animate({"top": "100vh"});
  $(".slice_6").animate({"bottom": "100vh"}, function(){
    $(".slice_4").animate({"top": "100vh"});
    $(".slice_7").animate({"bottom": "100vh"}, function(){
      $(".slice_3").animate({"top": "100vh"});
      $(".slice_8").animate({"bottom": "100vh"}, function(){
        $(".slice_2").animate({"top": "100vh"});
        $(".slice_9").animate({"bottom": "100vh"}, function(){
          $(".slice_1").animate({"top": "100vh"});
          $(".slice_10").animate({"bottom": "100vh"}, function(){
        
          });
        });
      });
    });
  });
  // $(".slice_5", ".slice_6").animate({"top": "100vh", "opacity" : "0"}, function(){
  //   $(".slice_4", ".slice_7").animate({"bottom": "100vh", "opacity" : "0"}, function(){
  //     $(".slice_3", ".slice_8").animate({"top": "100vh", "opacity" : "0"}, function(){
  //       $(".slice_2", ".slice_9").animate({"bottom": "100vh", "opacity" : "0"}, function(){
  //         $(".slice_1", ".slice_10").animate({"top": "100vh", "opacity" : "0"}, function(){
  //         });
  //       });
  //     });
  //   });
  // });
}

// function moveSlice(){
//   console.log("Moving ");
//   $(".slice_1").animate({"top": "100vh", "opacity" : "0"}, function(){
//     $(".slice_2").animate({"bottom": "100vh", "opacity" : "0"}, function(){
//       $(".slice_3").animate({"top": "100vh", "opacity" : "0"}, function(){
//         $(".slice_4").animate({"bottom": "100vh", "opacity" : "0"}, function(){
//           $(".slice_5").animate({"top": "100vh", "opacity" : "0"}, function(){
//             $(".slice_6").animate({"bottom": "100vh", "opacity" : "0"}, function(){
//               $(".slice_7").animate({"top": "100vh", "opacity" : "0"}, function(){
//                 $(".slice_8").animate({"bottom": "100vh", "opacity" : "0"}, function(){
//                   $(".slice_9").animate({"top": "100vh", "opacity" : "0"}, function(){
//                     $(".slice_10").animate({"bottom": "100vh", "opacity" : "0"}, function(){
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// }



function moveSlices(){
  for(var i = 0; i < 10; i++){
    $(".slice1").append("<div class='slice22' style='color: white'>CONTENT</div>");
  }
  console.log("Moving slices");
  $(".slice1").animate({})

  $(".slice1").animate({"opacity" : "0"}, function(){
    $(".slice3").animate({"opacity" : "0"}, function(){
      $(".slice2").animate({"opacity" : "0"}, function(){
        $(".slice4").animate({"opacity" : "0"});
      })
    })
  });
}

$(document).ready(function(){



//////////////////////////////////////////////////////////////////////////////////////////////
// Start of Buttons Matrix //

//Create a matrix of buttons
arr1 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr2=  [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
arr3 = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
arr4 = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
arr5 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr6 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr7 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr8 = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
arr9 = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
arr10=  [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
arr11 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


// arr1 = [10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10]
// arr2= [9, 8, 7, 6, 5, 4, 5, 6, 7, 8, 9]
// arr3 = [8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8]
// arr4 = [7, 6, 5, 4, 3, 2, 3, 4, 5, 6, 7]
// arr5 = [6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]
// arr6 = [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5]
// arr7 = [6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]
// arr8 = [7, 6, 5, 4, 3, 2, 3, 4, 5, 6, 7]
// arr9 = [8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8]
// arr10 = [9, 8, 7, 6, 5, 4, 5, 6, 7, 8, 9]
// arr11 = [10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10]

for(var i in arr1){
  $(".row1").append(`<button class='${arr1[i]}'></button>`);
}
for(var i in arr2){
  $(".row2").append(`<button class='${arr2[i]}'></button>`);
}
for(var i in arr3){
  $(".row3").append(`<button class='${arr3[i]}'></button>`);
}
for(var i in arr4){
  $(".row4").append(`<button class='${arr4[i]}'></button>`);
}
for(var i in arr5){
  $(".row5").append(`<button class='${arr5[i]}'></button>`);
}
for(var i in arr6){
  $(".row6").append(`<button class='${arr6[i]}'></button>`);
}
for(var i in arr7){
  $(".row7").append(`<button class='${arr7[i]}'></button>`);
}
for(var i in arr8){
  $(".row8").append(`<button class='${arr8[i]}'></button>`);
}
for(var i in arr9){
  $(".row9").append(`<button class='${arr9[i]}'></button>`);
}
for(var i in arr10){
  $(".row10").append(`<button class='${arr10[i]}'></button>`);
}
for(var i in arr11){
  $(".row11").append(`<button class='${arr11[i]}'></button>`);
}

const speed = 250;
const prev_height = 100;
const prev_width = 100;
const new_height = 120;
const new_width = 120;

var a1 = {height:new_height, width: new_width};
var a2 = {height:prev_height, width: prev_width};

$(document).ready(function(){

$(".enterButton").click(function(){
  console.log("Testing");
  $(".0").click();
  $(".enterButton").remove();
  setTimeout(function(){
    pageTwoTransition()
  }, 5000);

});

// Random color border:
function randomColor(){
var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
var random_color1 = colors[Math.floor(Math.random() * colors.length)];
var random_color2 = colors[Math.floor(Math.random() * colors.length)];
var random_color3 = colors[Math.floor(Math.random() * colors.length)];
var random_color4 = colors[Math.floor(Math.random() * colors.length)];
var random_color5 = colors[Math.floor(Math.random() * colors.length)];
var random_color6 = colors[Math.floor(Math.random() * colors.length)];
var random_color7 = colors[Math.floor(Math.random() * colors.length)];
var random_color8 = colors[Math.floor(Math.random() * colors.length)];
var random_color9 = colors[Math.floor(Math.random() * colors.length)];
var random_color10 = colors[Math.floor(Math.random() * colors.length)];
var random_color11 = colors[Math.floor(Math.random() * colors.length)];

$(".0").css('border', `2px solid ${random_color1}`);
$(".1").css('border', `2px solid ${random_color2}`);
$(".2").css('border', `2px solid ${random_color3}`);
$(".3").css('border', `2px solid ${random_color4}`);
$(".4").css('border', `2px solid ${random_color5}`);
$(".5").css('border', `2px solid ${random_color6}`);
$(".6").css('border', `2px solid ${random_color7}`);
$(".7").css('border', `2px solid ${random_color8}`);
$(".8").css('border', `2px solid ${random_color9}`);
$(".9").css('border', `2px solid ${random_color10}`);
$(".10").css('border', `2px solid ${random_color11}`);
$(".11").css('border', `2px solid ${random_color}`);
$(".12").css('border', `2px solid ${random_color}`);
$(".13").css('border', `2px solid ${random_color}`);
$(".14").css('border', `2px solid ${random_color}`);
$(".15").css('border', `2px solid ${random_color}`);
}

// $(".0").css({"border": "1px solid red"}).html("Enter").css({"color" : "white"});
// $(".0").html("Enter").width(60).height(60);

  $("button").hover(function(){
    if($(this).is(".ignore")){

    } else {
      $(this).css({border: "2px solid white"});
      $(this).css({opacity: 1});
      // $(this).animate({margin: '5px'});
      // $(this).animate({width: 70, height: 70});
      // $(this).delay(500).animate({width: 100, height: 100});
    }
  }, function(){
    if($(this).is(".ignore")){
      console.log("Ignored");
    } else {
      $(this).animate({opacity: 0}, 1000);
      console.log("Triggered");
    }
      // $(this).css({border: "2px solid black"});
      // $(this).animate({margin: '0px'});
      // $(this).animate({width: 55, height: 55});
  })

  $("button").click(function(){
      var currentButton = parseInt($(this).attr('class'));
      console.log("starting: ", currentButton);
      var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      $(`.${currentButton}`).animate({"margin": "0 10px 0 10px", opacity: 0.25}, 500);
      $(`.${currentButton}`).animate({margin: 0, opacity: 1.0 }, 500);
      $(`.${currentButton}`).css({border: `2px solid ${random_color}`});
      // $(`.${currentButton}`).css({"box-shadow": `2px 22px ${random_color}`});
      // randomColor();           
      while(currentButton < 15){
      $(`.${currentButton + 1}`).delay(200 * currentButton/2).animate({margin: "0 10px 0 10px", opacity: 0.25}, 500);
      $(`.${currentButton + 1}`).delay(200 * currentButton/2).animate({margin: 0, opacity: 1.0 }, 500);
      $(`.${currentButton + 1}`).css({border: `2px solid ${random_color}`});
      // $(`.${currentButton}`).css({"box-shadow": `2px 22px ${random_color}`});
      currentButton += 1;
      // randomColor();
      }
  })
});

// End of Buttons Matrix //
//////////////////////////////////////////////////////////////////////////////////////////////


  $(".clip1").get(0).play();
  $(".clip1").delay(5000).fadeOut();
  $(".enterButton").hide().delay(5600).fadeIn();
  $(".center-content").hide().delay(6000).fadeIn();
  $(".media-links").hide().delay(6300).fadeIn();

  $(function () {
    var $element = $('.enterButton');
    setInterval(function () {
        $element.fadeIn(2000, function () {
            $element.fadeOut(2000, function () {
                $element.fadeIn(2000)
            });
        });
    }, 5000);
});

  $("#ajax").click(function(){
    $.ajax({url: "content.html", success: function(result){
      $("#main_content").html(result);
    }});
  });

  $(".linkedin-slider, .github-slider, .youtube-slider, .facebook-slider").hide();
  $(".trigger").hover(function(){
    $(this).stop().animate({"padding-left": "8px"}).css({"border-left":"2px solid rgb(6,170,226)"});
    if($(this).attr('name') == 'linkedin'){
      $(".linkedin-slider").stop().fadeIn();
    } else if($(this).attr('name') == 'github'){
      $(".github-slider").stop().fadeIn();
    } else if($(this).attr('name') == 'youtube'){
      $(".youtube-slider").stop().fadeIn();
    } else if($(this).attr('name') == 'facebook'){
      $(".facebook-slider").stop().fadeIn();
    }
  }, function(){
    $(this).stop().animate({"padding-left": "0px"}).css({"border-left":"0px solid rgb(6,170,226)"});  
    $(".linkedin-slider, .github-slider, .youtube-slider, .facebook-slider").fadeOut();
  })

  // swap out projects title
  $(".hex").hover(function(){
    console.log($(this).css("border"));
    $(this).children("svg").css({"stroke-width": "1px"});
    $(this).children("svg").css({"stroke": "yellow"});
    $("#center-text").text(($(this).attr('name')));
  }, function(){
    // $(this).children("svg").css({"stroke-width": "0px"});
    $(this).children("svg").css({"stroke": "rgb(6,170,226)"});
    
  })

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

  // $(".hex-fill").children().children().css({stroke: "#5fe5c9"});
  $(".hex-fill").children().children().css({stroke: "rgb(6,170,226)"});
  $(".hex-fill").children().children().css({"stroke-width": 1});
  // $(".hex-fill").children().children().css({"fill": "rgb(95,229,201, 0.15)"});
  $(".hex-fill").children().children().css({"fill": "rgb(6,170,226, 0.25)"});
  // $(".hex-fill").children().children().css({"fill": rgb(255, 255, 255, 0.5)});
  
  $(".hex-fill").hover(function(){
    // $(this).children().children().css({"fill": "rgb(0, 255, 0, 0.2)"});
    $(this).finish().animate({opacity: 0}, 2000);
    $(this).css({'z-index': 100});
  }, function(){
    // $(this).children().children().css({"fill": rand_color});
    // $(this).children().children().css({"fill": "white"});
    $(this).finish().animate({opacity: 1}, 2000);
    $(this).css({'z-index': 0});
  })

    // Clicking a hexagon
    clickable = true;
    $(".hex").click(function(){

      hideProjectHex();
        if(clickable){

            // Change contents of description box
            if($(this).attr('name') == 'Python'){
                $(".description-box").html($(".description-box-python").html())
            } else if($(this).attr('name') == 'Mean'){
                $(".description-box").html($(".description-box-mean").html())
            } else if($(this).attr('name') == 'Webfunds'){
                $(".description-box").html($(".description-box-webfunds").html())
            } else if($(this).attr('name') == 'C#'){
              $(".description-box").html($(".description-box-CSharp").html())
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
            // $(".description-box").css({left: $(window).width()/2 - $(".description-box").width()/2});
            // $(".description-box").css({top: $(window).height()/2 - $(".description-box").height()/2});

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