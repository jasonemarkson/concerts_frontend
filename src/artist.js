class Artist {
    // remember objects -- static is like constant in Ruby
    static all = []
    static artistContainer = document.getElementById('artist-container')
    static artistForm = document.getElementById('artist-form')

    constructor({id, name, concerts}) {
        this.id = id;
        this.name = name;
        this.concerts = concerts.map(concert => {
            return new Concert(concert)
        })

        Artist.all.push(this)
        this.artistHTML()

    }

    artistHTML() {
        this.element = document.createElement('h3');
        this.element.className += "border-black border-t-4 mx-auto px-4"
        this.element.dataset.id = this.id;
        this.element.id = `artist-${this.id}`;
        this.element.addEventListener('click', this.handleClick)
        
        this.element.innerHTML += `
        <p class="font-semibold text-3xl">${this.name}</p>
        <div id="artist-${this.id}-concert-container" class="border-style: solid p-1.5">
        </div>
        <br>
        <button class="bg-gray-400 hover:bg-gray-300 text-black --tw-border-opacity: 1; border-black border-2">Concerts</button>
        <button class="bg-red-400 hover:bg-red-300 text-black --tw-border-opacity: 1; border-black border-2">Delete</button>
        `
        
        return this.element
    }

    appendToDom() {
        Artist.artistContainer.append(this.element)
    }

    static renderForm() {
        Artist.artistForm.innerHTML += `
        <h4 class='mx-auto px-4'>Add a New Artist</h4>
        <form id='new-artist-form' class='mx-auto px-4'>
            Name: <input id="name" class='bg-gray-300 border-black border-2'>
            <input type="submit" class='bg-gray-400 hover:bg-gray-300 text-black --tw-border-opacity: 1; border-black border-2'>
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
            const a = Artist.all.find(artist => artist.id === parseInt(id))
            a.concerts.forEach(concert => {
                concert.concertHTML()
            })
            button.innerText = "Close"
        }
        else if (button.innerText === "Close") {
            let div = button.parentElement.getElementsByTagName('div')[0]
            div.innerText = ""
            button.innerText = "Concerts"
        }
        else if (button.innerText === "Remove") {
            let concert = event.target.previousSibling.parentElement
            concertService.deleteConcert(concert)
        }
    }

}