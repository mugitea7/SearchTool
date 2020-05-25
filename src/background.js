chrome.contextMenus.create({
    title: 'Search Tool',
    onclick: (info, tab) => {
        window.alert('Hello,ChromeExtension!');
    }
});

/*
$(() => {
    $("#save").click(() => {
        localStorage["message"] = $("#message").val();
    });
});
*/
