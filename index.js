// this tab shouldn't have too much code in it as most of our behaviors will be broken out in the different src

// any global variables
// artist class
const base_url = 'http://localhost:3000'
const artistService = new ArtistService(base_url)

Artist.artistForm.addEventListener('submit', handleSubmit)

artistService.getArtists()
Artist.renderForm()

function handleSubmit() {
    event.preventDefault()
    artistService.createArtist()
    event.target.reset()
}

// concert class
const concertService = new ConcertService(base_url)
concertService.getConcerts()



// any initializations of the application