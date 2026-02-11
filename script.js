// Get Elements
const eventForm = document.getElementById("eventForm");

const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");

const eventContainer = document.getElementById("eventContainer");


// Sample Events
let sampleEvent = [
  {
    title: "Web Dev",
    date: "2026-06-04",
    category: "Workshop",
    description: "Web Development Workshop",
  },
  {
    title: "Web Dev 2",
    date: "2026-07-04",
    category: "Conference",
    description: "Advanced Web Conference",
  },
];


// Create Event Card
function createEventCard(eventData) {
  const card = document.createElement("div");
  card.innerHTML = `
    <button class=delete-btn>X</button>
    <h3>${eventData.title}</h3>
    <p><b>Date:</b> ${eventData.date}</p>
    <p><b>Category:</b> ${eventData.category}</p>
    <p>${eventData.description}</p>
    <hr>
  `
  return card;
}

function addEvent(eventData){
  const emptystate = document.getElementById("empty-state");
  if (emptystate) emptystate.remove()
    
    eventContainer.appendChild(createEventCard(eventData))
}

eventForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  const eventData=
  {
    title:eventTitle.value,
    date:eventDate.value,
    category:eventCategory.value,
    description:eventDescription.value
  }
  addEvent(eventData);
})