
$(document).ready(function(){

  $("#search").click(function(){
    //var searchIn
    var searchIn = $("#searchIn").val();
    //variable url to call url later on with searchIn input value
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchIn +"&format=json&callback=?"
    //ajax get method that takes data from url and turn it into json data
    $.ajax({
           type:"GET",
           url:url,
           async:false,
           dataType:"json",
           success:function(data){
    //calls output id in html and passes in
             $('#output').html('');
             for(var i=0; i<data[1].length; i++){
             $("#output").prepend("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
             }
           },

           error:function(errorMessage){
             alert("Something went wrong");
           }

           });
  });

$(document).keypress(function (e) {
    if (e.which == 13) {
      if($('#searchIn').is(':focus')){
       $('#search').click();
      }
    }
});
});
