var myImage= new Array();
myImage[0]="img/bad-1.jpg";
myImage[1]="img/bad-2.jpg";
myImage[2]="img/bad-3.jpg";
myImage[3]="img/good-1.jpg";
myImage[4]="img/good-2.jpg";
myImage[5]="img/good-3.jpg";

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("remaing_votes").innerHTML =  4-ImageCnt +  " more votes to see your score";
    if(ImageCnt>3)
    {
        document.getElementById("review_image_box").style.opacity = 0.2;
        document.getElementById("see_votes_box").style.opacity = 0.9;
        document.getElementById("remaing_votes").style.display="none";


    }
    document.getElementById("review_image_box").style.background = 'url(' + myImage[ImageCnt] + ')';
    }




