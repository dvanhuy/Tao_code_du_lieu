// const item = document.getElementsByClassName('generate-column-item');
// for (let index = 0; index < item.length; index++) {
//     const element = item[index];
// }
console.log(dataname);
const hintcombobox = document.getElementsByClassName("combobox-structure-input")[0]
const input_formula = document.getElementById("structure-input-text")
const more_choose = document.getElementsByClassName("more-choose")[0]
more_choose.onclick = ()=>{
    hintcombobox.classList.toggle('combobox-structure-input-hide');
}

const hint_formula = hintcombobox.querySelectorAll(":scope > div")
hint_formula.forEach(element => {
    element.onclick = ()=>{
        input_formula.value = element.querySelector("div").innerHTML
        hintcombobox.classList.add('combobox-structure-input-hide');
    }
});