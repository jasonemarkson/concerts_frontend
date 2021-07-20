// this tab shouldn't have too much code in it as most of our behaviors will be broken out in the different src

// any global variables

// any initializations of the application

const base_url = 'http://localhost:3000'

const artistService = new ArtistService(base_url)

const concertService = new ConcertService(base_url)

document.addEventListener('DOMContentLoaded', () => {

    Artist.artistForm.addEventListener('submit', handleSubmit)

    artistService.getArtists()
    Artist.renderForm()
    
})


function handleSubmit() {
    event.preventDefault()
    artistService.createArtist()
    event.target.reset()
}


function handleConcertSubmit() {
    event.preventDefault()
    concertService.createConcert()
    event.target.reset()
}
