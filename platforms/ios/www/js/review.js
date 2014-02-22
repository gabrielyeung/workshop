var myImage= new Array();
myImage[0]="img/img01.jpg";
myImage[1]="img/img02.jpg";
myImage[2]="img/img03.jpg";
myImage[3]="img/img04.jpg";

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("review_image_box").style.background = 'url(' + myImage[ImageCnt] + ')';
    }




