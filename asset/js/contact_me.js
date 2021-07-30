//   koneksi form ke google
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxjy7YXFT3_H-7y0pa1jewDeYLnT3oy4RhoxqqBOLYGU7Qhz9DjLbedw1pgzpsLhkEwWw/exec';
  const form = document.forms['ikwal-contact-form'];
  const btnKirim = document.querySelector('.btn-kirim')
  const btnLoading = document.querySelector('.btn-loading')
  const myAlert = document.querySelector('.my-alert')
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    // event ketika tombol submit di klick
    // tampilkan tombol loading, hilangkan tombol submit
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // tampilkan tombol submit, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan alert
        myAlert.classList.toggle('d-none');
        // reset form
        form.reset();
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message))
  })
