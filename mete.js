var ucceTiklaAc = 4;

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
    ucceTiklaAc = 4;
    document.getElementById('kos').textContent = "Kosoferta.com " + ucceTiklaAc.toString();
    audio.play();
}
function kosoferta() {
    ucceTiklaAc--;
    document.getElementById('kos').textContent = "Kosoferta.com " + ucceTiklaAc.toString();
    if (ucceTiklaAc == 0) {
        ucceTiklaAc = 4;
        window.open("https://kosoferta.com");
    }
}