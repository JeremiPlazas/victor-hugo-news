// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");





// Custom
var cssLink = document.createElement("link");
cssLink.href = "src/css/main.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
frames['rssfeed_frame'].document.head.appendChild(cssLink);


// Styling iframe content
$('a[href^="http://www.democracynow.org/"]').prepend('DN!: ').css('color','#f44336 !important');
$('a[href^="http://feeds.propublica.org/"]').prepend('PP: ').css('color','#00bcd4 !important');
