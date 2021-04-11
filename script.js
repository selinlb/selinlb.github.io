        function fonk1() {
            document.getElementById("deg0").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg0").innerHTML = "Dünya";
        }

        function fonk2() {
            document.getElementById("deg45").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg45").innerHTML = "Mars";
        }

        function fonk3() {
            document.getElementById("deg90").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg90").innerHTML = "Jüpiter";
        }

        function fonk4() {
            document.getElementById("deg135").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg135").innerHTML = "Satürn";
        }

        function fonk5() {
            document.getElementById("deg180").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg180").innerHTML = "Uranüs";
        }

        function fonk6() {
            document.getElementById("deg225").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg225").innerHTML = "Neptün";
        }

        function fonk7() {
            document.getElementById("deg270").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg270").innerHTML = "Merkür";
        }

        function fonk8() {
            document.getElementById("deg315").style.background = "rgba(0,0,0,0.3)";
            document.getElementById("deg315").innerHTML = "Venüs";
        }

        function normal() {
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

        function alertfonk() {
            alert("Çok yakında buradayız!");
        }

        var mybutton = document.getElementById("myBtn");

        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        function topFunction() {
            document.documentElement.scrollTop = 0;
        }
