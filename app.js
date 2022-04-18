const phone = document.querySelector('.product-picture');
const phoneColor = document.querySelectorAll('.phone-colors img');
const body = document.querySelector('body');


// phoneColor.addEventListener('click', function() {
//     // body.style.backgroundColor = "#fff";
//     // phone.src = this.src;
//     alert(phone.src);
//  });
// // this.getAttribute('data-color');


for (let i = 0; i < phoneColor.length; i++) {
    phoneColor[i].addEventListener('click', function() {
        // body.style.backgroundColor = this;
        phone.src = this.src;
         switch (phone.src) {
            case 'http://127.0.0.1:5500/images/0.png':
               body.style.backgroundColor = "#000";
               break;
            case 'http://127.0.0.1:5500/images/1.png':
                body.style.backgroundColor = "#247ec8";
              break;
            case 'http://127.0.0.1:5500/images/2.png':
                body.style.backgroundColor = "#1e1e1e";
              break;
            case 'http://127.0.0.1:5500/images/3.png':
                body.style.backgroundColor = "#c79b53";
              break;
            case 'http://127.0.0.1:5500/images/4.png':
                body.style.backgroundColor = "#c82525";
              break;
             
          }
    });
}