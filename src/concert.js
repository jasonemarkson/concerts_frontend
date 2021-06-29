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
            debugger;
            Concert.renderForm(this)
        })
    }

    static renderForm() {
        debugger;
        Concert.concertForm.innerHTML += `
        <form id='new-concert-form'>
            Venue: <input id="venue-concert-${this.id}"><br>
            Date: <input id="date-concert-${this.id}"><br>
            City: <input id="city-concert-${this.id}"><br>
            State: <input id="state-concert-${this.id}"><br>
            <input id="artist-id" value=${this.artist_id} type=><br>
            <input type="submit">
        </form>
        `
    }
}