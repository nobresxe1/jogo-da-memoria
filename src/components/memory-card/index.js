const createMemoryCard = nameClass => `
        <article class = "memory-card ${nameClass}">
            <img src='${ nameClass == '-front' ? 'img/icon-c.png':'img/icon-collabcode.png'}'
            alt='Gueio mascote da Collabcode'
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



const handleClick = () => console.log("ae")