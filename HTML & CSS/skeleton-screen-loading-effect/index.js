const DOM = {
    cardImageLoading: '.card__image-box--loading',
    cardTitleLoading: '.card__title--loading',
    cardDescLoading: '.card__caption--loading',
    cardImage: '.card__image',
    cardTitle: '.card__title',
    cardDesc: '.card__caption'
};

const renderCard = ({ imgUrl, title, description }) =>
{
    //Prepare UI for changes

    //Remove loading class
    document.querySelector(DOM.cardImageLoading).classList.remove(DOM.cardImageLoading.split('.')[1]);
    document.querySelector(DOM.cardTitleLoading).classList.remove(DOM.cardTitleLoading.split('.')[1]);
    document.querySelector(DOM.cardDescLoading).classList.remove(DOM.cardDescLoading.split('.')[1]);

    //Render UI
    document.querySelector(DOM.cardImage).src = imgUrl;
    document.querySelector(DOM.cardTitle).textContent = title;
    document.querySelector(DOM.cardDesc).textContent = description;
};

window.addEventListener('load', () =>
{
    setTimeout(() =>
    {
        renderCard({
            imgUrl: "https://images.unsplash.com/photo-1580456929009-8ce1525d6a92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
            title: "art design",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Illum quos minus similique modi! Officiis aspernatur vitae expedita, quia voluptatem aut error atque
                quam accusamus blanditiis at omnis animi magnam debitis?`
        })
    }, 3000);
})