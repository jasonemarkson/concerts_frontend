// responsible for making the server call from the backend to the frontend / housing all the fetch requests associated with the models
class ConcertService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getConcerts() {
        fetch(`${base_url}/concerts`)
        .then(response => response.json())
        .then(concerts => {
            for (const concert of concerts) {
                const c = new Concert(concert);
                c.appendConcertsToDom()
            }
        })
    }
}