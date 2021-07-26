// responsible for making the server call from the backend to the frontend / housing all the fetch requests associated with the models
class ConcertService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    createConcert() {
        const artistId = event.target.parentElement.parentElement.dataset.id
        const concert = {
            venue: document.getElementById('concert-venue').value,
            date: document.getElementById('concert-date').value,
            city: document.getElementById('concert-city').value,
            state: document.getElementById('concert-state').value,
            artist_id: artistId
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(concert)
        }

        fetch(`${base_url}/concerts`, configObj)
        .then(response => response.json())
        .then(concert => {
            const c = new Concert(concert)
            // find the artist -- a.concerts.push(c)
            const a = Artist.all.find(artist => artist.id === c.artist_id)
            a.concerts.push(c)
            c.concertHTML()

        })
    }

    deleteConcert(concert) {
        concert.remove()
        
        let configObj = {
            method: 'Delete',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`${base_url}/concerts/${concert.id}`, configObj)
        .then(response => response.json())
        .then(json => 
            alert(json.message)
        )
    }
}
