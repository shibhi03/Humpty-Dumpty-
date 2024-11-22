var name_ = document.getElementById("name");
var email = document.getElementById("email");
var query = document.getElementById("message");

// var message = "Message sent successfully";

function SendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "shibhimurugu2004@gmail.com",
        Password : "LaP62Ogm",
        To : 'them@website.com',
        From : email,
        Subject : "Queries - Humpty Dumpty",
        Body : "Name: " + name_ +
            "<br>" + "Query:" + "<br>"
            + query
    }).then(
      message => alert(message)
    );
}