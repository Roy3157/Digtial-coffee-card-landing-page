

const btn = document.getElementById('btn-submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   btn.disabled = true;
   btn.innerHTML = 'Sending...';
  //get the fields 
  var body = 

  //get form data and send to backend
  fetch('http://localhost:3000/api/sendEmail', {
    method: 'POST',
    body: body
  }).then(()=> {
    btn.innerHTML = 'Submit';
    btn.disabled = false;
  })
  .catch(()=> {
    btn.innerHTML = 'Submit';
    btn.disabled = false;
    alert(JSON.stringify(err));
  });
});