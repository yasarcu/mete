// window.onload = function () {
//     alert("welcome");
// };

// $( document ).ready(function() {
//         alert( "Thanks for visiting!" ); 
//     });

var besceTiklaAc = 3;
$(document).ready(function () {
    // let genislik = document.getElementById('omnom').offsetWidth;
    console.log("oldi");
    var uzunluk = $('#omnom').height();
    var genislik = $('#omnom').width();
    $('#btnKosoferta').height(uzunluk);
    $('#btnKosoferta').width(genislik);
    // let uzunluk = document.getElementById('omnom').offsetHeight;
    // document.getElementById('kos').style.width = genislik + 'px';
    // document.getElementById('kos').style.height = uzunluk + 'px';
});

$(function () {
    $('button').click(function () {
        if (this.id == 'btnKosoferta') {
            kosoferta();
        }
        else {
            var audio = document.getElementById(this.value);
            // var audio = $(this).val();
            // var audio = $("#(deger)");
            // ikinci defer buttona tiklaninca tekrar eski rengine donsun hatasina bak
            // var sayiBack = _deger.style.backgroundColor;
            var sayiBack = $(this).css('background-color');
            if (sayiBack != "rgb(227, 26, 23)") {
                // _deger.style.backgroundColor = "#e31a17";
                $(this).css("background-color", "#e31a17");
            }
            else {
                // _deger.style.backgroundColor = "#000";
                $(this).css("background-color", "#000");
            }
            besceTiklaAc = 3;
            // document.getElementById('kos').textContent = "Kosoferta ";
            $("#btnKosoferta").text("Kosoferta ");
            // @ts-ignore
            audio.play();
        }
    });
});
function kosoferta() {
    besceTiklaAc--;
    document.getElementById('btnKosoferta').textContent = "Kosoferta " + besceTiklaAc.toString();
    if (besceTiklaAc == 0) {
        besceTiklaAc = 3;
        window.open("https://kosoferta.com");
    }
}

// function play() {
//     var audio=document.getElementById("sesSifir");
//     audio.play();
// }