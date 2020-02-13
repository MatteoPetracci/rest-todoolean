// Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.
$(document).ready(function(){
  getList();
  $('button').click(function(){
    var inputValue = $('input').val();
    console.log(inputValue);
  })
})


function getList(){
  $.ajax(
    {
      url: 'http://157.230.17.132:3030/todos',
      method: 'GET',
      success: function(data){
        // console.log(data);
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        for (var i = 0; i < data.length; i++) {
          // console.log(data[i]);
          var text = data[i];
          console.log(text);
          var context = {
            list: text.text
          }
          var html = template(context);
          $('#shop-list').append(html);
        }
      },
      error: function(error) {
        console.log('error', error);
      }
    }
  );
}
