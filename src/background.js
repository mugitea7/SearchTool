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
            onclick: (info, tab) => {
                const selection_text = info.selectionText
                const search_url = load_data[index].query + encodeURI(selection_text);

                window.open(search_url, "_blank");
            }
        });
    }
} else {
    chrome.contextMenus.create({
        title: '検索が設定されていません.',
        contexts: ['selection'],
        type: 'normal',
    });
}