class Artist {
    // remember objects -- static is like constant in Ruby
    static all = []
    static artistContainer = document.getElementById('artist-container')

    constructor({id, name}) {
        this.id = id;
        this.name = name;
        
        this.element = document.createElement('h3');
        this.element.dataset.id = this.id;
        this.element.id = `artist-${this.id}`;
        this.artistHTML()   

        Artist.all.push(this)
    }

    artistHTML() {
        this.element.innerHTML += `
        <p>${this.name}</p>
        `
        return this.element
    }

    appendToDom() {
        // Artist.artistContainer.append(this.artistHTML()) ---  was appending artist two times
        Artist.artistContainer.append(this.element)
    }
}