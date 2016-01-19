$( "#spot_1" ).click(function() {

      $('#active_1').toggle();

});
$( "#spot_2" ).click(function() {

       $('#active_2').toggle();
       $('.safari').toggle();

});
$( "#spot_3" ).click(function() {

      $('#active_3').toggle();

});
$( "#spot_4" ).click(function() {

    $('#active_4').toggle();


});
$( "#spot_5" ).click(function() {

       $('#active_5').toggle();

});

$(function(){
  $('.safari').draggable().resizable();

});
