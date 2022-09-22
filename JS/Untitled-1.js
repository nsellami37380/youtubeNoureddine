
document.getElementById("research")
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    document.getElementById("btnSearch").click();
}
});
/*const films = [
    ["image1.jpg", "logo1.jpg", "Mon titre 1", "Ma description 1"],
    ["image2.jpg", "logo2.jpg", "Mon titre 2", "Ma description 2"],
    ["image3.jpg", "logo3.jpg", "Mon titre 3", "Ma description 3"],
    ["image4.jpg", "logo4.jpg", "Mon titre 4", "Ma description 4"],
    ["image5.jpg", "logo5.jpg", "Mon titre 5", "Ma description 5"],
    ["image6.jpg", "logo6.jpg", "Mon titre 6", "Ma description 6"],
    ["image7.jpg", "logo7.jpg", "Mon titre 7", "Ma description 7"],
]*/

let film1 = new film("image1.jpg", "logo1.jpg", "Mon titre 1", "Ma description 1");
let film2 = new film("image2.jpg", "logo2.jpg", "Mon titre 2", "Ma description 2");
let film3 = new film("image3.jpg", "logo3.jpg", "Mon titre 3", "Ma description 3");
let film4 = new film("image4.jpg", "logo4.jpg", "Mon titre 4", "Ma description 4");
let film5 = new film("image5.jpg", "logo5.jpg", "Mon titre 5", "Ma description 5");
let film6 = new film("image6.jpg", "logo6.jpg", "Mon titre 6", "Ma description 6");
let film7 = new film("image7.jpg", "logo7.jpg", "Mon titre 7", "Ma description 7");

//addMainPanel("image1.jpg", "logo1.jpg", "Mon titre", "Ma description")
for (let i = 0; i < films.length; i++) {
    addMainPanel(films[i][0], films[i][1], films[i][2], films[i][3])    
}


function addMainPanel(image, logo, titre, desc, searchText = ""){

    if ((searchText != "") && (titre.indexOf(searchText) <= 0)){
        return;
    } 

    let mainDiv = document.getElementById("blocMain");
 
    mainDiv.innerHTML += `
    <div class="blocElt">
     <img class="mainImage" src="Images/${image}" alt=" image "></img>
     <div class=mainTitre>     
            <img class="logoImage" src="Images/${logo}" alt="logo"></img>       
            ${titre}         
    </div>
     <div class=maindesc> ${desc} </div>
    </div>
    ` ;  


}
function filtrer(){
    const textbox = document.getElementById("research");
    if (textbox.value.trim() == ""){
        alert("please enter a text to search");
    } else {

        let mainDiv = document.getElementById("blocMain");
        mainDiv.innerHTML = "";
        for (let i = 0; i < films.length; i++) {
            addMainPanel(films[i][0], films[i][1], films[i][2], films[i][3], textbox.value.trim())    
        }

    }
}
