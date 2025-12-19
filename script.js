document.getElementById("instaBtn").addEventListener("click", function () {
  window.open("https://www.instagram.com/artofbeauty13", "_blank");
});
document.getElementById("youtubeBtn").addEventListener("click", function () {
  window.open("https://www.youtube.com/@artofbeauty13", "_blank");
});

  emailjs.init("charumehandirat7@gmail.com");

document.getElementById("appointmentForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    "SERVICE_f07fvwf",
    "TEMPLATE_2egns8s",
    this
  ).then(function(){
    alert("Appointment booked! Email sent successfully 📩");
  }, function(error){
    alert("Failed to send email ❌");
    console.log(error);
  });

  this.reset();
});


