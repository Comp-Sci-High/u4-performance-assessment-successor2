const express = require('express')
const app = express()

const travelJournal = [
    {
        location: "Paris, France",
        date: "2024-01-15",
        weather: "Cloudy, 10°C",
        activities: "Visited the Eiffel Tower, Louvre Museum, and had a Seine River cruise",
        reflection: "Paris is truly a dream. The architecture, history, and food were beyond amazing!",
        photos: "https://media.timeout.com/images/106181719/image.jpg"
    },
    {
        location: "Kyoto, Japan",
        date: "2024-03-10",
        weather: "Sunny, 15°C",
        activities: "Explored Fushimi Inari Shrine, Arashiyama Bamboo Forest, and Gion District",
        reflection: "The tranquility of Kyoto is unmatched. The shrines and temples are breathtaking.",
        photos: "https://i.natgeofe.com/n/7adbd212-ca10-4e2d-8dea-84276bf72675/st_insideguide_gettyimages-902966276_hr.jpg"
    },
    {
        location: "New York City, USA",
        date: "2024-04-05",
        weather: "Rainy, 12°C",
        activities: "Walked through Central Park, visited Times Square, and watched a Broadway show",
        reflection: "NYC is electric! The energy of the city is something everyone should experience.",
        photos: "https://media.cntraveler.com/photos/5a9d825ad363c34048b3639a/16:9/w_2560%2Cc_limit/GettyImages-640006562.jpg"
    },
    {
        location: "Sydney, Australia",
        date: "2024-06-20",
        weather: "Sunny, 22°C",
        activities: "Saw the Sydney Opera House, Bondi Beach, and hiked in the Blue Mountains",
        reflection: "Loved the coastal vibes! Sydney’s beaches are some of the best I’ve seen.",
        photos: "https://www.downunderendeavours.com/wp-content/uploads/2019/05/sydney-things-to-do-800x500-Sydney-Opera-House-8.jpg"
    },
    {
        location: "Rome, Italy",
        date: "2024-07-14",
        weather: "Hot, 30°C",
        activities: "Visited the Colosseum, Vatican City, and Trevi Fountain",
        reflection: "The history in Rome is overwhelming in the best way. Every street has a story.",
        photos: "https://www.insightvacations.com/wp-content/uploads/2024/01/caleb-miller-0Bs3et8FYyg-unsplash.jpg"
    }
];

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

  app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

  app.get('/all', (req, res) => {
    res.render('category.ejs', travelJournal )
  })

  app.get('/trip/:location', (req, res) => {
    const location = req.params.location
    res.render('product.ejs', travelJournal[location])
  })



  app.listen(3000, () => {
    console.log("Server running")
  })