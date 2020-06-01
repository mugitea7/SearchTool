function onInstalled() {
    if (!localStorage.getItem('is_setted')) {
        const url = chrome.runtime.getURL('src/default.json');
        fetch(url)
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('option', JSON.stringify(json));
            });
    }
    
    const parent_menu = chrome.contextMenus.create({
        id: "parent",
        title: "1-Click検索",
        contexts: ['selection'],
        type: "normal",
    });
    
    setTimeout(function () {
        
        localStorage.setItem('is_setted', 'hoge');
        const replace_string = "{{}}";
        
        const load_data = JSON.parse(localStorage.getItem("option"));
        
        if (load_data !== undefined && load_data !== null) {
        
            for (let index = 0; index < load_data.length; index++) {
        
                let title_str = load_data[index].name;
                if (title_str.match(/^[ 　\r\n\t]*$/))
                    title_str = "No title";
        
                chrome.contextMenus.create({
                    title: title_str,
                    contexts: ['selection'],
                    type: 'normal',
                    parentId: parent_menu,
                    onclick: (info, tab) => {
                        const selection_text = info.selectionText;
                        const search_url = load_data[index].query.replace(replace_string, encodeURI(selection_text));
        
                        window.open(search_url, "_blank");
                    }
                });
            }
        } else {
            chrome.contextMenus.create({
                title: '検索が設定されていません.',
                contexts: ['selection'],
                type: 'normal',
                parentId: parent_menu,
            });
        }
    }, 100);
}

chrome.runtime.onInstalled.addListener(function () {
    onInstalled();
});

setTimeout(function () {
    chrome.contextMenus.update("parent", {}, function () {
        if (chrome.runtime.lastError) {
            onInstalled();
        }
    });
}, 222);
