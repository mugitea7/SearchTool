$(function(){
  $('tbody').sortable();

  $('#addRow').click(function(){
    var html = '<tr><td><input type="text" name="name"></td><td><input type="text" name="query"></td><td><button class="remove">-</button></td></tr>';
    $('tbody').append(html);
  });

  $(document).on('click', '.remove', function() {
    $(this).parents('tr').remove();
  });

  $('#save').click(function(){
    var values = [];
    $('input[name="name"]').each(function(i, elem){
      values.push($(elem).val());
    });
    alert(values.join(', '));
  });
});
