 /*
 Tells the form:when the user clicks submit ,do this function
  function(e): the code that runs when submit happens
  e  the event object ,contains infor about the submit event
  */
document.getElementById("bookingForm").addEventListener("submit"
,function(e){

//prevents page from refreshing
e.preventDefault();

//used to get the values from the form
let name= document.getElementById("name").value;
let from= document.getElementById("from").value;
let to= document.getElementById("to").value;
let date= document.getElementById("date").value;
let seats= document.getElementById("seats").value;

let resultBox = document.getElementById("result");

//This makes the result box visible
//it is hidden in css by none
resultBox.style.display="block";

//shows booking confirmation
//innerHTML : put HTML content inside a div\-
resultBox.innerHTML = ` 
         <div id= "ticket">      
        <h3>✅ Booking Confirmed</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Route:</b> ${from} → ${to}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Seats:</b> ${seats}</p>
        </div>

         <!-- Button to print the ticket -->
         <button onclick ="printTicket()">Print Ticket</buuton>
    `;
});


//Function to print only the ticket
function printTicket(){

    //Get the contents on the ticket div
    let ticketContent = document.getElementById("ticket").innerHTML;

    //Open a new window for printing
    let printWindow = window.open("","","width=600,height=600");

    // write ticket content into new window
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Ticket</title>
            <style>
                body{font-family:Arial;padding:20px;}
                h3{text-align:center}
            </style>
         </head>
         <body>
         ${ticketContent} 
         </body>
         <html>

 `);
}



