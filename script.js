// const item = document.getElementsByClassName('generate-column-item');
// for (let index = 0; index < item.length; index++) {
//     const element = item[index];
// }
const hintcombobox = document.getElementsByClassName("combobox-structure-input")[0]
const input_formula = document.getElementById("structure-input-text")
const more_choose = document.getElementsByClassName("more-choose-hint")[0]
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

const cbbox = document.querySelectorAll(".generate-column-item select")
cbbox.forEach(element => {
    element.onchange = ()=>{
        console.log(element.value);
        var node = element.nextElementSibling.querySelector('.input-fomula')
        node.value = getFormulaCombobox(element.value)
    }
});

const extent_input = document.querySelectorAll(".more-choose")
extent_input.forEach(element => {
    element.onclick = ()=>{
        console.log(element);
        element.parentNode.parentNode.classList.toggle("generate-column-item-extend");
    }
});


function getFormulaCombobox(tenkieu){
    switch (tenkieu) {
        case "name":
            return "[name]"
            break;
        case "number":
            return "[1-100]"
            break;
        case "hour":
            return "[1-24]:[1-60]"
            break;
        case "dmy":
            return "[1-30]/[1-12]/[2010-2022]"
            break;
        case "daytime":
            return "[1-24]:[1-60] [1-30]/[1-12]/[2010-2022]"
            break;
        default:
            return "[]"
            break;
    }
}