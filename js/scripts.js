$(document).ready(function() {

  $("#addContact").submit(function(event) {
    var firstNameForm = $("#firstName").val();
    var lastNameForm = $("#lastName").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipcode = $("#zipcode").val();

    var newAddress = {
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
      fullAddress: function() {
        return this.street + ", " + this.city + ", " + this.state +  ", " + this.zipcode;
      }
    };


    var contact = {
      firstName: firstNameForm,
      lastName: lastNameForm,
      address: newAddress.fullAddress()
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
