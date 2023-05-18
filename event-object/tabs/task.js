let tabs = Array.from(document.getElementsByClassName('tab'));
let content = Array.from(document.getElementsByClassName('tab__content'));

for (let item of tabs) {
    item.addEventListener('click', TabNavigator);
}

function TabNavigator() {
    if (this.className === 'tab tab_active') {
        return false;
    }

    let parent = this.closest('.tabs');

    parent.querySelector('.tab_active').className = 'tab';
    this.className = 'tab tab_active';
    parent.querySelector('.tab__content_active').className = 'tab__content';
    content[tabs.indexOf(this)].className = 'tab__content tab__content_active';
}