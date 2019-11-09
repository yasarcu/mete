    function play(deger, _deger) {
    var audio=document.getElementById(deger);
    // ikinci defer buttona tiklaninca tekrar eski rengine donsun hatasina bak
    var sayiBack = _deger.style.backgroundColor;
    if(sayiBack != "rgb(227, 26, 23)") {
    _deger.style.backgroundColor = "#e31a17";
    }
    else {
    _deger.style.backgroundColor = "#000";
    }
    audio.play();
}