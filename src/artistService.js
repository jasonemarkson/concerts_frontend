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

    createArtist() {
        const artist = {
            name: document.getElementById('name').value
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artist)
        }

        fetch(`${base_url}/artists`, configObj)
        .then(response => response.json())
        .then(artist => {
            const ar = new Artist(artist)
            // console.log(ar)
            ar.appendToDom()
        })
    }

    deleteArtist(id) {
        event.target.parentElement.remove()
        
        let configObj = {
            method: 'Delete',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`${base_url}/artists/${id}`, configObj)
        .then(response => response.json())
        .then(json => 
            alert(json.message)
        )
    }
    // tailwind -- styling
}