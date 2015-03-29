var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

$(document).ready(function() {
  Parse.initialize("VRWD786nEZSzo3qEIPiLtbvONegjGyXT5M8DJtHs", "Ym7pDr16KApRj6nV7vEsgOl3LF5VRTMOrgVzl5xR");
  
  
  $('#signup_form').on("submit", function(event) {
    submitToParse();
    event.preventDefault();
  });
  $('#signup_button').on("click", function(event) {
    submitToParse();
    event.preventDefault();
  });
  
  
  var submitToParse = function() {
    var email_val = $('#signup_email').val();
    var Signup = Parse.Object.extend("Signup");
    var signup = new Signup();
    signup.save({email: email_val}).then(function(object) {
      signupSuccess();
    });				 
  };
  var signupSuccess = function() {
    $("#form_before").fadeOut(1000, function() {
$('#myModal').modal('show')  
//      $("#myModal").toggle();
    });
    $("#form_after").fadeIn("fast", function() {
      
    });
  };

$('#try').on('click', function() {
   window.location.href="circuits.html";

});

//var mp = $('#youtube')[0];
//mp.setVolume(0);

});
