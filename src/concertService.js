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
            Concert.newConcertButtonHTML(id)
        })
    }

    createConcert() {
        const artistId = event.target.parentElement.parentElement.dataset.id
        const concert = {
            venue: document.getElementById('concert-venue').value,
            date: document.getElementById('concert-date').value,
            city: document.getElementById('concert-city').value,
            state: document.getElementById('concert-state').value,
            artist_id: artistId
            //  --- how do I associate concert to artist or will it associate when it posts to this route
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
            c.appendConcertToDom()
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