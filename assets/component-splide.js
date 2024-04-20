if(!customElements.get("custom-slider")) {
class CustomSlider extends HTMLElement{

   constructor(){
      super();
      this.element = this
      console.log(this)
      this.options = JSON.parse(this.element.dataset.sliderOptions);
      this.active = this.element.dataset.active
      console.log(this.active)

      this.displaySliderShow()

   }

    displaySliderShow(){

      document.addEventListener('DOMContentLoaded', function () {

         // Intialization of first splider 

         this.reviews =    new Splide(this.element, this.options).mount()

         this.imageSlide = new Splide("#display-image", {
            type: "fade",
            perPage:1,
            pagination:false,
            arrows: false
         }).mount()

         this.reviews.sync(this.imageSlide)
   
     
       });



    
      
      
    }



  }
  customElements.define("custom-slider", CustomSlider)

}

  