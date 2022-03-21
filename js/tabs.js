const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const designBlockImages = document.querySelectorAll('.design-block__img');
const tabHeaders = document.querySelectorAll('.design__title');
const tabActive = document.querySelector('.design__title:not(.hidden)');

const changeContent = (array, value) => {
    array.forEach((item) => {
        item.dataset.tabsField === value ?
            item.classList.remove('hidden') : item.classList.add('hidden');
    });
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (e) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabDescriptions, dataValue);
        changeContent(tabImages, dataValue);
        changeContent(tabHeaders, dataValue);
        changeContent(designBlockImages, dataValue);

        document.title = document.querySelector('.design__title:not(.hidden)').innerText;

        tabButtons.forEach((btn) => {
            if (btn === e.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });
    });
});

document.title = tabActive.innerText;