const players = document.getElementById("players");

let puppies;

async function fetchPuppies() {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/");
    const json = await response.json();
    puppies = json.data.players;
    render();
}

fetchPuppies();

function render(){
    const hash = window.location.hash.slice(1)*1;
    console.log(hash);
    const html = puppies.map(pups => {
        return `
                <a href='#${pups.id}' class = '${pups.id === hash ? 'selected': ''}'>
                ${pups.name}
                </a>      
        `;
    }).join('');
    players.innerHTML = html;
}

window.addEventListener('hashchange', () => {
    render();
});

