// Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.
$(document).ready(function(){
  getList();
  $('button').click(function(){
    post();
  });
  $(document).on('click', '#delete', function() {
    var element = $(this);
    console.log(element);
    var idList = element.parent().attr('id-attr');
    console.log(idList);
    deleteList(idList)
  });
});


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
          // console.log(text);
          var context = {
            list: text.text,
            id: text.id
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

function post(){
  var inputValue = $('input').val();
  // console.log(inputValue);
  $.ajax(
    {
      url: 'http://157.230.17.132:3030/todos',
      method: 'POST',
      data: {
        text: inputValue
      },
      success: function(data){
        // console.log(data);
        $('#shop-list').empty();
        getList();
      },
      error: function(error) {
        console.log('error', error);
      }
    }
  );
}

function deleteList(id) {
  $.ajax(
    {
      url: 'http://157.230.17.132:3030/todos/' + id,
      method: 'DELETE',
      success: function(data){
        console.log(data);
        $('#shop-list').html('')
        getList();
      },
      error: function(error) {
        console.log('error', error);
      }
    }
  );
}
