$(document).ready(function() {
    $("#add-address").click(function() {
        $("new_address").append('<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
               '<input type="text" class="form-control new-street">' +
             '</div>' +
             '<div class="form-group">' +
               '<label for="new-city">City</label>' +
               '<input type="text" class="form-control new-city">' +
             '</div>' +
             '<div class="form-group">' +
               '<label for="new-state">State</label>' +
               '<input type="text" class="form-control new-state">' +
             '</div>' +
           '</div>');
    });

  $("#addContact").submit(function(event) {
    var firstNameForm = $("#firstName").val();
    var lastNameForm = $("#lastName").val();

    var newContact = {
      firstName: firstNameForm,
      lastName: lastNameForm,
      addresses: []
    };

    $(".new-address").each(function() {
        var street = $(this).find("input.street").val();
        var city = $(this).find("input.city").val();
        var state = $(this).find("input.state").val();
        var zipcode = $(this).find("input.zipcode").val();
        var addressType = $(this).find("input.addressType").val();

        var newAddress = {
          street: street,
          city: city,
          state: state,
          zipcode: zipcode,
          addressType: addressType
        };
        console.log(newAddress);
        newContact.addresses.push(newAddress);
        console.log(newContact);
        debugger;

    });

    $("#contact-list").append("<li><span class='contact clickable'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#contacts").show();

      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.addressType + ", " address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    });

    $("input#firstName").val();
    $("input#lastName").val();
    $("input.street").val();
    $("input.city").val();
    $("input.state").val();
    $("input.zipcode").val();
    $("input.address-type").val();

    event.preventDefault();
  });
});
