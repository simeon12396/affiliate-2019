export const handleToggleMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const ulContainer = document.querySelector('.ul-container');
    const intermediateBar = document.querySelector('.intermediate-bar');

    hamburger.classList.toggle('active');
    ulContainer.classList.toggle('active');
    intermediateBar.classList.toggle('active');
};

export const handleToggleInformation = () => {
    const informationListItem = document.querySelector('.information-li');

    informationListItem.classList.toggle('active');
};