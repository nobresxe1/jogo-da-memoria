const createMemoryCard = () => `
    <article class = "memory-card">
        <img src='img/icon-collabcode.png'
        alt='Gueio mascote da Collabcode'
        class='icon'
        onclick = 'handleClick()'/>
    </article>`;

const createMemoryCardFront = () => `
    <article class = "memory-card -front">
        <img src='img/icon-c.png' 
        alt='Icone de um livro da liguagem c++'
        class='icon'
        onclick='handleClick()'/>
    </article>`;



function handleClick() {
    console.log("ae")
}
//parei na aula 25, desafios usar arrow function para simplificar e depois unir as duas em uma.