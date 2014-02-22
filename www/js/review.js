var myImage= new Array();
myImage[0]="img/bad-1.jpg";
myImage[1]="img/bad-2.jpg";
myImage[2]="img/bad-3.jpg";
myImage[3]="img/good-1.jpg";
myImage[4]="img/good-2.jpg";
myImage[5]="img/good-3.jpg";

var imgCnt = 0;

function next(){
    imgCnt++;
    document.getElementById("remaing_votes").innerHTML =  4-imgCnt +  " more votes to see your score";
    if(imgCnt>3)
    {
        document.getElementById("see_my_food_box").style.opacity = 1.0;
        $("#remaing_votes").fadeOut();
        $("#review_for_you").fadeIn();

        if(imgCnt > 5)
        {
            $("#review_image_box").fadeOut('fast');

        }

    }
    document.getElementById("review_image_box").style.background = 'url(' + myImage[imgCnt] + ')';
    }




