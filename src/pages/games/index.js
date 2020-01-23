const $root = document.querySelector("#root")

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard("img/icon-collabcode.png", "Gueio mascote da Collabcode");
const $memoryCardFront = createMemoryCard("img/icon-c.png", "Icone de um livro da liguagem c++", "-front");

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);




$root.insertAdjacentElement("beforeend", $cardsWrapper)