           
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Mom Photo.jpeg", "gungun.jpeg" , "massi.jpeg", "tanu.jpeg",];
           
var names = ["Fmaily Book","Mom", "Shrishti", "Alka", "Tanishqa", ];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}