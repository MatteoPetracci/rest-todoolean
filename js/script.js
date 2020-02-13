// Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.
$(document).ready(function(){
  $.ajax(
    {
      url: 'http://157.230.17.132:3030/todos',
      method: 'GET',
      success: function(data){
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
          // console.log(data[i]);
          var text = data[i];
          console.log(text);
        }
      },
      error: function(error) {
        console.log('error', error);
      }
    }
  );
})
