
document.addEventListener('DOMContentLoaded', () => {
   const submit = document.querySelector('button[type="submit"]');
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
  
    submit.addEventListener('click', (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      if (email.match(valid)) {
        window.location.assign("success.html");
         return true;  

      }
  
     else {
        var email_error = document.getElementById("email_error");
        email_error.style.display = "block";
        return true;
      }
    });
    let email_change=document.getElementById('email_change');
       email_change.appendChild(email)
});






  




