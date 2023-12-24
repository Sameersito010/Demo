let cl=console.log;



const recipeForm=document.getElementById("recipeForm");
const RecipeTitle=document.getElementById("RecipeTitle");
const recipeDetails=document.getElementById("recipeDetails");
const recipeThumbImg=document.getElementById("recipeThumbImg");
const recipeBannerImg=document.getElementById("recipeBannerImg");

const baseUrl=`https://http-promise-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/`;
const foddBlogUrl=`${baseUrl}/foodblog.json`;

const fileUploader=(fileControl)=>{
let selectedFile=fileControl.files[0]
cl(selectedFile);

if(selectedFile){
    let reader=new FileReader()
    reader.onload=function(e){
        cl(e.target.result)
    }
    reader.readAsDataURL(selectedFile);
}
}

recipeBannerImg.addEventListener("change",fileUploader)
recipeBannerImg.addEventListener("change",fileUploader)