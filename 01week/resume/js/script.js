'using strict'

$(document).ready(function(){
  $('#home').toggle();
})
$('#homeClick').on('click',function(){
  $('.content').hide();
  $('#home').show();
});
$('#resumeClick').on('click',function(){
  $('.content').hide();
  $('#resume').show();
});
$('#skillsClick').on('click',function(){
  $('.content').hide();
  $('#skills').show();
});
$('#refsClick').on('click',function(){
  $('.content').hide();
  $('#refs').show();
});
$('#projsClick').on('click',function(){
  $('.content').hide();
  $('#projects').show();
});
