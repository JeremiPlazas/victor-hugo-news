// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");



// Styling iframe content
$('a[href^="http://www.democracynow.org/"]').prepend('🗽 DN!: ').css('color','#f44336');
$('a[href^="http://feeds.propublica.org/"]').prepend('🔍 PP: ').css('color','#00bcd4');
$('a[href^="https://theanarchistlibrary.org/"]').prepend('✊🏽 AL: ').css('color','#8bc34a');
