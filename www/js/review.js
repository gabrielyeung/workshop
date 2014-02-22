(function($){ // self invoking function

  var myImage= [];
  myImage[0]="img/bad-1.jpg";
  myImage[1]="img/bad-2.jpg";
  myImage[2]="img/bad-3.jpg";
  myImage[3]="img/good-1.jpg";
  myImage[4]="img/good-2.jpg";
  myImage[5]="img/good-3.jpg";
  var imgCnt = 0;
  var $reviewimagebox = $("#review_image_box");
  var $remainingvotes = $("#remaining_votes");

  function showImg(imgSrc) {
    $reviewimagebox.css('background', 'url(' + imgSrc + ')');
  }

  function next(e){
    if(e) e.preventDefault();

    $remainingvotes.html(4-imgCnt +  ' more votes to see your score');

    if(imgCnt > 3)
    {
      //$("#see_my_food_box").css('opacity', 1.0);
      $remainingvotes.fadeOut();
      $("#review_for_you").fadeIn();

      if(imgCnt > 5) {
        $reviewimagebox.fadeOut('fast');
      }
    }

    showImg(myImage[imgCnt++]);
  }

  // attach events
  $('#yay-bttn').on('click', next);
  $('#nay-bttn').on('click', next);

  next(); // shows first image

})(jQuery);
