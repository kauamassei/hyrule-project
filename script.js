const URL = 'https://zelda.fanapis.com/api/characters?limit=100';
const characterContainer = document.getElementById('characters');


async function fetchAPI() {
    const response = await fetch(URL)

    if (response.status === 200) {
        const data = await response.json();
        displayCharacters(data.data);
        
        console.log(data);

    } else {
        console.log('Erro na requisição.')
        characterContainer.innerHTML = `<p>Não foi possível carregar essas informações</p>`
    }
}

function displayCharacters(characters) {
    characterContainer.innerHTML = '';
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        characterCard.innerHTML = `
        <h3 class="npcName">${character.name}</h3>
        <p class='pOutros'>${character.description || "Sem descrição disponível"}</p>
        <p class= "pGender">Tipo: ${character.race || "Sem descrição disponível"}</p>
        <p class="pRace">Sexo: ${character.gender || "Sem descrição disponível"}</p>
        
        `;

        characterContainer.appendChild(characterCard)
    });
}

fetchAPI()

