(function(){
    const MODE_SELECTOR = '.nav__link--mode--active';
    const NEW_GAME_CLASS = 'nav__link--new-game';

    const RGB_TITLE = document.querySelector('.header__rgb-number');
    const COLOR_CONTAINER = document.querySelector('.color__container');

    const DEFAULT_MODE = 'hard';
    const difficulties = {
        easy: { colorCount: 3 },
        hard: { colorCount: 6 }
    }

    function init() {
        let newRGB = _randomRGB();

        //update RGB title
        RGB_TITLE.textContent = `RGB (${newRGB})`;

        //clear color container
        COLOR_CONTAINER.innerHTML = '';

        //get current game mode (amount of colors)
        let mode = getGameMode();
        let colorCount = difficulties[mode].colorCount;

        //generate the order number of div with the correct color
        let correctColor = _randomNum(colorCount);

        //generate colors
        let randColor = '';
        for(let i = 1; i <= colorCount; i++) {

            randColor = (i == correctColor) ? `rgb(${newRGB})` : `rgb(${_randomRGB()})`;
            COLOR_CONTAINER.append( createColorDiv(randColor) );

        }
    }

    function getGameMode() {
        let mode = document.querySelector(MODE_SELECTOR).dataset.value;

        return ( mode && Object.hasOwn(difficulties, mode) ) ? mode : DEFAULT_MODE;
    }

    function createColorDiv(randColor) {
        let colorDiv = document.createElement('div');
        colorDiv.className = 'color color--animated';

        colorDiv.style.color = randColor;
        colorDiv.style.backgroundColor = randColor;

        return colorDiv;
    }

    //events:
    // 1. New game link
    // 2. Game mode links
    // 3. Color container (with propagation)

    function _randomRGB() {
        let R = Math.ceil(Math.random() * 255);
        let G = Math.ceil(Math.random() * 255);
        let B = Math.ceil(Math.random() * 255);

        return `${R}, ${G}, ${B}`;

    }

    function _randomNum(max) {
        return Math.ceil(Math.random() * max);
    }

    init();
})();