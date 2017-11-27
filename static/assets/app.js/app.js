$(document).ready(function () {
	



    $("#service-link").click(function(){
       
        $("#service-form").show(1000);
       
          
    });

     $("#feedback-link").click(function(){
        $("#feedback").hide(1000);
        $("#feedback-form").show(1000);
          
    });

    $("#feedback-cancel").click(function(){
        $("#feedback").show(1000);
        $("#feedback-form").hide(1000);
        
            $('#feedback_name').val('');
                    $('#feedback_email').val('');
                    $('#feedback_phone_no').val('');
                    $('#feedback_cook_name').val('');
                    $('#feedback_comment').val('');

        });

    


    $("#cancel").click(function(){
        $("#service-form").hide(1000);

               $('#service_name').val('');
                $('#service_email').val('');
                $('#service_phone_no').val('');
                $('#service_location').val('');
                $('#cook_preferences').val('');
                $('#no_of_people').val('');
                $('#service_address').val('');
                $('#service_landmark').val('');
                $('#service_pincode').val('');
                $('#service_alternate_phone_no').val('');
            

        });

    

$("#apply_cancel").click(function(){
                $('#apply_name').val('');
                $('#apply_email').val('');
                $('#apply_phone_no').val('');
            

        });




/* contact form validation 	*/

 var contactNamePattern = /^[a-zA-Z][a-zA-Z ]+$/;
    var msg;
    $('#contact_name').keyup(function () {
        var data = $(this).val();
        console.log(data);
        if (data.match(contactNamePattern)) {
            if(data.length>1){
            $(this).parent('div').removeClass('has-warning').addClass('has-success');
        }
        }
        else if (data == "") {
            $(this).parent('div').removeClass('has-success').addClass('has-warning');
            msg = "Name field cannot be empty";
        }
        else {
            $(this).parent('div').removeClass('has-success').addClass('has-warning');

            msg = "Enter characters only";
        }
        document.getElementById("cformName").innerHTML = msg;
    });
	
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    $('#contact_email').keyup(function (e) {
        var data = $('#contact_email').val().trim();
        console.log(data);
        if (data.match(pattern)) {
            $(this).parent('div').removeClass('has-warning').addClass('has-success');
        }
        else {
            $(this).parent('div').removeClass('has-success').addClass('has-warning');
        }
    });

    var text;
    $('#contact_phone_no').keyup(function (e) {

        var data = $('#contact_phone_no').val().trim();

        console.log(data);

        if ((isNaN(data))) {

            $(this).parent('div').removeClass('has-success').addClass('has-warning');
            text = "Enter number only";
        }
         else {

            $(this).parent('div').removeClass('has-warning').addClass('has-success');
        }

        document.getElementById("cformPhone").innerHTML = text;



    });

 /*contact form validation */	

  /*feedback form validation */
var feedbackNamePattern = /^([a-zA-Z]){2,30}$/;
var msg;
$('#feedback_name').keyup(function () {
    var data = $(this).val();
    console.log(data);
    if (data.match(feedbackNamePattern)) {

        $(this).parent('div').removeClass('has-warning').addClass('has-success');

    }

    else if (data == "") {

        $(this).parent('div').removeClass('has-success').addClass('has-warning');

        msg = "Name field cannot be empty";

    }

    else {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        msg = "Enter characters only";
    }

    document.getElementById("name").innerHTML = msg;
});


var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
$('#feedback_email').keyup(function (e) {
    var data = $('#feedback_email').val().trim();
    console.log(data);
    if (data.match(pattern)) {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');
    }
else {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
    }
});


var text;
$('#feedback_phone_no').keyup(function (e) {
    var data = $('#feedback_phone_no').val().trim();
    console.log(data);
    if ((isNaN(data))) {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');

        text = "Enter number only";
    }

    else {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');

    }

    document.getElementById("phnum").innerHTML = text;



});
var feedbackCookNamePattern = /^([a-zA-Z]){2,30}$/;
var msg;
$('#feedback_cook_name').keyup(function () {
    var data = $(this).val();
    console.log(data);
    if (data.match(feedbackCookNamePattern)) {

        $(this).parent('div').removeClass('has-warning').addClass('has-success');

    }

    else if (data == "") {

        $(this).parent('div').removeClass('has-success').addClass('has-warning');

        msg = "Name field cannot be empty";

    }

    else {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        msg = "Enter characters only";
    }

    document.getElementById("cook_nm").innerHTML = msg;
});

var msg;
$('#feedback_comment').keyup(function () {
    var data = $(this).val();
    console.log(data);
    if (data == "") {

        $(this).parent('div').removeClass('has-success').addClass('has-warning');
         msg = "Comment field cannot be empty!";
    }
    else
    {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');
    }
    
       document.getElementById("feedback_cmnt").innerHTML = msg;
    
});

/*feedback form validation */	



/*service form validation  */
var serviceNamePattern = /^([a-zA-Z]){2,30}$/;
var msg;
$('#service_name').keyup(function (e) {
    var data = $(this).val();
    console.log(data);
    if (data.match(serviceNamePattern)) {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');
    }
    else if (data == "") {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        msg = "Name field cannot be empty";
    }
    else {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        msg = "Enter characters only";
    }
    document.getElementById("service_nm").innerHTML = msg;
});

var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
$('#service_email').keyup(function (e) {
    var data = $('#service_email').val().trim();
    console.log(data);
    if (data.match(pattern)) {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');

    }
    else {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
    }
});

var text;
$('#service_phone_no').keyup(function (e) {
   var data = $('#service_phone_no').val().trim();
    console.log(data);

    if ((isNaN(data))) {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        text = "Enter number only";
    }
    else {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');
    }

    document.getElementById("service_phone").innerHTML = text;
});

var text;
$('#service_pincode').keyup(function (e) {
    var data = $('#service_pincode').val().trim();
    console.log(data);
    if ((isNaN(data))) {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        text = "Enter number only";
    }
    else {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');
    }
    document.getElementById("service_pin").innerHTML = text;
});
var text;

$('#service_alternate_phone_no').keyup(function (e) {

    var data = $('#service_alternate_phone_no').val().trim();
    console.log(data);

    if ((isNaN(data))) {

        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        text = "Enter number only";
    }

    else {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');

    }
    document.getElementById("service_alternate_phone").innerHTML = text;
});

var msg;
$('#service_address').keyup(function (e) {
    var data = $(this).val();
    console.log(data);
    if (data == "") {

        $(this).parent('div').removeClass('has-success').addClass('has-warning');
         msg = "Address Field cannot be Empty";
    }
    else
    {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');
    }
    
       document.getElementById("service_ad").innerHTML = msg;
    
});

/*service form validation  */

/*career form validation  */
var charPattern = /^[a-zA-Z]+$/;
var text;
$('#apply_name').keyup(function (e) {
    var data = $(this).val();
    console.log(data);
    if (data.match(charPattern)) {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');
    }
    else if (data == "") {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        text = "Name field cannot be empty!!!!";
    }
    else {

        $(this).parent('div').removeClass('has-success').addClass('has-warning');

        text = "Enter characters only";
    }
    document.getElementById("apply_nm").innerHTML = text;
});


var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
$('#apply_email').keyup(function (e) {
    var data = $('#apply_email').val().trim();
    console.log(data);
    if (data.match(pattern)) {

            $(this).parent('div').removeClass('has-warning').addClass('has-success');

    }

    else {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
    }
});

var text;
$('#apply_phone_no').keyup(function (e) {
  var data = $('#apply_phone_no').val().trim();
  console.log(data);
if ((isNaN(data))) {
        $(this).parent('div').removeClass('has-success').addClass('has-warning');
        text = "Enter number only";
    }

    else {
        $(this).parent('div').removeClass('has-warning').addClass('has-success');

    }

    document.getElementById("phnum").innerHTML = text;
});
/*career form validation  */




/* "booking for" dropdown */
(function() {
  var bOptions = {
    "household": ['Gachibowli', 'Kondapur', 'Madhapur','Miyapur'],
    "ocassion": ['Gachibowli', 'Kondapur', 'Madhapur','Miyapur','Lingampally','Mehdipatnam','Ameerpet','Begumpet']
  };

  var service_booking = document.getElementById('service_booking');
  var service_location = document.getElementById('service_location');
 

  
  service_booking.onchange = function() {

    service_location.length = 0;

    var _val = this.options[this.selectedIndex].value;

    for (var i in bOptions[_val]) {
   
      var op = document.createElement('option');
    
      op.value = bOptions[_val][i];
   
      op.text = bOptions[_val][i];
    
      service_location.appendChild(op);
    }
  };
  //fire this to update service_location on load
  service_booking.onchange();

})();

/* booking for dropdown */


	})

var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var validateEmail = function (data) {

    console.log('validate email', data);


    return data.match(emailPattern) ? true : false;

}
 

/* contact form submission */
var contactUs = function () {

    $('#contact_error').html('');

    var requestData = {}, errMsg = '';

    requestData.name = $('#contact_name').val();

    requestData.email = $('#contact_email').val();

    requestData.phone = $('#contact_phone_no').val();

    console.log("contactus", requestData);

    //console.log(!requestData.name);

    if (!requestData.name && !requestData.email && !requestData.phone) {

        errMsg = 'All fields are required.'

        $('#contact_error').html(errMsg);

    }

    else if (!validateEmail(requestData.email)) {

        errMsg = 'Enter valid email adresss.';

        $('#contact_error').html(errMsg);

    }

    else if (isNaN(requestData.phone) || requestData.phone.length != 10) {

        errMsg = 'Enter valid phone Number.';

        $('#contact_error').html(errMsg);

    }

    else {

        console.log('api calling');

        $.ajax({

            url: 'http://127.0.0.1:5000/ic/contactus',

            type: 'POST',

            contentType: "application/json; charset=utf-8",

            datatype: 'json',

            crossDomain: true,

            data: JSON.stringify(requestData),

            success: function (data) {

                if (data.notification.code == 200) {
                    console.log('vinay');

                     $('#msg5').text("Thanks!! We will contact you soon"); 
                    $('#sc').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc").addClass('hidden');

  }, 7000)
                  

                }

                else {

                      $('#msg6').text("Failed!! Email or phone number is already with us...!!Try again"); 
                     $('#sc1').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc1").addClass('hidden');

  }, 7000);

                }


                $('#contact_name').val('');
                $('#contact_email').val('');
                $('#contact_phone_no').val('');

            }



        });

    }

}
/* contact form submission */

/* feedback-form submission */
var customerFeedback = function (el) {

   

    $('#feedback_error').html('');

    var requestData = {}, errMsg = '';

    requestData.customerName = $('#feedback_name').val();

    requestData.customerEmail = $('#feedback_email').val();

    requestData.customerPhone = $('#feedback_phone_no').val();


    requestData.feedback = $('#feedback_comment').val();
    requestData.cookName = $('#feedback_cook_name').val();
    

    console.log('form data', requestData);

    if (!requestData.customerName && !requestData.customerPhone) {

        errMsg = 'Name and Phone number are required.'

        $('#feedback_error').html(errMsg);

    }

    else if (isNaN(requestData.customerPhone) || requestData.customerPhone.length != 10) {

        errMsg = 'Enter valid phone Number.';

        $('#feedback_error').html(errMsg);

    }

    else if (requestData.customerEmail && !validateEmail(requestData.customerEmail)) {

        errMsg = 'Enter valid email.';

        $('#feedback_error').html(errMsg);

    }
    

    else {

        console.log('api calling');

        $.ajax({

            url: 'http://127.0.0.1:5000/ic/feedback',

            type: 'POST',

            contentType: "application/json; charset=utf-8",

            dataType: 'json',

            crossDomain: true,

            data: JSON.stringify(requestData),

            success: function (data) {

                $('#feedback-form').hide(1000);
                $('#feedback').show(1000);


                if (data.notification.code == 200) {

                    $('#msg5').text("Thanks!! We will contact you soon"); 
                    $('#sc').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc").addClass('hidden');

  }, 7000); 

                }

                else {

                      $('#msg6').text("Failed!! Email or phone number is already with us...!!Try again"); 
                     $('#sc1').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc1").addClass('hidden');

  }, 7000);

                }

                    $('#feedback_name').val('');
                    $('#feedback_email').val('');
                    $('#feedback_phone_no').val('');
                    $('#feedback_cook_name').val('');
                    $('#feedback_comment').val('');
            },

            error: function (data) {

                if (data.notification.code == 500) {

                    console.log("submission  failed");

                      $('#msg6').text("Failed!! Email or phone number is already with us...!!Try again"); 
                     $('#sc1').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc1").addClass('hidden');

  }, 7000);

                }

            }

        });

    }

}
/* feedback-form submission */


/* career-form submission */

var applyForCarrer = function (el) {

    console.log("apply for carrer", el);

    $('#apply_error').html('');

    var requestData = {}, errMsg = '';

    requestData.name = $('#apply_name').val();

    requestData.email = $('#apply_email').val();

    requestData.phone = $('#apply_phone_no').val();

    requestData.role = $('#apply_designation').val();

    console.log('form data', requestData);

    if (!requestData.name && !requestData.phone) {

        errMsg = 'Name and Phone number are required.'

        $('#apply_error').html(errMsg);

    }

    else if (isNaN(requestData.phone) || requestData.phone.length != 10) {

        errMsg = 'Enter valid phone Number.';

        $('#apply_error').html(errMsg);

    }

    else if (requestData.email && !validateEmail(requestData.email)) {

        errMsg = 'Enter valid email.';

        $('#apply_error').html(errMsg);

    }

    else {

        console.log('api calling');

        $.ajax({

            url: 'http://127.0.0.1:5000/ic/careers',

            type: 'POST',

            contentType: "application/json; charset=utf-8",

            dataType: 'json',

            crossDomain: true,

            data: JSON.stringify(requestData),

            success: function (data) {

                

                if (data.notification.code == 200) {
                    
                    $('#msg5').text("Thanks!! We will contact you soon"); 
                    $('#sc').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc").addClass('hidden');

  }, 7000); 

                }

                else {
                       $('#msg6').text("Failed!! Email or phone number is already with us...!!Try again"); 
                     $('#sc1').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc1").addClass('hidden');

  }, 7000);

                   /* $('#error-modal').modal('show'); */

                }

                $('#apply_name').val('');

                $('#apply_email').val('');

                $('#apply_phone_no').val('');

            },

            error: function (data) {

                if (data.notification.code == 500) {

                    console.log("apply failed");

                    $('#msg6').text("Failed!! Email or phone number is already with us...!!Try again"); 
                     $('#sc1').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc1").addClass('hidden');

  }, 7000);

                }

            }

        });

    }

}

/* career-form submission */



/* for video */
var vid = document.getElementById("bgvid");
//var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


/*pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
}) */


/* for video */


var applyForService = function (el){
	 console.log("apply for service", el);

    $('#service_error').html('');

    var requestData = {}, errMsg = '';

    requestData.bookingfor=$('#service_booking').val();
    requestData.customerName = $('#service_name').val();
    requestData.customerEmail = $('#service_email').val();
    requestData.customerPhone = $('#service_phone_no').val();
    requestData.pincode = $('#service_pincode').val();
    requestData.customerLocation = $('#service_location').val();
    requestData.city = $('#service_city').val();
    requestData.state = $('#service_state').val();
    requestData.address = $('#service_address').val();
    requestData.landmark = $('#service_landmark').val();
    requestData.alternatePhoneNo = $('#service_alternate_phone_no').val();
    requestData.cookPreference= $('#cook_preferences').val();
    requestData.numberOfMembers = $('#no_of_people').val();
    console.log("form data", requestData);

    if (!requestData.customerName && !requestData.customerEmail && !requestData.customerPhone && !requestData.numberOfMembers && !requestData.pincode && !requestData.address) {

        errMsg = 'All fields are required.';

        $('#service_error').html(errMsg);

    }

    else if (isNaN(requestData.customerPhone) || requestData.customerPhone.length != 10) {

        errMsg = 'Enter valid phone Number.';

        $('#service_error').html(errMsg);

    }

    else if (isNaN(requestData.pincode) || requestData.pincode.length != 6) {

        errMsg = 'Enter valid pincode';

        $('#service_error').html(errMsg);

    }

    else if (requestData.address == "") {
        errMsg = 'Enter Address';

        $('#service_error').html(errMsg);

    }

    else if (!validateEmail(requestData.customerEmail)) {

        errMsg = 'Enter valid Email Id.';

        $('#service_error').html(errMsg);

    }

    else if (requestData.numberOfMembers < 1) {

        errMsg = 'Enter valid number of people';

        $('#service_error').html(errMsg);

    }



    else {

        $.ajax({

            url: 'http://127.0.0.1:5000/ic/cookbooking',

            type: 'POST',

            contentType: "application/json; charset=utf-8",

            datatype: 'json',

            crossDomain: true,

            data: JSON.stringify(requestData),

            success: function (data) {

                 $('#service-form').hide(1000);
                $('#service').show(1000);

                if (data.notification.code == 200) {

                    console.log("apply successfull")

                     $('#msg5').text("Thanks!! We will contact you soon"); 
                    $('#sc').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc").addClass('hidden');

  }, 7000); 
  
  
  

                }

                else {

                       $('#msg6').text("Failed!! Email or phone number is already with us...!!Try again"); 
                     $('#sc1').removeClass('hidden');
                    setTimeout(function(){
                     $("#sc1").addClass('hidden');

  }, 7000);

                }

                $('#service_name').val('');
                $('#service_email').val('');
                $('#service_phone_no').val('');
                $('#service_location').val('');
                $('#cook_preferences').val('');
                $('#no_of_people').val('');
                $('#service_address').val('');
                $('#service_landmark').val('');
                $('#service_pincode').val('');
                $('#service_alternate_phone_no').val('');
            }


        });

    }
	
	
	
}

/*window.setTimeout(function() {
    $(".alert").fadeTo(1000, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 4000);*/



