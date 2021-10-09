const boxes = document.getElementsByClassName('radio-box')

for (let i = 0;i < boxes.length; i++){
    const buttons = boxes[i].getElementsByClassName('radio-item')

    for (let j = 0; j < buttons.length; j++){
        buttons[j].addEventListener('click', () => {
            buttons[j].classList.toggle('checked')
        })
    }
}