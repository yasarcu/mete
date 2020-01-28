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
    $('#kos').height(uzunluk);
    $('#kos').width(genislik);
    // let uzunluk = document.getElementById('omnom').offsetHeight;
    // document.getElementById('kos').style.width = genislik + 'px';
    // document.getElementById('kos').style.height = uzunluk + 'px';
});

/**
     * @param {string} deger
     * @param {{ style: { backgroundColor: string; }; }} _deger
     */
function play(deger, _deger) {
    // var audio = document.getElementById(deger);
    var audio = $("#deger");
    // ikinci defer buttona tiklaninca tekrar eski rengine donsun hatasina bak
    // var sayiBack = _deger.style.backgroundColor;
    var sayiBack = $(_deger).css('background-color');
    if (sayiBack != "rgb(227, 26, 23)") {
        // _deger.style.backgroundColor = "#e31a17";
        $(_deger).css("background-color" , "#e31a17");
    }
    else {
        // _deger.style.backgroundColor = "#000";
        $(_deger).css("background-color" , "#000");
    }
    besceTiklaAc = 3;
    // document.getElementById('kos').textContent = "Kosoferta ";
    $("#kos").text("Kosoferta ");
    // @ts-ignore
    $("audio")[0].play();
}
function kosoferta() {
    besceTiklaAc--;
    document.getElementById('kos').textContent = "Kosoferta " + besceTiklaAc.toString();
    if (besceTiklaAc == 0) {
        besceTiklaAc = 3;
        window.open("https://kosoferta.com");
    }
}