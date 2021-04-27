// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Custom JS here...");



// Styling iframe content
$('.feed-container a[href^="http://www.democracynow.org/"]').prepend('🗽 DN!: ').css('color','#f44336');
$('.feed-container a[href^="http://feeds.propublica.org/"]').prepend('🔍 PP: ').css('color','#00bcd4');
$('.feed-container a[href^="https://theanarchistlibrary.org/"]').prepend('✊🏽 AL: ').css('color','#8bc34a');
