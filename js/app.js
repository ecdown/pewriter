document.getElementById('heading').innerHTML = localStorage['title'] || 'Just Write'; // default text
document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second :) '; // default text
document.getElementById('css-content').innerHTML = localStorage['csscontent'] || 'h1 { color: blue;}'; // default text


function addStyleString(str) {
    var testNode = document.getElementById('styleentry');
    if (!testNode) {
        
    
    var node = document.createElement('style');
    node.setAttribute('id','styleentry');
     
    } else {
        node = testNode;
    }
    node.innerHTML = str;
    document.body.appendChild(node);
}
 setInterval(function() { // fuction that is saving the innerHTML of the div
      localStorage['title'] = document.getElementById('heading').innerHTML; // heading div
      localStorage['text'] = document.getElementById('content').innerHTML; // content div
      document.getElementById('output').innerHTML = document.getElementById('content').textContent;
     addStyleString(document.getElementById('css-content').innerHTML);
 }, 1000);

addStyleString(document.getElementById('css-content').innerHTML);