const container = document.querySelector('.container');
const yes_btn = document.querySelector('.yes_btn');
const no_btn = document.querySelector('.no_btn');

yes_btn.addEventListener('click', () => {
    yes_btn.style.position = 'relative';

    const random_left = Math.floor(Math.random() * container.clientWidth);
    const random_top = Math.floor(Math.random() * container.clientHeight);

    if (random_left >= container.clientWidth / 2)
        yes_btn.style.left = `${random_left - no_btn.clientWidth}px`;
    
    if (random_top >= container.clientHeight / 2)
        yes_btn.style.top = `${random_top - no_btn.clientHeight}px`;
})

no_btn.addEventListener('click', () => {
    container.innerHTML = `<h2>
                            BUTI ALAM MO<br>
                            HAHAHAHA😂 <br>
                            </h2>`
})