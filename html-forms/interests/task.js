let interestCheck = document.querySelectorAll('.interest__check');
let array = Array.from(interestCheck);
let interests = null;

function onClickCheck() {
    let interest = this.parentElement.parentElement;
    for (let node of interest.childNodes) {
        if(!node.nodeName.includes("text")) {
            if(node.className.includes("interests_active")) {
                interests = node;
                break;
            }
        }
    }
    for(i = 0; i < array.length; i++) {
        if(array[i].closest(".interests_active") == interests) {
            array[i].checked = this.checked;
        }
    }
}


for(let i = 0; i < array.length; i++) {
    if(!array[i].closest(".interests_active")) {
        array[i].onchange = onClickCheck;
    }
}