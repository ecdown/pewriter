document.getElementById('heading').innerHTML = localStorage.title || 'Just Write'; // default text
document.getElementById('content').innerHTML = localStorage.text || 'This text is automatically saved every second :) '; // default text
document.getElementById('css-content').innerHTML = localStorage.css_content || 'h1 { color: blue;}'; // default text
document.getElementById('js-content').innerHTML = localStorage.js_content || 'console.log("test");'; // default text

(function () {
    var old = console.log;
    var logger = document.getElementById('console');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();

function addStyleString(str) {
    var testNode = document.getElementById('styleentry');
    var node;
    if (!testNode) {
      node = document.createElement('style');
      node.setAttribute('id', 'styleentry');
     
    } else {
        node = testNode;
    }
    node.innerHTML = str.replace(/(<([^>]+)>)/ig, "").replace(/\s+/g, " ");
    document.body.appendChild(node);
}

function addScriptString(script) {
    var baseNode = document.getElementById('scripttag');
    if (baseNode) {
        baseNode.outerHTML = "";
        delete baseNode;
    }
    node = document.createElement('script');
    node.setAttribute('id','scripttag');
    node.type = 'text/javascript';
    node.async = true;
    
    
    node.onload = function(){
        // remote script has loaded
    };
    node.text = script;
 document.body.appendChild(node);   
}
 setInterval(function() { // fuction that is saving the innerHTML of the div
      localStorage.title = document.getElementById('heading').innerHTML; // heading div
      localStorage.text = document.getElementById('content').innerHTML; // content div
      localStorage.css_content = document.getElementById('css-content').innerHTML; // content div
      localStorage.js_content = document.getElementById('js-content').innerHTML;
     
      document.getElementById('output').innerHTML = document.getElementById('content').textContent;
     addStyleString(document.getElementById('css-content').textContent);
     addScriptString(document.getElementById('js-content').textContent);
     
     
     ;
 }, 1000);

addStyleString(document.getElementById('css-content').innerHTML);
