$(document).ready(function(){
  var j=0;
  $('.map').on("click",function(){
    var pics=[{
      "name":"Miramar",
      "pic":'<img src="./js/mir.jpg">',
      "pic2":'<img src="./js/mir2.jpg">',
      "ptag2":"<p>The Maps are the playable area where players are pitted against each other in BATTLEGROUNDS. Within these maps, a red zone‎‎ periodically spawns onto random cities/locations causes explosions within that area and also periodically a C-130 flys over the map and drops an air drop.</p>",
      "ptag":"<p>Miramar offers unique terrain and dense urban areas. With an island to the south east home to a prison and smaller villages, the entire area is cut off from the west and north-east by enormous canyons and mountains, with a looming metal wall to the north keeping outsiders out, and players in. Miramar will create a new Battle Royale experience where the old strategies from Erangel may no longer work and new tactics are required. </p>"
    },
   {
     "name":"Erangel",
     "pic":'<img src="./js/er.jpg"',
     "pic2":'<img  src="./js/er2.jpg"',
     "ptag2":"<p>Erangel is the first and primary playable map of BATTLEGROUNDS. Erangel is the base map for the game. An 8x8 km map dotted with small outcroppings of buildings, the distance between major landmarks necessitates the use of vehicles to move between areas. As the game continues, the map area will be restricted to a smaller and smaller play area. A red circle will appear on the map from time to time, marking an area for offshore artillery to bombard. Erangel has varying weather, sometimes affecting visibility and requiring a change in tactics. </p>",
     "ptag":"<p></p>"
   },
   {
     "name":"Vikendi",
     "pic":'<img src="./js/vik.jpg">',
     "ptag2":"<p>An isolated Northern resort island in the shadow of Mount Kreznic, Vikendi was home to a wide variety of attractions, businesses and villages. Tourists can look to the future from the Cosomodrome, travel back to the past and walk with the giants at the prehistoric Dino Park, visit the aging Castle or even take a tour of the winery. Vikendi is as beautiful as it is dangerous and Survivors treading these bitter cold lands will have to watch their backs even more closely, as the fresh snow is perfect for leaving behind footprints! With snow and the footprints that you leave behind or other players leave behind, the hunter becomes the hunted. The days are long on Vikendi, but it won’t be long before the sun sets and the auroras fill the moonlit skies. </p>",
     "pic2":'<img src="./js/vik2.jpg"',
     "ptag":"<p></p>"
   },
   {
     "name":"Sanhok",
     "pic":'<img src="./js/san.jpg">',
     "ptag2":"<p>Sanhok is the first map that the art team of PUBG Corp visited a location specifically for world art development. By physically being in the jungles and mountains in a humid Asian country, it not only made them imagine what the new map will play like, but they felt the breeze, smelled the air and heard the sounds. All of these experiences are helping the team create a unique map experience.The map is inspired by a wide variety of islands in Thailand and the Philippines, the PUBG Art team; comprised of Technical Artists, Concept Artists and 3D Environment Artists, they took photos (Photogrammetry) to capture the island then transfer that to the game engine to design Sanhok </p>",
     "pic2":'<img src="./js/san2.jpg">',
     "ptag":""
   }
];
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
