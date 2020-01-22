const createMemoryCard = nameClass => {
        let src = 'img/icon-collabcode.png';

        if (nameClass == '-front') {
            src = 'img/icon-c.png'
        }

        return `
        <article class = "memory-card ${nameClass}">
            <img src='${src}'
            alt='Gueio mascote da Collabcode'
            class='icon'
            onclick = 'handleClick()'/>
        </article>`;
    }
    // const createMemoryCardFront = () => `
    //     <article class = "memory-card -front">
    //         <img src='img/icon-c.png' 
    //         alt='Icone de um livro da liguagem c++'
    //         class='icon'
    //         onclick='handleClick()'/>
    //     </article>`;



const handleClick = () => console.log("ae")