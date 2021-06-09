var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    // add more options here
    prevNextButtons: false,
    freeScroll: true,
    freeScrollFriction: 0.03,
    pageDots: false,
    wrapAround: true,
    cellAlign: 'center',
    lazyLoad: true,
    contain: true,
    autoPlay: 1200
});
    
// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
// // options
// });