const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElement = document.querySelectorAll(".thumbnails-anchor");
function setDetails(anchor){
        const dataImage = anchor.getAttribute("data-details-image");
        const dataTitle = anchor.getAttribute("data-details-title");
        detailsImage.src = dataImage;
        detailsTitle.innerHTML = dataTitle; 
}
for(let i = 0; i < anchorElement.length;i++){
        anchorElement[i].addEventListener("click",function(){
                setDetails(anchorElement[i])
        })
}
