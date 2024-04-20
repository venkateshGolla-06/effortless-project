if(!customElements.get("custom-slider")) {
class CustomSlider extends HTMLElement{

   constructor(){
      super();
      this.element = this
      console.log(this)
      this.options = JSON.parse(this.element.dataset.sliderOptions);
      console.log(this.options);

      this.displaySliderShow()

   }

    displaySliderShow(){

      let reviews =    new Splide(this.element, this.options).mount()
      let imageSlide = new Splide("#display-image", {
         type: "fade",
         perPage:1,
         pagination:false,
         arrows: false
      }).mount()
      reviews.sync(imageSlide)

      reviews.on("active", function(slide) {
         var activeIndex = reviews.index;
         console.log(activeIndex)
      } )
    }



  }
  customElements.define("custom-slider", CustomSlider)

}

  