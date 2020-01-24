const $root = document.querySelector("#root")

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard("img/icon-collabcode.png", "Gueio mascote da Collabcode");
const $memoryCardC = createMemoryCard("img/icon-c.png", "Icone de um livro da liguagem c++", "-front");
const $memoryCardBug = createMemoryCard("img/icon-bug.png", "Icone do bug", "-front");
const $memoryCardCelular = createMemoryCard("img/icon-celular.png", "Icone do celular", "-front");
const $memoryCardSettings = createMemoryCard("img/icon-settings.png", "icone de configuração", "-front")

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardBug)
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardCelular);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardSettings);






$root.insertAdjacentElement("beforeend", $cardsWrapper)