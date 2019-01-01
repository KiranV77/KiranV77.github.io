$(document).ready(function(){
  var j=0;
  $('.map').on("click",function(){
    var pics=[{
      "name":"Miramar",
      "pic":'<img src="./js/mir.jpg">',
      "pic2":'<img src="./js/mir2.jpg">',
      "ptag2":"<p>The Maps are the playable area where players are pitted against each other in BATTLEGROUNDS. Within these maps, a red zone‎‎ periodically spawns onto random cities/locations causes explosions within that area and also periodically a C-130 flys over the map and drops an air drop.</p>",
      "ptag":"<p>Miramar offers unique terrain and dense urban areas. With an island to the south east home to a prison and smaller villages, the entire area is cut off from the west and north-east by enormous canyons and mountains, with a looming metal wall to the north keeping outsiders out, and players in. Miramar will create a new Battle Royale experience where the old strategies from Erangel may no longer work and new tactics are required. </p>"
    }];
    var i=$(this).html().split('<h3>')[1].split('</h3>')[0];
if(j==0){
  for(item in pics){
   if(i==pics[item].name){
     $('#view').html(pics[item].pic+pics[item].ptag2+pics[item].pic2+pics[item].ptag);
      j++;
   }
 }
}
else
  {
  $('#view').html("");
  j--;

}
   });
});
