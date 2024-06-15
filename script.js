function getWeb(url){
const iframe = document.getElementById(`frame`);
iframe.src=url;

/*if(url===`https://www.youtube.com/embed/ZDkIynGZ8k0?si=vxeL9C9axzBq68hA`){
    iframe.style.width= `560px`;
    iframe.style.height=`315px`;
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ;
    iframe.referrerpolicy="strict-origin-when-cross-origin"; 
    iframe.allowfullscreen=true;
}
else{
    iframe.style.width= `600px`;
    iframe.style.height = `500px`;
    
}*/
}