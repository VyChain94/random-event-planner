// event data

const events = [
    {
        id:0,
        event:"Biking!",
        img:"images/biking.jpg",
        text:"Go burn some rubber!",

    },
    {
        id:1,
        event:"Hiking!",
        img:"images/hiking.jpg",
        text:"Here's to new heights!",

    },
    {
        id:2,
        event:"Going to a comedy show!",
        img:"images/comedy show.jpg",
        text:"Get some laughs in!",

    },
    {
        id:3,
        event:"Listening to some live music!",
        img:"images/liveMusic.jpg",
        text:"Go find your new favorite artist!",

    },
    {
        id:4,
        event:"Playing some soccer!",
        img:"images/soccer.jpg",
        text:"Who's playing goalie today?",

    },
    {
        id:5,
        event:"Having a homerun derby!",
        img:"images/baseball.jpg",
        text:"Who's the real champ of the diamond?",

    },
    {
        id:6,
        event:"Playing catch!",
        img:"images/catch.jpg",
        text:"Just like old times!",

    },
    {
        id:7,
        event:"Going to a museum!",
        img:"images/museum.jpg",
        text:"Go appreciate some history!",

    },
    {
        id:8,
        event:"Going fishing!",
        img:"images/fishing.jpg",
        text:"Patience is key with this one!",

    },
    {
        id:9,
        event:"Enjoying the beach!",
        img:"images/beach.jpg",
        text:"Don't forget the snacks!",

    },
    {
        id:10,
        event:"Taking a road trip!",
        img:"images/road trip.jpg",
        text:"Preferably somewhere new!",

    },
    {
        id:11,
        event:"Going to find a new restaurant!",
        img:"images/restaurant.jpg",
        text:"Does food make you smile too?",

    },
]

// select items
const event = document.getElementById("event")
const quote = document.getElementById("quote")
const img = document.getElementById("event-img")

const randBtn=document.querySelector(".randbtn")

// set starting image
let currentItem = 0

// load initial items
window.addEventListener('DOMContentLoaded', function(){
    showEvent()
})

// show event based on item
function showEvent(){
    const item = events[currentItem]
    img.src = item.img
    activity.textContent=item.event
    quote.textContent=item.text
}

randBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() *events.length)
    showEvent()
})

