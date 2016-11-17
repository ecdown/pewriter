<<<<<<< HEAD
function seedLocalStorage() {
    document.getElementById('heading').innerHTML = localStorage.name || 'Set Editor Title Here'; // default text
    document.getElementById('content').innerHTML = localStorage.html_content || '<h1>This text is automatically saved every second :) </h1>'; // default text
    document.getElementById('css-content').innerHTML = localStorage.css_content || 'h1 { color: blue;}'; // default text
    document.getElementById('js-content').innerHTML = localStorage.js_content || 'console.log("test");'; // default text
}

=======
>>>>>>> refactored editor monitor
function writeToLocalConsole(type) {
    var logger = document.getElementById('console');
    for (var i = 1; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += type +":" + (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += type +":" +  arguments[i] + '<br />';
        }
    }
}

function clearConsole() {
    document.getElementById('console').innerHTML = '';
}

// define a new console
var console=(function(oldCons){
    return {
        log: function(text){
            oldCons.log(text);
            // Your code
            writeToLocalConsole('log',text);
        },
        info: function (text) {
            oldCons.info(text);
            // Your code
            writeToLocalConsole('info',text);
        },
        warn: function (text) {
            oldCons.warn(text);
            // Your code
            writeToLocalConsole('warn',text);
        },
        error: function (text) {
            oldCons.error(text);
            // Your code
            writeToLocalConsole('error',text);
        }
    };
}(window.console));

//Then redefine the old console
/* New implementation above.  Will remove next revision
window.console = console;
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
*/

 
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
