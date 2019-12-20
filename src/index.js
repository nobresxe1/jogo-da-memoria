const $root = document.querySelector("#root")
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article")


const $icon =
    `<img src='img/icon-collabcode.png'
     alt='Gueio mascote da Collabcode'
     class='icon' />
`;

const $iconC =
    `<img src='img/icon-c.png' 
    alt='Icone de um livro da liguagem c++' 
    class='icon'>
`;



$memoryCard.classList.add("memory-card")
$root.insertBefore($memoryCard, null)

$memoryCardFront.classList.add("memory-card")
$memoryCardFront.classList.add("-front")
$root.insertBefore($memoryCardFront, null)

$memoryCard.insertAdjacentHTML('afterbegin', $icon);

$memoryCardFront.insertAdjacentHTML('afterbegin', $iconC)