// Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.
$(document).ready(function(){
  $.ajax(
    {
      url: 'http://157.230.17.132:3030/todos',
      method: 'GET',
      success: function(data){
        console.log(data);
      },
      error: function(error) {
        console.log('error', error);
      }
    }
  );
})
