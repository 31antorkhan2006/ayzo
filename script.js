document.addEventListener("DOMContentLoaded", function () {
  console.log("AYZO Website Loaded Successfully!");
});const images=[
"https://picsum.photos/1200/400?random=1",
"https://picsum.photos/1200/400?random=2",
"https://picsum.photos/1200/400?random=3"
];

let i=0;
setInterval(()=>{
  i=(i+1)%images.length;
  document.getElementById("slide").src=images[i];
},3000);.slider{
  width:90%;
  margin:20px auto;
}
.slider img{
  width:100%;
  height:220px;
  object-fit:cover;
  border-radius:12px;
}
