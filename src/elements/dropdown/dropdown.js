const button = document.getElementsByClassName('dropdown__title')[0]
const menu = document.getElementsByClassName('dropdown__menu')[0]
const box = document.getElementsByClassName('dropdown')[0]

if (menu && button && box){
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

}
