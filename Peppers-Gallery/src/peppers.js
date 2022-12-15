const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElement = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const buttonElement = document.getElementById("hide-button");
const Hidden = "hidden";
function showDetails(){
        mainElement.classList.remove(Hidden);
}
function hideDetails(){
        mainElement.classList.add(Hidden);
}
function setDetails(anchor){
        const dataImage = anchor.getAttribute("data-details-image");
        const dataTitle = anchor.getAttribute("data-details-title");
        detailsImage.src = dataImage;
        detailsTitle.innerHTML = dataTitle; 
        showDetails();
}
for(let i = 0; i < anchorElement.length;i++){
        anchorElement[i].addEventListener("click",function(){
                setDetails(anchorElement[i])
        })
}
buttonElement.addEventListener("click",hideDetails);
