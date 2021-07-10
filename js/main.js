let menu = document.getElementsByClassName('menu');
let ul = document.getElementById("ul");
 
function push(){
    ul.classList.toggle('active');
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

$('.centers').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
                          {
                            breakpoint: 1200,
                            settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1
                            }
                          },
                          {
                            breakpoint: 840,
                            settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1
                            }
                          },
                          {
                            breakpoint: 490,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }

                        ]
    
});
