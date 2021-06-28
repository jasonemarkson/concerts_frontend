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
}