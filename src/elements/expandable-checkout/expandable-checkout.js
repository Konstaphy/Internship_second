const checkboxes = document.getElementsByClassName('checkbox-container-title')

for (let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('click', () => {
        checkboxes[i].parentElement.classList.toggle('closed')
    })
}