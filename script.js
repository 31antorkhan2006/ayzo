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
},3000);
