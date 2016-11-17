function editorMonitor() {
    var defaultValues = defaultValues || {};;
    var config = { attributes: true, childList: true, characterData: true };
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation){
            if(mutation.type === 'childList'){
                updateLocalStorage(defaultValues.target,defaultValues.title);
            }
        });
    });
    var updateLivePreview = function() {
        document.getElementById('output').innerHTML = document.getElementById('content').textContent;
    };
    var updateLocalStorage = function() {
        localStorage[defaultValues.title] = defaultValues.target.innerHTML;
        updateLivePreview();
    };

    return {
        updateLivePreview: updateLivePreview,
        setTarget: function(id, title) {
            defaultValues = {
                id: id,
                target:  document.getElementById(id),
                title: title
            }
            return defaultValues;
        },
        watch: function() {
            observer.observe(defaultValues.target, config);
            return this;
        },
        endWatch: function() {
            observer.disconnect();
            return this;
        }
    };
}