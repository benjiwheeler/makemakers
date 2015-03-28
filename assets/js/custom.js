var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

$(document).ready(function() {
Parse.initialize("VRWD786nEZSzo3qEIPiLtbvONegjGyXT5M8DJtHs", "Ym7pDr16KApRj6nV7vEsgOl3LF5VRTMOrgVzl5xR");

var TestObject = Parse.Object.extend("Signup");
var testObject = new TestObject();
//testObject.save({email: "bar"}).then(function(object) {
//  alert("yay! it worked");
//});

});
