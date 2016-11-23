$(document).on('turbolinks:load',function(){
  console.log("im ready",new Date());
  $('#task_name').focus();

  $('.modal-footer .btn-primary').click(function(){
    $('.edit_task').submit();
  });
});
