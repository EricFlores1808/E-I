
  const form = document.querySelector('inciar');
  const correo = document.querySelector('#correo');
  const contraseña = document.querySelector('#contraseña');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!correo.validity.valid) {
      alert('Por favor ingrese un correo electrónico válido.');
      return;
    }

    if (contraseña.value.length < 2) {
      alert('Debe ingresar una contraseña!');
      return;
    }
    form.submit();
  });
