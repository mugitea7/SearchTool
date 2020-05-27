const load_data = JSON.parse(localStorage.getItem("option"));

if (load_data !== undefined && load_data !== null) {

    for (let index = 0; index < load_data.length; index++) {
        chrome.contextMenus.create({
            title: load_data[index].name,
            contexts: ['selection'],
            type: 'normal',
            onclick: (info, tab) => {
                alert(JSON.stringify(load_data));
                const selection_text = info.selectionText
                const search_url = load_data[index].query + encodeURI(selection_text);

                window.open(search_url, "_blank");
            }
        });
    }
}

/*
for (var index = 0; index < 5; index++) {
    chrome.contextMenus.create({
        title: "data" + index,
        contexts: ['selection'],
        type: 'normal',
        onclick: (info, tab) => {
            var selection_text = info.selectionText;
            var search_url = "https://ja.wikipedia.org/wiki/" + encodeURI(selection_text);

            window.open(search_url, "_blank");
        }
    });
}
*/