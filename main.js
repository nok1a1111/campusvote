document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', async () => {
        const city = button.classList[0].split('-')[0]

        const response = await fetch(`/functions/vote/${city}`, { method: 'POST' });
        const newVotes = await response.text();

        document.getElementById(`${city}-votes`).innerText = newVotes;

    });
});

async function updateVotes() {
    const cities = ['ikebukuro', 'tachikawa', 'machida', 'musashisakai'];
    for (const city of cities) {
        const res=await fetch(`/functions/vote/${city}`)
            .then(res=>{console.log(res);return res.text()})
    }
}


updateVotes();
