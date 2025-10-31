// Handle 'Check' buttons inside DataTables rows
$(function(){
  var table = $('#myTable').DataTable();
  $('#myTable').on('click', '.duplicate-product', function(){
    var itemId = $(this).data('item-id');
    var $btn = $(this);
    $btn.prop('disabled', true).text('Checking...');
    $.get('/api/check-duplicate.php', { item_id: itemId })
      .done(function(res){
        $btn.text(res && res.status ? res.status : 'Done');
      })
      .fail(function(){
        $btn.text('Error');
      })
      .always(function(){
        $btn.prop('disabled', false);
      });
  });
  // Re-run lazyload after table draw if needed
  table.on('draw', function(){
    if(window.bc_lazyload) window.bc_lazyload();
  });
});
