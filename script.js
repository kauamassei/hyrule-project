const URL = 'https://zelda.fanapis.com/api/games';

async function fetchAPI() {
    const response = await fetch(URL)

    if (response.status === 200) {
        const games = await response.json();
        console.log(games);

    } else {
        console.log('Erro na requisição.')
    }
}

fetchAPI()

