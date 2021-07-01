class Artist {
    // remember objects -- static is like constant in Ruby
    static all = []
    static artistContainer = document.getElementById('artist-container')
    static artistForm = document.getElementById('artist-form')

    constructor({id, name}) {
        this.id = id;
        this.name = name;
        
        this.element = document.createElement('h3');
        this.element.dataset.id = this.id;
        this.element.id = `artist-${this.id}`;
        this.element.addEventListener('click', this.handleClick)
        this.artistHTML()   

        Artist.all.push(this)
    }

    artistHTML() {
        this.element.innerHTML += `
        <p>${this.name}</p>
        <div id="artist-${this.id}-concert-container">
        </div>
        <button>Concerts</button>
        <button>Delete</button>
        `
        
        return this.element
    }

    appendToDom() {
        Artist.artistContainer.append(this.element)
    }

    static renderForm() {
        Artist.artistForm.innerHTML += `
        <h4>Add a New Artist</h4>
        <form id='new-artist-form'>
            Name: <input id="name">
            <input type="submit">
        </form>
        `
    }

    handleClick(event) {
        const id = this.dataset.id
        const button = event.target
        if (button.innerText === "Delete") {
            artistService.deleteArtist(id)
        } 
        else if (button.innerText === "Concerts") {
            concertService.getArtistsConcerts(id)
            button.innerText = "Close"
        }
        else if (button.innerText === "Close") {
            button.previousElementSibling.innerText = ""
            button.innerText = "Concerts"
        }
        else if (button.innerText === "Remove") {
            let concert = event.target.previousSibling.parentElement
            concertService.deleteConcert(concert)
        }
    }

}