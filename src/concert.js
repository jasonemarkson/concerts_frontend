class Concert {
    static all = []
    // static newConcertForm = document.getElementById('new-concert-form')
    
    constructor({id, venue, date, city, state, artist_id}) {
        this.id = id;
        this.venue = venue;
        this.date = date;
        this.city = city;
        this.state = state;
        this.artist_id = artist_id;

        this.element = document.createElement('li');
        this.element.dataset.id = this.id;
        this.element.id = `concert-${this.id}`;
    
        Concert.all.push(this)
    }

    concertHTML() {
        let li = document.createElement('li');
        li.innerHTML = `${this.venue} // ${this.date} // ${this.city}, ${this.state} <button>Remove</button>`;
        li.style.fontWeight = 'normal'
        li.id = `${this.id}`
        const concertContainer = document.getElementById(`artist-${this.artist_id}-concert-container`)
        concertContainer.append(li)
    }

    static newConcertButtonHTML(id) {
        // add concert button
        const concertContainer = document.getElementById(`artist-${id}-concert-container`)
        const newConcertButton = document.createElement('button')
        newConcertButton.innerText = "Add Concert"
        concertContainer.appendChild(newConcertButton)
        newConcertButton.addEventListener('click', () => {
            Concert.renderForm(this)
        })
    }

    static renderForm() {
        let e = event.target.parentElement
        const artistName = e.previousElementSibling.innerText
        
        e.innerHTML += `
        -------------------------------------------------------------
        <p>
        <h4>Add a new ${artistName} Concert</h4>
        <form id='new-concert-form'>
        Venue: <input id="concert-venue"><br>
        Date: <input id="concert-date"><br>
        City: <input id="concert-city"><br>
        State: <input id="concert-state"><br>
        <input id="concert-artist-id" value=${e.parentElement.dataset.id} type="hidden"><br>
        <input id="form-button" type="submit">
        </form>
        </p>
        -------------------------------------------------------------
        `
        const newConcertForm = document.getElementById('new-concert-form')
        newConcertForm.addEventListener('submit', handleConcertSubmit)
    }

}