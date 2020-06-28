const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e =>{
  e.preventDefault();
  const emailValue = form['email'].value;
  const small = document.getElementById('error');

  if (!emailValue){
    small.innerHTML = 'Please enter your email';
    small.style.display = 'block';
  } else if (!isValidEmail(emailValue)) {
    small.style.display = 'block';
  } else{
    alert('submitted');
  }

});

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
