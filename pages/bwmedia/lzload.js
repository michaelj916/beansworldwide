// find all data-src attributed images
const targets = document.querySelectorAll('[data-src]');

// on scroll, display images
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            console.log('working');

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                img.setAttribute('src', src);
                
                observer.disconnect();
            }
        });
    });

    io.observe(target);
};

// load in all images
targets.forEach(lazyLoad);