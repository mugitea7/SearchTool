chrome.contextMenus.create({
    title: 'Search Tool',
    onclick: function (info, tab) {
        window.alert('Hello,ChromeExtension!');
    }
});

/*
$(function () {
    $("#save").click(function () {
        localStorage["message"] = $("#message").val();
    });
});
*/
