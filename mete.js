    function play(deger, _deger) {
    var audio=document.getElementById(deger);
    // ikinci defer buttona tiklaninca tekrar eski rengine donsun hatasina bak
    if(_deger.style.backgroundColor != "#e31a17") {
    _deger.style.backgroundColor = "#e31a17";
    }
    else {
    _deger.style.backgroundColor = "#000";
    }
    audio.play();
}