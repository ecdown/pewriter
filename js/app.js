document.getElementById('heading').innerHTML = localStorage.name || 'Set Editor Title Here'; // default text
document.getElementById('content').innerHTML = localStorage.html_content || '<h1>This text is automatically saved every second :) </h1>'; // default text
document.getElementById('css-content').innerHTML = localStorage.css_content || 'h1 { color: blue;}'; // default text
document.getElementById('js-content').innerHTML = localStorage.js_content || 'console.log("test");'; // default text


function addStyleString() {
    var str = document.getElementById('css-content').textContent;
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

function addScriptString() {
    var script = document.getElementById('js-content').textContent;
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

function init() {
    var titleMonitor = editorMonitor();
    var htmlMonitor = editorMonitor();
    var cssMonitor = editorMonitor();
    var jsMonitor = editorMonitor();

    titleMonitor.setTarget('heading', 'name');
    htmlMonitor.setTarget('content', 'html_content');
    cssMonitor.setTarget('css-content', 'css_content');
    jsMonitor.setTarget('js-content', 'js_content');

    titleMonitor
        .watch()
        .updateLivePreview();
    htmlMonitor.watch();
    cssMonitor.watch();
    jsMonitor.watch();
} 


 window.onload = init;
