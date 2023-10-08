console.log("youre index.js file is loaded correctly!");

function fade(){
    $('.preloader').fadeOut("slow");
   
}
setTimeout(fade,3000);

$(document).ready(function(){
    $(".textCopy").hover(function(){

        $(this).css("background-color","rgba(130,106,237,1)");
    },function(){
        $(this).css("background-color","black");

    });

});

$(document).ready(function(){
    $(".button-3").hover(function(){

        $(this).css("background-color","rgba(130,106,237,1)");
    },function(){
        $(this).css("background-color","black");

    });

});