
const Categories = {
	Musique: "Musique",
	Film: "Film",
	Informatique: "Informatique",
	Enfant: "Enfant"
}

/*document.getElementById("research")
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    document.getElementById("btnSearch").click();
}
});*/



for (const categ in Categories) {
    addBtnFiltre(categ);
}

let film1 = new film("image1.jpg", "logo1.jpg", "Mon titre 1", "Ma description 1", Categories.Musique);
let film2 = new film("image2.jpg", "logo2.jpg", "Mon titre 2", "Ma description 2", Categories.Enfant);
let film3 = new film("image3.jpg", "logo3.jpg", "Mon titre 3", "Ma description 3", Categories.Informatique);
let film4 = new film("image4.jpg", "logo4.jpg", "Mon titre 4", "Ma description 4", Categories.Enfant);
let film5 = new film("image5.jpg", "logo5.jpg", "Mon titre 5", "Ma description 5", Categories.Film);
let film6 = new film("image6.jpg", "logo6.jpg", "Mon titre 6", "Ma description 6", Categories.Film);
let film7 = new film("image7.jpg", "logo7.jpg", "Mon titre 7", "Ma description 7", Categories.Enfant);
let listFilm = [film1, film2, film3, film4, film5, film6, film7];

for (let i = 0; i < listFilm.length; i++) {
    addMainPanel(listFilm[i].image, listFilm[i].logo, listFilm[i].titre, listFilm[i].description, listFilm[i].categorie)    
}

function addBtnFiltre(textFiltre){
        let blocfiltreCateg = document.getElementById("blocfiltreCateg");
        blocfiltreCateg.innerHTML += `<div class="filtreCategElt">
            <button onclick=filtrer("${textFiltre}")>${textFiltre}</button>
        </div>`
    }

function addMainPanel(image, logo, titre, desc, categorie, searchText = "", filtreCateg = ""){

    if ((searchText != "") && (titre.indexOf(searchText) <= 0)){
        return;
    } 
    if ((filtreCateg != "") && (categorie.indexOf(filtreCateg) < 0)){
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

function filtrer(filtreCateg = ""){
    if (filtreCateg == "")
        filtreCateg = document.getElementById("selectFilter").value;
    const textboxResearch = document.getElementById("research");
    // if ((textboxREsearch.value.trim() == "") && (filtreCateg == "")){
    //     alert("please enter a text to search");
    // } else {
        let mainDiv = document.getElementById("blocMain");
        mainDiv.innerHTML = "";
        for (let i = 0; i < listFilm.length; i++) {
            addMainPanel(listFilm[i].image, listFilm[i].logo, listFilm[i].titre, listFilm[i].description,
                listFilm[i].categorie, textboxResearch.value.trim(), filtreCateg )    
        }
   // }
}
