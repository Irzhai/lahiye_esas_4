$('#sidebar-btn').click(function() {
   $('#sidebar').toggleClass('visible');
});
var timer;

$(".header2_1_yazi1 button").mouseover(function() {
   $(this).css("background-color","#18afd3");
}).mouseout(function() {
    $(this).css("background-color","#f57e57");
});
 $(".panel_ic.input input").ready(function(){
   if($(this).value.lenght == 10){
   	 console.log($('.panel_ic.input input'));
   }
});