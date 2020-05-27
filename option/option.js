/*
 * {
 * index: 0,
 * name: "example.com",
 * query: "example.com?q="
 * }
 */

$(() => {

    // ローカルストレージのキー
    const key = "option";

    // ローカルストレージの設定を読み込み
    $("tbody").sortable();
    const loadData = JSON.parse(localStorage.getItem(key));
    // 1行目
    if (loadData !== null && loadData !== undefined) {
        let row = $($("table tbody tr").closest("tr"));
        for (let i = 0; i < loadData.length; i += 1) {
            console.log("load: " + loadData[i].name + " " + loadData[i].query);
            let nrow = $(row).clone(true);
            $(nrow).find(".name").val(loadData[i].name);
            $(nrow).find(".query").val(loadData[i].query);
            $(nrow).insertBefore($(row));
        }
        $(row).remove();
    }

    $(".addRow").click(() => {
        // 行を取得
        const row = $(this.closest("tr"));
        // 行の形式をコピーして
        const nrow = $(row).clone(true);
        // 入力値を空にする
        $(nrow).find(".name").val("");
        $(nrow).find(".query").val("");
        // 次の行に挿入
        $(nrow).insertAfter($(row));
    });

    $(".remove").click(() => {
        // 今の行数から1行削除した時の行数が0行にならなければ消す．
        if ($(this).parents("tbody").children().length - 1 > 0) {
            $(this).parents("tr").remove();
        }
    });

    $("#save").click(() => {

        // 表の行(サイト名とクエリ)をJSON化して保存
        const saveData = [];
        let i = 0;
        $("table tbody tr").map(function (index, value) {

            saveData[i] = {
                "index": i,
                "name": $(value).find(".name").val(),
                "query": $(value).find(".query").val()
            };
            i += 1;
        });

        console.log("saved");
        console.log(saveData);
        localStorage.setItem(key, JSON.stringify(saveData));
    });
});
