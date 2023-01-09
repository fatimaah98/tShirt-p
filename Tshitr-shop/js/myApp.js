$(document).ready(function() {
    
    $("#bar-icon").click(function(){
        $(this).css("opacity","0");
        $("#xmark-icon").css("opacity","1");
       });
       
       $("#xmark-icon").click(function(){
        $(this).css("opacity","0");
        $("#bar-icon").css("opacity","1");
       });
       
});