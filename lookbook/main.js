const next_btn = document.querySelector('#next');
const prev_btn = document.querySelector('#prev');
const slider = document.querySelector('.slider');
let first_slide;
let last_slide;
let projects = [
    {
        image: "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/87683330_123261885789414_4930451282253042238_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Xk9icSv8vxwAX8ai9xy&oh=15b697120535f55982716f8f833d4fb2&oe=5F0E66DD"
    },
    {
        image: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/90510500_1060026557703625_2434725258331281928_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=4hf2Jq7lgXMAX8coMLH&oh=fd1ddded549a9f43c4b1bc97ccc42476&oe=5F0DA5BC"
    },
    {
        image: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/90094449_226311231850157_5126380597120759325_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=IItb5QAr_B8AX9qkqPn&oh=4cefbd93f8df71acab16156f76218506&oe=5F0B7B82"
    },
    {
        image: "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/65807850_447049892544465_5079929792574383770_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=rrmm2xpMUW4AX-PoLCD&oh=04b8c14a230ba62082aea12eeed9736e&oe=5F0E1EFB"
    }
]

projects.forEach(({image}, i) => {
    const slide = document.createElement('div');
    slide.classList.add('slider__slide');
    slide.style.backgroundImage = "url('" + image + "')";
    if (i == 0) {
        first_slide = slide;
        
        slide.classList.add('active');
    }

    if (i + 1 == projects.length) {
        last_slide = slide;
    }

    slider.appendChild(slide);
});


next_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    let sibling = active_slide.nextElementSibling;
    if (sibling == null) {
        sibling = first_slide;
    }
    

    if (sibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        sibling.classList.add('active');
    }
});
prev_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    let sibling = active_slide.previousElementSibling;
    if (sibling == null || !sibling.classList.contains('slider__slide')) {
        sibling = last_slide;
        console.log(sibling);
        
    }
    

    if (sibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        sibling.classList.add('active');
    }
});

document.body.style.overflow = 'hidden';