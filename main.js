document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', async () => {
        const city = button.classList[0].split('-')[0]

        const response = await fetch(`https://campus-vote.urlcom1111.workers.dev`, { method: 'POST' });
        console.log(response)
        const newVotes = await response.text();
        console.log(newVotes)
        document.getElementById(`${city}-votes`).innerText = newVotes;

    });
});

async function updateVotes() {
    const cities = ['ikebukuro', 'tachikawa', 'machida', 'musashisakai'];
    for (const city of cities) {
        const res=await fetch(`https://campus-vote.urlcom1111.workers.dev`)
            .then(res=>{console.log(res);return res.text()})
    }
}


updateVotes();
