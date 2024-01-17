var videoPaused = true
function playVideo() {
    var videoPlayer = document.getElementById('videoPlayer');
    if(videoPaused){
        videoPlayer.play()
    }else{
        videoPlayer.pause()
    }
    videoPaused = ! videoPaused
}

const myModal = new bootstrap.Modal('#customModal')
// myModal.show()

const swiperEl = document.querySelector('swiper-container');

const params = {
// array with CSS styles
injectStyles: [
    `
    .swiper-button-next svg path,
    .swiper-button-prev svg path{
        fill: #fff;
    }
    .swiper-pagination-bullet{
        background: #fff;
    }
    `,
],

};

Object.assign(swiperEl, params);

swiperEl.initialize();
