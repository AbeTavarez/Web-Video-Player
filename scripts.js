//Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
 const toggle = player.querySelector('.toggle');
 const skipButtons = player.querySelectorAll('[data-skip]');
 const ranges = player.querySelectorAll('.player__slider');

//Functions
const togglePlay = function(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
};
//updateButton
const updateButton = function(){
    console.log('Updating button ......')
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
};

const skip = function(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
};

const handleRangeUpdate = function(){
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);
};

//Event listeners

//click play
video.addEventListener('click', togglePlay);
//update button when video is playing
video.addEventListener('play', updateButton);
//update button when video is paused
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
//skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));
//sliders range
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
range.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
