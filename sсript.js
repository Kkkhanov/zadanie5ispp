



const images = document.querySelectorAll('#images');
  images.forEach((element) => {
   element.addEventListener('mouseenter', function () {
      document.getElementById("big-image").src = element.src;
   });
});




/*const image2 = document.querySelector(".image-2")
const image1 = document.querySelector(".image-1")
const image3 = document.querySelector(".image-3")

/*image2.onmouseover = function() {
   document.getElementById("big-image").src = 'shirtt.jpg';
}

image1.onmouseover = function() {
   document.getElementById("big-image").src = 'shirt.jpg';
}

image3.onmouseover = function() {
   document.getElementById("big-image").src = 'shirttt.jpg';
}*/

let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");

buttonCountPlus.onclick = function() {
   if (count.value <= 100) {
       count.value++;
   }
}

buttonCountMinus.onclick = function() {
   if (count.value >= 2) {
      count.value--;
   }
}

const b = document.querySelector('.purchase-button');
const toast = document.getElementById('toast');
const toastParent = document.getElementById('toast-parent');

b.onclick = function(ev){
    toastParent.style.cssText = "display:block";
    toast.innerHTML="В корзину добавлено товаров: "+count.value;
    setTimeout(function() {
      toastParent.style.display = 'none';
   }, 1000);
};















