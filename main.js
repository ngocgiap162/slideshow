var slides = $('.my_slide')
var thumbnails = $('.thumbnail_image');
var slideIndex = 0;
slides[slideIndex].style.display = 'block';
thumbnails[slideIndex].style.opacity = 1;

function showSlide(slideIndex) {
    $('.my_slide').hide();
    slides[slideIndex].style.display = 'block';
    $('.thumbnail_image').css('opacity', '0.5')
    thumbnails[slideIndex].style.opacity = '1';
}

$('.next').click(function () {
    if (slideIndex < slides.length - 1) {
        slideIndex += 1;
    } else {
        slideIndex = 0
    }
    showSlide(slideIndex);
})

$('.previous').click(function() {
    if (slideIndex == 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex -= 1;
    }
    showSlide(slideIndex);
})


// var thumbnails = $('.thumbnail_image');
// for (var i = 0; i < thumbnails.length; i++) {
//     thumbnails[i].onclick = function () {
//         var value = this.getAttribute('value')
//         var thumbnailIndex = parseInt(value)
//         slides[slideIndex].style.display = 'none';
//         slideIndex = thumbnailIndex;
//         slides[slideIndex].style.display = 'block';
//         $('.thumbnail_image').css('opacity', '0.5')
//         this.style.opacity = 1
//     }
// }


// var g = document.querySelector('.thumbnail');
// for (var i = 0, len = g.children.length; i < len; i++) {
//     (function(index){
//         g.children[i].onclick = function(){
//               console.log(index);
//         }    
//     })(i);
// }







// var slides = document.querySelectorAll('.my_slide')
// var slideIndex = 0;
// slides[0].style.display = 'block';

// document.querySelector('.next').onclick = function () {
//     if (slideIndex < slides.length - 1) {
//         slideIndex += 1;
//         slides[slideIndex].style.display = 'block';
//         slides[slideIndex - 1].style.display = 'none';
//     } else {
//         slides[slideIndex].style.display = 'none';
//         slideIndex = 0
//         slides[0].style.display = 'block';
//     }
// }

// document.querySelector('.previous').onclick = function () {
//     if (slideIndex == 0) {
//         slides[0].style.display = 'none';
//         slides[slides.length - 1].style.display = 'block';
//         slideIndex = slides.length - 1;
//     } else {
//         slideIndex -= 1;
//         slides[slideIndex].style.display = 'block';
//         slides[slideIndex + 1].style.display = 'none';
//     }
// }

// var thumbnails = document.querySelectorAll('.thumbnail_image');
// for (var i = 0; i < thumbnails.length; i++) {
//     thumbnails[i].onclick = function () {
//         var value = this.getAttribute('value')
//         var thumbnailIndex = parseInt(value)
//         slides[slideIndex].style.display = 'none';
//         slideIndex = thumbnailIndex;
//         slides[slideIndex].style.display = 'block';
//         $('.thumbnail_image').css('opacity', '0.5')
//         this.style.opacity = 1
//     }
// }