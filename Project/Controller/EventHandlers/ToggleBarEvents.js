// Following lines of code marked with "**" were taken from: https://nikitahl.com/style-range-input-css on 5th of April 2022
const rangeInputs = document.querySelectorAll('input[type="range"]'); //**

function handleInputChange(e) {                                                         //**
    let target = e.target;                                                              //**
    if (e.target.type !== 'range') {                                                    //**
        target = document.getElementById('range')                             //**
    }                                                                                  //**
    const min = target.min;                                                            //**
    const max = target.max;                                                            //**
    const val = target.value;                                                          //**
    target.style.backgroundSize = (val - min) * 100 / (max - min) + "% 100%";          //**

    if (target.classList.contains("music-slider")) {
        musics.forEach(music => {
            music.volume = val / 100;
        });
    } else if (target.classList.contains("sound-slider")) {
        volumes.forEach(sound => {
            sound.volume = val / 100;
        });
    }
}                                                                                     //**


rangeInputs.forEach(input => {                                              //**
    input.addEventListener('input', handleInputChange);                         //**
});                                                                                  //**