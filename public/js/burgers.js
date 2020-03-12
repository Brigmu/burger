window.onload = function() {
    init();
    addDevourListeners();
}

const init = () => {
    const submitBtnEl = document.querySelector('#submitBtn');
    const formEl = document.querySelector('#burger-text');

    submitBtnEl.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log(formEl.value);
        const newBurger = {
            burger_name: formEl.value.trim(),
            devoured: false
        }

        fetch('/api/burgers', {
            method: 'POST',
            body: JSON.stringify(newBurger),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            console.log('added new burger');
            location.reload();
        })
    })
}

const addDevourListeners = () => {
    const devourBtnsEls = document.querySelectorAll('.devourBtn')

    for(let i = 0; i < devourBtnsEls.length; i++){
        devourBtnsEls[i].addEventListener('click', (event) =>{
            let id = event.target.getAttribute('data-id');
            

            fetch(`/api/burger/${id}`, {
                method: 'PUT'
            })
            .then(() => {
                location.reload();
            })
        })
    }
}