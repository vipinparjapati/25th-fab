let no = document.querySelector("#Count");
let Sub = document.querySelector("#Sub");
let Add = document.querySelector("#Add");
Add.addEventListener("click", function () {
    no.innerHTML = +no.innerHTML + 1;
});
Sub.addEventListener("click", function () {
    no.innerHTML = +no.innerHTML - 1;
});
$('.slick').slick({

    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: '.prev',
    nextArrow: '.next',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});