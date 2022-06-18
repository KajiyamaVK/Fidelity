import style from './stylesheet.module.css'

function selectElement(e) {
    const caller = e.target;
    const previousSelectedField = document.getElementsByClassName(style.selected)[0];

    if (previousSelectedField) { previousSelectedField.classList.remove(style.selected); }

    caller.classList.toggle(style.selected);

    return caller.id;
}

function showSubMenu(e) {

    const callerId = e.currentTarget.id;
    const callerArrowElement = document.getElementById( `${callerId}Arrow`);
    const subMenus = document.getElementsByClassName(style.subMenu);
    const subMenusItems = document.getElementsByClassName(style.selected);
    const arrowSituation = callerArrowElement.getAttribute('sit');

    if(arrowSituation === 'closed'){
        callerArrowElement.style.transform = 'rotate(90deg)';
        callerArrowElement.setAttribute('sit','opened');
    } else if (arrowSituation === 'opened'){
        callerArrowElement.style.transform = 'rotate(360deg)';
        callerArrowElement.setAttribute('sit','closed');
    }

    for (const key of subMenusItems) {
        key.classList.remove(style.selected);
    };


    let subMenuId;

    switch (callerId) {
        case 'menuRegister':
            subMenuId = 'subMenuRegister';
            break;
        case 'menuPoints':
            subMenuId = 'subMenuPoints';
            break;
    }


    if (subMenuId) { document.getElementById(subMenuId).classList.toggle(style.invisible) };

    for (const key of subMenus) {
        if (key.id != subMenuId) { key.classList.add(style.invisible) };
    };

}

export { selectElement, showSubMenu };