(function(){
    const MODE_SELECTOR = '.nav__link--mode--active';
    const NEW_GAME_CLASS = 'nav__link--new-game';

    const RGB_TITLE = document.querySelector('.header__rgb-number');
    const COLOR_CONTAINER = document.querySelector('.color__container');

    const modes = {
        easy: 3,
        hard: 6
    }
    const DEFAULT_MODE = 6;
    
    function init() {
        
        //update RGB title
        let newRGB = generateRGB();
        RGB_TITLE.textContent = `RGB (${newRGB})`;

        //clear color container
        COLOR_CONTAINER.innerHTML = '';

        //get current game mode (amount of colors)
        let currMode = document.querySelector(MODE_SELECTOR).dataset.value;
        let colors = Object.hasOwn(modes, currMode) ? modes[currMode] : DEFAULT_MODE;

        //generate the number of a random color div that will have the correct color
        let correctColor = randomNum(colors);

        //generate colors
        for(let i = 1; i <= colors; i++) {
            let colorDiv = document.createElement('div');
            colorDiv.className = 'color color--animated';

            if(i == correctColor) {
                colorDiv.style.backgroundColor = `rgb(${newRGB})`;
            } else {
                colorDiv.style.backgroundColor = `rgb(${generateRGB()})`;
            }
            colorDiv.style.color = colorDiv.style.backgroundColor;

            COLOR_CONTAINER.append(colorDiv);
        }
    }

    //events:
    // 1. New game link
    // 2. Game mode links
    // 3. Color container (with propagation)

    function generateRGB() {
        let R = Math.ceil(Math.random() * 255);
        let G = Math.ceil(Math.random() * 255);
        let B = Math.ceil(Math.random() * 255);

        return `${R}, ${G}, ${B}`;

    }

    function randomNum(max) {
        return Math.ceil(Math.random() * max);
    }

    init();
})();