$(document).ready(function() {

    var contacts = [];
    var sayHello = function(contact) {
      alert("Yo, " + contact.firstName + "! What's shakin'??");
    };

  $("#addContact").submit(function(event) {
    var firstNameForm = $("#firstName").val();
    var lastNameForm = $("#lastName").val();
    var addressForm = $("#address").val();

    var contact = {
      firstName: firstNameForm,
      lastName: lastNameForm,
      address: addressForm
    };

    $("#contact-list").append("<li><span class='contact clickable'>" + contact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $(".first-name").text(contact.firstName);
      $(".last-name").text(contact.lastName);
      $(".address").text(contact.address);
      $("#contacts").show();
    });



    event.preventDefault();
  });




});
