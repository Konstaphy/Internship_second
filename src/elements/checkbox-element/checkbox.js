export default class Checkbox{
    elem
    static init(...ids){
        let checkboxes = []
        for (let i = 0; i < ids.length; i++){
            let element = document.getElementById(ids[i])
            if(element){
                let cb = new Checkbox(ids[i])
                checkboxes.push(cb)
            }
        }
        return checkboxes
    }

    constructor(id) {
        this.elem = document.getElementById(id)
        this.elem.addEventListener('click', () => {
            this.setChecked()
        })
    }
    setChecked () {
        this.elem.classList.toggle('checked')
    }
}