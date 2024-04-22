const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () =>  {
  menuList.classList.toggle("hidden");
});

$("#formValidation").validate({
  rules:{
    name:{
      minlength: 2
    },
    email:{
      email:true
    },
    phone:{
      number:true,
      minlength: 10,
      maxlength:10
    }
  },
  messages: {
   name:{
    required: "Please enter your name",
    minlength: "Name at least 3 characters"
   },
   email:"Please enter your email address",
   phone:"Please enter your phone number",
   formMessage:"Please enter your phone number",
  },
  
  submitHandler: function(form) {
    form.submit();
  }
 });