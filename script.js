let Arr = [
    {
        Title:"Event1",
        Image: "../amirhossein-soltani-ldXMy75DlzE-unsplash.jpg",
        Date : "20-May-2020",
        Seats : 23
},
{
    Title:"Event2",
    Image: "../edwin-andrade-6liebVeAfrY-unsplash.jpg",
    Date : "20-May-2020",
    Seats : 23
},
{
    Title:"Event3",
    Image: "../halil-ibrahim-cetinkaya-lbBrOujiO-Q-unsplash.jpg",
    Date : "20-May-2020",
    Seats : 0
},
{
    Title:"Event4",
    Image: "../headway-F2KRf_QfCqw-unsplash.jpg",
    Date : "20-May-2020",
    Seats : 23
},
{
    Title:"Event5",
    Image: "../lee-blanchflower-1dW1vEJLlCQ-unsplash.jpg",
    Date : "20-May-2020",
    Seats : 23
},
{
    Title:"Event6",
    Image: "../panagiotis-falcos-3ELAAwo8zVQ-unsplash.jpg",
    Date : "20-May-2020",
    Seats : 0
},
{
    Title:"Event7",
    Image: "../panagiotis-falcos-akguWjJ1oR8-unsplash.jpg",
    Date : "20-May-2020",
    Seats : 23
},
{
    Title:"Event8",
    Image: "../priscilla-du-preez-v0kQglce46E-unsplash.jpg",
    Date : "20-May-2020",
    Seats : 23
}
]
Arr.map((ele)=>{

var contentDiv = document.querySelector(".contentDiv");

var eventContent = document.createElement("div");
eventContent.setAttribute("class","eventBox1");
contentDiv.append(eventContent);

var eventTitle = document.createElement("div");
eventTitle.setAttribute("class","eventTitle");
eventContent.append(eventTitle);
eventTitle.innerText=(ele.Title);

var eventDetails = document.createElement("div");
eventDetails.setAttribute("class","eventDetails");
eventContent.append(eventDetails);

var eventImage = document.createElement("img");
eventImage.setAttribute("class","eventImage");
eventImage.setAttribute("src",(ele.Image));
eventDetails.append(eventImage);

var eventDescription = document.createElement("ul");
eventDescription.setAttribute("class","eventDescription");
eventDetails.append(eventDescription);

var eventDate = document.createElement("li");
eventDescription.append(eventDate);
eventDate.innerText=(ele.Date);

var eventSeats = document.createElement("li");
eventDescription.append(eventSeats);
eventSeats.innerText=`Seats Available : ${ele.Seats}`;

var bookSeats = document.createElement("button");
bookSeats.setAttribute("class","bookSeats");
if(ele.Seats>0){
bookSeats.innerText="Book Now";
bookSeats.style.backgroundColor= "green";
}else{
    bookSeats.innerText="Sold Out";
    bookSeats.style.backgroundColor= "red"
}
eventDescription.append(bookSeats);
  
});