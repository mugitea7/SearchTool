for (var count = 0; count <= 5; count++) {
    chrome.contextMenus.create({
        title: "data" + count,
        contexts: ['selection'],
        type: 'normal',
        onclick: (info, tab) => {
            var selection_text = info.selectionText;
            var search_url = "https://www.google.com/search?q=" + encodeURI(selection_text);

            window.open(search_url, "_blank");
        }
    });
}
