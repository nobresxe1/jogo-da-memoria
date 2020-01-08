function createMemoryCard() {
    const $memoryCard = document.createElement("article");

    const $icon =
        `<img src='img/icon-collabcode.png'
     alt='Gueio mascote da Collabcode'
     class='icon' />`;

    $memoryCard.classList.add("memory-card")
    $wrapCards.insertBefore($memoryCard, null)

    $memoryCard.insertAdjacentHTML('afterbegin', $icon);
}

function createMemoryCardFront() {
    const $memoryCardFront = document.createElement("article")
    const $iconC =
        `<img src='img/icon-c.png' 
    alt='Icone de um livro da liguagem c++'
    class='icon'/>`;

    $memoryCardFront.classList.add("memory-card")
    $memoryCardFront.classList.add("-front")
    $wrapCards.insertBefore($memoryCardFront, null)


    $memoryCardFront.insertAdjacentHTML('afterbegin', $iconC)
}