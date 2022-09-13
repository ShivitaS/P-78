var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_book_image").src = updatedImage;
    document.getElementById("https://i.postimg.cc/MGn9GJXw/family.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/qqyYvVbq/grandpa.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/wjMnFtMX/father.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/5ymDKL83/bro.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/JnL6wtrd/sister.jpg").src = updatedImage;
    document.getElementById("https://i.postimg.cc/bw5W5zSK/mother.jpg").src = updatedImage;
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("Family Book")
    document.getElementById("Ranbir Singh")
    document.getElementById("Diljeet Singh")
    document.getElementById("Rocky Singh")
    document.getElementById("Alia Singh")
    document.getElementById("Soni Singh")
}
