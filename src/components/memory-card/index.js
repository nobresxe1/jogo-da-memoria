const createMemoryCard = (src, alt, nameClass) => `
        <article class = "memory-card ${nameClass}">
            <img src='${src}'
            alt="${alt}" 
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