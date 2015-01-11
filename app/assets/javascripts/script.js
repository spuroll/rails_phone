$(document).ready(function(){
    var duration = 0;
    $("#call_number").val('');
    $(".duration").hide();
    $(".endbutton").hide();
    $(".notebutton").hide();
    $(".notefield").hide();
    $(".submission").hide();
    
    $(".number").click(function() {
      $(this).fadeTo('fast', .50);
      $(this).fadeTo('fast', 1);
    });
    
    $(".callbutton").click(function() {
      $(this).fadeTo('fast', .50);
      $(this).fadeTo('fast', 1);
      $(".numfield").hide();
      $(".callbutton").hide();
      $(".endbutton").show();
      
      duration = 0;
      $(".duration").show();
      
      setInterval(function() { 
        duration+=1 
        $('.duration').text(duration);
      }, 1000);

    });
    
    $(".endbutton").click(function() {
      $(".endbutton").hide();
      $(".duration").hide();
      var final_time = duration
      $(".notefield").show();
      $(".submission").show();
      $('#call_duration').val($('#call_duration').val() + final_time);
    });    
    
  
    
    $("#1").click(function() {
      $('#call_number').val($('#call_number').val() + '1');
    });
    
    $("#2").click(function() {
      $('#call_number').val($('#call_number').val() + '2');
    });
    
    $("#3").click(function() {
      $('#call_number').val($('#call_number').val() + '3');
    });
    
    $("#4").click(function() {
      $('#call_number').val($('#call_number').val() + '4');
    });
    
    $("#5").click(function() {
      $('#call_number').val($('#call_number').val() + '5');
    });
    
    $("#6").click(function() {
      $('#call_number').val($('#call_number').val() + '6');
    });
    
    $("#7").click(function() {
      $('#call_number').val($('#call_number').val() + '7');
    });
    
    $("#8").click(function() {
      $('#call_number').val($('#call_number').val() + '8');
    });
    
    $("#9").click(function() {
      $('#call_number').val($('#call_number').val() + '9');
    });
    
    $("#0").click(function() {
      $('#call_number').val($('#call_number').val() + '0');
    });
    
    $("#pound").click(function() {
      $('#call_number').val($('#call_number').val() + '#');
    });
    
    $("#asterisk").click(function() {
      $('#call_number').val($('#call_number').val() + '*');
    });
});