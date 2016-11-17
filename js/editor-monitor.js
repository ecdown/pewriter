function editorMonitor() {
    var config = config || {};
    var updateLivePreview = function() {
        document.getElementById('output').innerHTML = document.getElementById('content').textContent;
        addStyleString();
        addScriptString();
    };
    var updateLocalStorage = function() {
        localStorage[config.title] = config.target.innerHTML;
        updateLivePreview();
    };
    var editorEventListener = function() {
        var timer;
        clearTimeout(timer);
        timer = setTimeout(updateLocalStorage, config.timeout);
    };
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
        var node;
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

    return {
        updateLivePreview: updateLivePreview,
        setTarget: function(id, title) {
            config = {
                id: id,
                target:  document.getElementById(id),
                title: title,
                timeout: 200
            };
            return config;
        },
        watch: function() {
            config.target.addEventListener('keydown', editorEventListener);
            return this;
        }
    };
}


