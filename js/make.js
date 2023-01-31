const label = document.getElementById("label");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  var labelText = label.value;
  if(labelText) {
    var settings = {};
    settings.label = labelText;
    var settingsString = JSON.stringify(settings);
    var settingsEncoded = btoa(settingsString);
    document.location = "../?s=" + settingsEncoded;
  } 
});
