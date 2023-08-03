function chnageContent(getValue){
    let background = document.querySelector('.bgcolor');
    let selectOption = getValue.value;
    background.style.background = selectOption;

    let selecttext = document.querySelector('.card');
    let textValue = getValue.options[getValue.selectedIndex].text;
    selecttext.innerHTML = textValue;

}
