var besceTiklaAc = 5;

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
    besceTiklaAc = 5;
    document.getElementById('kos').textContent = "kosoferta.com ";
    audio.play();
}
function kosoferta() {
    besceTiklaAc--;
    document.getElementById('kos').textContent = "kosoferta.com " + besceTiklaAc.toString();
    if (besceTiklaAc == 0) {
        besceTiklaAc = 5;
        window.open("https://kosoferta.com");
    }
}