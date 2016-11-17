function seedLocalStorage() {
    document.getElementById('heading').innerHTML = localStorage.name || 'Set Editor Title Here'; // default text
    document.getElementById('content').innerHTML = localStorage.html_content || '<h1>This text is automatically saved every second :) </h1>'; // default text
    document.getElementById('css-content').innerHTML = localStorage.css_content || 'h1 { color: blue;}'; // default text
    document.getElementById('js-content').innerHTML = localStorage.js_content || 'console.log("test");'; // default text
}

function init() {
    var titleMonitor = editorMonitor();
    var htmlMonitor = editorMonitor();
    var cssMonitor = editorMonitor();
    var jsMonitor = editorMonitor();

    seedLocalStorage();
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
