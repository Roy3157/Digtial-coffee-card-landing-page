
emailjs.init('cYszRWLG4VIoLB7uV')
const btn = document.getElementById('btn-submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   btn.disabled = true;
   btn.innerHTML = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_fu48g3t';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = 'Submit';
      btn.disabled = false;
      document.getElementById('form-submitted').classList.remove("hidden");
    }, (err) => {
      btn.innerHTML = 'Submit';
      btn.disabled = false;
      alert(JSON.stringify(err));
    });
});