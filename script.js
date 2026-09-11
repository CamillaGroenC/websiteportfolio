const slider = document.querySelector("#project-slider");

const projectTrack = document.querySelector(".project-track");

const projectWindow = document.querySelector(".project-window");

slider.addEventListener("input", function () {

    // Hvor bred er hele rækken med projekter?
    const trackWidth = projectTrack.scrollWidth;

    // Hvor bredt er området hvor projekterne bliver vist?
    const windowWidth = projectWindow.clientWidth;

    // Hvor langt må rækken maksimalt flyttes?
    const maxMove = Math.max(0, trackWidth - windowWidth);


    // Sliderens værdi går fra 0 - 100
    const sliderValue = slider.value;

    // Beregner hvor langt projekt-rækken skal flyttes
    const moveAmount = (sliderValue / 100) * maxMove;

    // Flytter projekterne
    projectTrack.style.transform =
        `translateX(-${moveAmount}px)`;

});