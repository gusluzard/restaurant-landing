window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  testimonials[i].classList.add("active");
  dots[i].classList.add("active");
}

setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 4000);
