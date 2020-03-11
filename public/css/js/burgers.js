window.onload = function() {
    init();
}

const init = () => {
    const submitBtnEl = document.querySelector('#submtBtn');

    document.addEventListener(submitBtnEl, 'click', (event) =>{
        this.preventdefault();
    })
}