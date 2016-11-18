document.getElementById('heading').innerHTML = localStorage.title || 'Just Write'; // default text
document.getElementById('content').value = localStorage.text || 'This text is automatically saved every second :) '; // default text
document.getElementById('css-content').innerHTML = localStorage.css_content || 'h1 { color: blue;}'; // default text
document.getElementById('js-content').innerHTML = localStorage.js_content || 'console.log("test");'; // default text

var htmlEditor = CodeMirror.fromTextArea(document.getElementById("content"), {
            lineNumbers: true,
            mode:  "htmlmixed"
        });

var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-content"), {
            lineNumbers: true,
            mode:  "htmlmixed"
        });
var jsEditor = CodeMirror.fromTextArea(document.getElementById("js-content"), {
            lineNumbers: true,
            mode:  "htmlmixed"
        });

function addStyleString(str) {
    var testNode = document.getElementById('styleentry');
    var node;
    if (!testNode) {
      node = document.createElement('style');
      node.setAttribute('id', 'styleentry');
     
    } else {
        node = testNode;
    }

    node.innerHTML = str.replace(/(<([^>]+)>)/ig,"").replace(/\s+/g, "");
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
    localStorage.text = htmlEditor.getValue();
    localStorage.css_content = cssEditor.getValue(); 
    localStorage.js_content = jsEditor.getValue(); 
     
    document.getElementById('output').innerHTML = htmlEditor.getValue();
    addStyleString(cssEditor.getValue());
    addScriptString(jsEditor.getValue());
     
}, 1000);

addStyleString(cssEditor.getValue());
