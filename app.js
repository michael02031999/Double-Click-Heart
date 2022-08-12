let image = document.getElementById("image");
let title = document.getElementById("title");
let imageCover = document.getElementById("imageCover");
let actualCounter = document.getElementById("actualCounter");

console.log(image);

image.addEventListener("dblclick", likeMessage);

let count = 0;

function likeMessage(e) {
  //heartDiv.remove();

  console.log("this works");

  count++;

  actualCounter.innerHTML = count;

  let heartDiv = document.createElement("div");

  heartDiv.setAttribute("id", "heart");
  heartDiv.style.top = e.clientY + "px";
  heartDiv.style.left = e.clientX + "px";
  //heartDiv.style.transform = "rotate(-45deg) scale(0.4)";

  /* heartDiv.style.transition = "all 4s linear"; */
  //heartDiv.style.transform = "rotate(-45deg) scale(4)";

  imageCover.appendChild(heartDiv);

  setTimeout(() => {
    let allDivs = imageCover.querySelectorAll("div");
    if (allDivs.length > 0) {
      allDivs[0].remove();
    }
  }, 350);

  /* let rect = heartDiv.getBoundingClientRect();
  console.log(rect); */
}
