function submitFuntion() {
  var form1 = document.getElementById("name");
  var form2 = document.getElementById("email");
  var form3 = document.getElementById("message");

  if (form1.value == ""){
     alert("Please fill in the red box");{
     form1.focus();
   //   focuses the variable 'form'
     form1.style.border = "solid 3px #401313";
   //   syles the varible 'form'
     return false;
   //   reurn function can only be true or false
      }
   }

   if (form2.value == ""){
      alert("Please fill in the red box");{
      form2.focus();
    //   focuses the variable 'form'
      form2.style.border = "solid 3px #401313";
    //   syles the varible 'form'
      return false;
    //   reurn function can only be true or false
       }
    }

    if (form3.value == ""){
       alert("Please fill in the red box");{
       form3.focus();
     //   focuses the variable 'form'
       form3.style.border = "solid 3px #401313";
     //   syles the varible 'form'
       return false;
     //   reurn function can only be true or false
        }
     }

}






// // When the browser is ready...
//   $(function() {
//     // validate
//     $("#contact").validate({
//         // Set the validation rules
//         rules: {
//             name: "required",
//             email: {
//                 required: true,
//                 email: true
//             },
//             message: "required",
//         },
//         // Specify the validation error messages
//         messages: {
//             name: "Please enter your name",
//             email: "Please enter a valid email address",
//             message: "Please enter a message",
//         },
//         // submit handler
//         submitHandler: function(form) {
//           //form.submit();
//            $(".message").show();
//            $(".message").fadeOut(4500);
//         }
//     });
//   });
