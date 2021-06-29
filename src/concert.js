class Concert {
    static all = []
    static concertForm = document.getElementById('concert-form')
    
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
        li.innerHTML = `${this.venue} // ${this.date} // ${this.city}, ${this.state}`;
        li.style.fontWeight = 'normal'
        const concertContainer = document.getElementById(`artist-${this.artist_id}-concert-container`)
        concertContainer.append(li)

        // add concert button
        const newConcertButton = document.createElement('button')
        newConcertButton.innerText = "Add Concert"
        concertContainer.append(newConcertButton)
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
            <input type="submit">
        </form>
        </p>
        -------------------------------------------------------------
        `
    }

    appendConcertToDom() {
        debugger;
    }
}