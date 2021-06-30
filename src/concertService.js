// responsible for making the server call from the backend to the frontend / housing all the fetch requests associated with the models
class ConcertService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getArtistsConcerts(id) {
        fetch(`${base_url}/artists/${id}/concerts`)
        .then(response => response.json())
        .then(concerts => {
            for (const concert of concerts) {
                const c = new Concert(concert);
                c.concertHTML()
            }
        })
    }

    createConcert() {
        const artistId = event.target.parentElement.parentElement.dataset.id
        const concert = {
            venue: document.getElementById('concert-venue').value,
            date: document.getElementById('concert-date').value,
            city: document.getElementById('concert-city').value,
            state: document.getElementById('concert-state').value,
            artist_id: document.getElementById('concert-artist_id').value
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(concert)
        }

        fetch(`${base_url}/artists/${artistId}/concerts`, configObj)
        .then(response => response.json())
        .then(concert => {
            const c = new Concert(concert)
            debugger;
            c.appendConcertToDom()
        })
    }
}