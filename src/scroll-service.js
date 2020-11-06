
export class ScrollService {
  constructor(scrollPosition) {
    scrollPosition = 0;
    this.scrollAction();
  }

  scrollAction() {
    window.addEventListener('scroll', this.scrollComment);
  }

  scrollComment() {
    var phone = document.getElementById('phone');

    if(window.scrollY > 420) {
      phone.style.position = 'fixed';
      phone.classList.remove('phone');
      phone.classList.add('static-phone');
    } else {
      phone.style.position = 'relative';
      phone.classList.remove('static-phone');
      phone.classList.add('phone');
    }
  }
}
