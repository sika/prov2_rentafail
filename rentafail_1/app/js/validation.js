$('document').ready(function () {
    $('#username').focus(); //cursor start
    $('#form_register').validate({//advanced validation form
        rules: {
            username: {
                required: true,
                //email: true
            },
            password: {
                required: true
            },
            password_confirm: {
                required: true,
                equalTo: '#password'
            },
            email: {
                required: true,
                email: true
            }
        }, //end of rules
        messages: {
            username: {
                required: "Field is required."
            },
            password: {
                required: "Field is required."
            },
            password_confirm: {
                required: "Field is required.",
                equalTo: "The passwords don't match."
            },
            email: {
                required: "Field is required.",
                email: "Please type a valid email."
            }
        }, // end of messages 
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        } // end errorPlacement
    });//end validate
}); //end ready