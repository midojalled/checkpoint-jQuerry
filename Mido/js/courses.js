function bold() {


    if (document.getElementById("texto").style.fontWeight == "normal") {
        document.getElementById("texto").style.fontWeight = "bold"
    } else {
        document.getElementById("texto").style.fontWeight = "normal"
    }
}


function gg() {

    if (document.getElementById("texto").style.fontStyle == "normal") {
        document.getElementById("texto").style.fontStyle = "italic"
    } else {
        document.getElementById("texto").style.fontStyle = "normal"
    }

}
function underline() {

    if (document.getElementById("texto").style.textDecoration == "none") {
        document.getElementById("texto").style.textDecoration = "underline"

    } else {
        document.getElementById("texto").style.textDecoration = "none"
    }
}
function changeSize(size) {

    if (size == "a") {
        document.getElementById("texto").style.fontSize = "20px";
    } else if (size == "b") {
        document.getElementById("texto").style.fontSize = "40px"

    }
    else if (size == "c") {
        document.getElementById("texto").style.fontSize = "70px"
    }
}
function changeFont(font) {
    if(font=="p"){
        document.getElementById("texto").style.fontFamily = "Arial"
    } else if (font=="t") {
        document.getElementById("texto").style.fontFamily = "Courier new"
    
    } else if (font== "r") {
        document.getElementById("texto").style.fontFamily = "Franklin Gothic Mediu"
    }

}
  
  $(".course4").hover(function(){
    $(".u").show();
  },
  function () {
    $(".u").hide();
  
});

$(".course5").hover(function(){
    $(".y").show();
  },
  function () {
    $(".y").hide();
  
});

$(".course6").hover(function(){
    $(".r").show();
  },
  function () {
    $(".r").hide();
  
});
  
$(".course7").hover(function(){
    $(".e").show();
  },
  function () {
    $(".e").hide();
  
});

$(".course8").hover(function(){
    $(".x").show();
  },
  function () {
    $(".x").hide();
  
});

$(".course9").hover(function(){
    $(".t").show();
  },
  function () {
    $(".t").hide();
  
});

$(".course1").hover(function(){
    $(".i").show();
  },
  function () {
    $(".i").hide();
  
});

$(".course3").hover(function(){
    $(".m").show();
  },
  function () {
    $(".m").hide();
  
});

$(".course2").hover(function(){
    $(".n").show();
  },
  function () {
    $(".n").hide();
  
});
 