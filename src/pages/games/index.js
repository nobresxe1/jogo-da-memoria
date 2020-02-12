const $root = document.querySelector("#root")

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard()

// const $memoryCard = createMemoryCard({
//     src: "img/icon-c.png",
//     alt: "Icone de um livro da liguagem c++",
//     nameClass: "-front"
// });
const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Icone de um livro da liguagem c++",
});
const $memoryCardBug = createMemoryCard({
    src: "img/icon-bug.png",
    alt: "Icone do bug",
});
const $memoryCardCelular = createMemoryCard({
    src: "img/icon-celular.png",
    alt: "Icone do celular"
});
const $memoryCardSettings = createMemoryCard({
    src: "img/icon-settings.png",
    alt: "icone de configuração",
});



// $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);
// $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardBug)
    // $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardCelular);
// $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardSettings);
// $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);
// $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardBug)
    // $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardCelular);
// $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardSettings);






$root.insertAdjacentElement('beforeend', $cardsWrapper);