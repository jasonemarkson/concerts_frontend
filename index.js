// this tab shouldn't have too much code in it as most of our behaviors will be broken out in the different src

// any global variables
const base_url = 'http://localhost:3000'
const artistService = new ArtistService(base_url)

artistService.getArtists()
// any initializations of the application