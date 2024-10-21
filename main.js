document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', async () => {
        const city = button.classList[0].split('-')[0]

        const response = await fetch(`/vote/${city}`, { method: 'POST' });
        const newVotes = await response.text();

        document.getElementById(`${city}-votes`).innerText = newVotes;

    });
});

async function updateVotes() {
    const cities = ['ikebukuro', 'tachikawa', 'machida', 'musashisakai'];
    for (const city of cities) {
        const res=await fetch(`/vote/${city}`)
            .then(res=>res.text()).then()
            .then(votes=>{document.getElementById(`${city}-votes`).innerText=votes});
    }
}


updateVotes();
