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
        </div>
        <button>Concerts</button>
        <button>Delete</button>
        `
        return this.element
    }

    appendToDom() {
        // Artist.artistContainer.append(this.artistHTML()) ---  was appending artist two times
        Artist.artistContainer.append(this.element)
    }

    static renderForm() {
        Artist.artistForm.innerHTML += `
        <form id='new-artist-form'>
            Name: <input id="name">
            <input type="submit">
        </form>
        `
    }

    handleClick(event) {
        if (event.target.innerText === "Delete") {
            artistService.deleteArtist(this.dataset.id)
        } 
        // else if (event.target.innerText === "Concerts") {
        //     // let concerts = []
        //     debugger;
        //     Concert.all.map(function(c) {
        //         let data = parseInt(event.currentTarget.dataset)
        //         c.artist_id === data.id
        //     })
        // Concert.appendConcertsToDom
        // create function to add all this functionality into in the Concert class -- append the concerts for that artist to the DOM
        // }
    }

}