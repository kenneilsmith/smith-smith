// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// configure slider
$(".carousel").carousel({
  interval: 6000,
  pause: "hover"
});
