import './dropdown.scss'

const button = document.getElementsByClassName('dropdown__title')[0]
const menu = document.getElementsByClassName('dropdown__menu')[0]

const box = document.getElementsByClassName('dropdown')[0]

menu.style.display = 'none'

button.addEventListener('click', () => {
    if (menu.style.display === 'none'){
        box.classList.add('open')
        menu.style.display = 'flex'
    } else{
        box.classList.remove('open')
        menu.style.display = 'none'
    }
})
