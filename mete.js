// var besceTiklaAc = 3;
window.onload = function () {
    let genislik = document.getElementById('omnom').offsetWidth;
    let uzunluk = document.getElementById('omnom').offsetHeight;
    document.getElementById('kos').style.width = genislik + 'px';
    document.getElementById('kos').style.height = uzunluk + 'px';
}

function play(deger, _deger) {
    var audio = document.getElementById(deger);
    // ikinci defer buttona tiklaninca tekrar eski rengine donsun hatasina bak
    var sayiBack = _deger.style.backgroundColor;
    if (sayiBack != "rgb(227, 26, 23)") {
        _deger.style.backgroundColor = "#e31a17";
    }
    else {
        _deger.style.backgroundColor = "#000";
    }
    // besceTiklaAc = 3;
    // document.getElementById('kos').textContent = "Kosoferta ";
    // @ts-ignore
    audio.play();
}
// function kosoferta() {
//     besceTiklaAc--;
//     document.getElementById('kos').textContent = "Kosoferta " + besceTiklaAc.toString();
//     if (besceTiklaAc == 0) {
//         besceTiklaAc = 3;
//         window.open("https://kosoferta.com");
//     }
// }