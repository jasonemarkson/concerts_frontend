// responsible for making the server call from the backend to the frontend / housing all the fetch requests for these two models
class ArtistService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getArtists() {
        fetch(`${base_url}/artists`)
        .then(response => response.json())
        .then(artists => {
            for (const artist of artists) {
            const a = new Artist(artist)
            a.appendToDom()
            }
        })
    }
}