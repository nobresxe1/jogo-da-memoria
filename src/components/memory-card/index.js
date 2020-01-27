const createMemoryCard = card => `
        <article class = "memory-card ${card.nameClass}">
            <img src='${card.src}'
            alt="${card.alt}" 
            class='icon'
            onclick = 'handleClick()'/>
        </article>
        `

// const createMemoryCardFront = () => `
//     <article class = "memory-card -front">
//         <img src='img/icon-c.png' 
//         alt='Icone de um livro da liguagem c++'
//         class='icon'
//         onclick='handleClick()'/>
//     </article>`;
// foi usado IF ternario
// parei na aula 26-6



const handleClick = () => console.log("ae")