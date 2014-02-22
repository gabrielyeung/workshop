(function($){ // self invoking function

  var imagesForReview= [];
  // "img/bad-1.jpg"; dont use. not big enough
  imagesForReview.push("img/bad-2.jpg");
  imagesForReview.push("img/good-1.jpg");
  imagesForReview.push("img/bad-3.jpg");
  imagesForReview.push("img/good-2.jpg");
  imagesForReview.push("img/good-3.jpg");

  var imgCnt = 0;
  var $reviewimagebox = $("#review_image_box");
  var $remainingvotes = $("#remaining_votes");

  function showImg(imgSrc, $cont) {
    $cont.css('background-image', 'url(' + imgSrc + ')');
  }

  function next(e){
    if(e) e.preventDefault();

    var numberImagesToReview = imagesForReview.length - imgCnt;

    if(numberImagesToReview === 0)
    {
      $remainingvotes.css('display', 'none');

      showImg('img/good-1.jpg', $reviewimagebox);

      $("#review_for_you").fadeIn();

    } else {

      showImg(imagesForReview[imgCnt++], $reviewimagebox);

      $remainingvotes.html(numberImagesToReview +  ' more votes to see your score');
    }


  }

  // attach events
  $('#yay-bttn').on('click', next);
  $('#nay-bttn').on('click', next);

  next(); // shows first image

})(jQuery);
