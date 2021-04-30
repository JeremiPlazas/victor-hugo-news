// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Custom JS here...");


var scriptTag = '<script src="rss.iframe.js"><\/script>';
$('iframe[name="rssfeed_frame"]').contents().find("body").append(scriptTag);
  
