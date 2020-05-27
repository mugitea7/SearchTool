/*
 * {
 * index: 0,
 * name: "example.com",
 * query: "example.com?q="
 * }
 */

$(function(){

  // ローカルストレージのキー
  const key = "option";

  // ローカルストレージの設定を読み込み
  $("tbody").sortable();
  var loaddata = JSON.parse(localStorage.getItem(key));
  // 1行目
  if(loaddata != null && loaddata != undefined){
    var row = $($("table tbody tr").closest("tr"));
    for(var i = 0; i < loaddata.length; i+=1){
      console.log("load: " + loaddata[i].name + " " + loaddata[i].query);
      var nrow = $(row).clone(true);
      $(nrow).find(".name").val(loaddata[i].name);
      $(nrow).find(".query").val(loaddata[i].query);
      $(nrow).insertBefore($(row));
    }
    $(row).remove();
  }

  $(".addRow").click(function(){
    // 行を取得
    var row = $(this.closest("tr"));
    // 行の形式をコピーして
    var nrow = $(row).clone(true);
    // 入力値を空にする
    $(nrow).find(".name").val("");
    $(nrow).find(".query").val("");
    // 次の行に挿入
    $(nrow).insertAfter($(row));
  });

  $(".remove").click(function() {
    // 今の行数から1行削除した時の行数が0行にならなければ消す．
    if($(this).parents("tbody").children().length - 1 > 0){
      $(this).parents("tr").remove();
    }
  });

  $("#save").click(function(){

    // 表の行(サイト名とクエリ)をJSON化して保存
    var savedata = [];
    var i = 0;
    $("table tbody tr").map(function(index, value){

      savedata[i] = {
        "index": i,
        "name": $(value).find(".name").val(),
        "query": $(value).find(".query").val()
      };
      i += 1;
    });

    console.log("saved");
    console.log(savedata);
    localStorage.setItem(key, JSON.stringify(savedata));
  });
});
