var i = 0;
var images = [
              'OIP (4).jfif',
              'télécharger (1).jfif',
              'R (2).jfif',
              'CIMG3388.jpg',
              'on-est-venu-jouer-en-famille-samedi-a-la-ludotheque_4218482.jpg',
              'imagebebe.JFIF',
              'OIP (1).jfif',
              'OIP (2).jfif',
              'ludotheque-ludotheque-ludotheque-1350148810.jpg',
              'R (1).jfif',] ;
var time = 2000;

function changeImg(){


document.slide.src = images[i];

if (i < images.length - 1) {
i++;
} else {
i = 0;
}
setTimeout("changeImg()", time);
this.setBounds(1000,1000,1000,1000);
}
window.onload = changeImg;

