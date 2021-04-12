// JavaScript source code

function fonk1() { //mouse ile dünya şekli üzerine geldiğimizde çağrılacak fonksiyon
    document.getElementById("deg0").style.background = "rgba(0,0,0,0.3)"; // şeklin arkaplanı saydamlaştırılır
    document.getElementById("deg0").innerHTML = "Dünya";  //şeklin üzerinde gezegenin adı görüntülenir
}

function fonk2() { //mouse ile mars şekli üzerine geldiğimizde çağrılacak fonksiyon
    document.getElementById("deg45").style.background = "rgba(0,0,0,0.3)"; // şeklin arkaplanı saydamlaştırılır
    document.getElementById("deg45").innerHTML = "Mars"; //şeklin üzerinde gezegenin adı görüntülenir
}

function fonk3() { //mouse ile jupiter şekli üzerine geldiğimizde cağrılacak fonksiyon
    document.getElementById("deg90").style.background = "rgba(0,0,0,0.3)";
    document.getElementById("deg90").innerHTML = "Jüpiter";
}

function fonk4() { //mouse ile saturn şekli üzerine geldiğimizde çağrılacak fonksiyon
    document.getElementById("deg135").style.background = "rgba(0,0,0,0.3)";
    document.getElementById("deg135").innerHTML = "Satürn";
}

function fonk5() { //mouse ile uranus şekli üzerine geldiğimizde cağrılacak fonksiyon
    document.getElementById("deg180").style.background = "rgba(0,0,0,0.3)";
    document.getElementById("deg180").innerHTML = "Uranüs";
}

function fonk6() { //mouse ile neptun şekli üzerine geldiğimizde çağrılacak fonksiyon
    document.getElementById("deg225").style.background = "rgba(0,0,0,0.3)";
    document.getElementById("deg225").innerHTML = "Neptün";
}

function fonk7() { //mouse ile mercury şekli üzerine geldiğimizde çağrılacak fonksiyon
    document.getElementById("deg270").style.background = "rgba(0,0,0,0.3)";
    document.getElementById("deg270").innerHTML = "Merkür";
}

function fonk8() { //mouse ile venus şekli üzerine geldiğimizde çağrılacak fonksiyon
    document.getElementById("deg315").style.background = "rgba(0,0,0,0.3)";
    document.getElementById("deg315").innerHTML = "Venüs";
}

function normal() { //mouse şeklin üzerinden çekildiğinde çağrılacak fonksiyon. Bu fonsiyon gezegen resminin tekrardan şeklin üzerine gelmesini sağlar ve yazı şekil üzerinden kaldırılır.
    document.getElementById("deg0").style.backgroundImage = "url('3earth.jpg')";
    document.getElementById("deg0").innerHTML = "";

    document.getElementById("deg45").style.backgroundImage = "url('4mars.jpg')";
    document.getElementById("deg45").innerHTML = "";

    document.getElementById("deg90").style.backgroundImage = "url('5jupiter.png')";
    document.getElementById("deg90").innerHTML = "";

    document.getElementById("deg135").style.backgroundImage = "url('6saturn.jpg')";
    document.getElementById("deg135").innerHTML = "";

    document.getElementById("deg180").style.backgroundImage = "url('7uranus.jpg')";
    document.getElementById("deg180").innerHTML = "";

    document.getElementById("deg225").style.backgroundImage = "url('8neptune.jpg')";
    document.getElementById("deg225").innerHTML = "";

    document.getElementById("deg270").style.backgroundImage = "url('1mercury.jpg')";
    document.getElementById("deg270").innerHTML = "";

    document.getElementById("deg315").style.backgroundImage = "url('2venus.jpg')";
    document.getElementById("deg315").innerHTML = "";
}
//gezegenler üzerine tıklandığında çağrılan fonksiyon. Bu fonksiyon linkin henüz aktif olmadığını kullanıcıya bildiren bir alert görüntüler
function alertfonk() {
    alert("Çok yakında buradayız!");
}


var mybutton = document.getElementById("myBtn");

//kaydırma var mı diye kontrol edilir. kaydırma varsa sucrollFunction fonksiyonu çağrılır.
window.onscroll = function () {
    scrollFunction()
};

//bu fonksiyon, 20px den fazla kaydırma varsa top butonunu gösterir, 20px den az kaydırma varsa top butonunu göstermez
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } 
    else {
        mybutton.style.display = "none";
    }
}

// bu fonksiyon top butonuna basıldığı zaman çağrılır ve web sayfasının en üstüne gitmemizi sağlar
function topFunction() {
    document.documentElement.scrollTop = 0;
}

