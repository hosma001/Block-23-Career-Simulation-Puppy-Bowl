const players = document.getElementById("players");
const detail = document.getElementById("detail");

let puppies;

async function fetchPuppies() {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/");
    const json = await response.json();
    puppies = json.data.players;
    render();
};

fetchPuppies();

function render(){
    const hash = window.location.hash.slice(1)*1;
    const html = puppies.map(pups => {
        return `
                <a href='#${pups.id !== hash ? pups.id : ''}' class = '${pups.id === hash ? 'selected': ''}'>
                ${pups.name}
                </a>      
        `;
    }).join('');
    players.innerHTML = html;

    pup = puppies.find(pup => pup.id === hash);

    const detailHtml = `
        Breed: ${pup.breed}
        Status: ${pup.status}
        
    `;

    detail.innerHTML = detailHtml;
};

window.addEventListener('hashchange', () => {
    render();
});

