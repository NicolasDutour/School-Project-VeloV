class Slider{
  constructor(element, slides, keyboard, click, auto){
    this.element = document.getElementById(element);
    this.slides = slides;
    this.currentSlide = 0;
    this.init();

    if (keyboard) {
      this.addKeyboardControl();
    }

    if (click) {
      this.addClickControl();
    }

    if (auto) {
      this.addAutoSlide();
    }
  }

  init() {
    let outerSlider = document.createElement("div");
    outerSlider.classList = "outer-slider";
    this.element.appendChild(outerSlider);

    let innerSlider = document.createElement("div");
    innerSlider.classList = "inner-slider";
    innerSlider.style.width = this.innerSliderWidth;
    outerSlider.appendChild(innerSlider);

    let prev = document.createElement('p');
    prev.id = 'prev';
    prev.classList = 'fas fa-less-than';
    this.element.insertAdjacentElement('afterBegin', prev);

    let next = document.createElement('p');
    next.id = 'next';
    next.classList = 'fas fa-greater-than';
    this.element.appendChild(next);

    for( let i = 0; i < this.slides.length; i++){
      this.addSlide(i, innerSlider);
    }
  }

  get innerSliderWidth(){
      return 100 * this.slides.length +"%";
  }

  addSlide(numSlide, container){
    container.innerHTML += `
      <div class="slide">
        <p>${this.slides[numSlide].text}</p>
        <img src="${this.slides[numSlide].image}">
      </div>`;
  }

  previousImage() {
    if (this.currentSlide === 0) {
      $(".inner-slider").animate({left: '-' + this.innerSliderWidth}, 0);
      $(".inner-slider").animate({left: '+=100%'}, 900);
      this.currentSlide = this.slides.length - 1;
    } else {
      $(".inner-slider").animate({left: '+=100%'}, 900);
      this.currentSlide -= 1;
    }
  }

  nextImage() {
    if (this.currentSlide === this.slides.length - 1) {
      $(".inner-slider").animate({left: '100%'}, 0);
      $(".inner-slider").animate({left: '-=100%'}, 900);
      this.currentSlide = 0;
    } else {
      $(".inner-slider").animate({left: '-=100%'}, 900);
      this.currentSlide += 1;
    }
  }




  addKeyboardControl(){
    document.body.addEventListener('keydown', (e) => {
      if (e.keyCode === 37) {
        this.previousImage();
      } else if (e.keyCode === 39) {
        this.nextImage();
      }
    });
  }

  addClickControl() {
    next.addEventListener('click', () => {
      this.nextImage();
    });

    prev.addEventListener('click', () => {
      this.previousImage();
    });
  }

  addAutoSlide() {
    setInterval( () => {
      this.nextImage();
    }, 3000);
  }
}
