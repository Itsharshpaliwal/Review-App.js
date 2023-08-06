let form = document.querySelector("form");
let rating = document.querySelector("#rating");
let review = document.querySelector("#review");
let ul = document.querySelector("ul");

const saveReview = (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  let delBtn = document.createElement("button");
  li.className = "list-group-item rounded-0 shadow-sm";
  h1.innerText = "Rating : " + rating.value;
  h1.className = "display-5";
  h2.className = "display-6";
  delBtn.className = "btn btn-danger btn-sm rounded-0 float-end";
  delBtn.innerText = "X";
  h2.innerText = "Review : " + review.value;
  li.appendChild(h1);
  li.appendChild(h2);
  li.appendChild(delBtn);
  ul.appendChild(li);
};

form.addEventListener("submit", saveReview);

const deleteReview = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure?")) {
      ul.removeChild(li);
    }
  }
};

ul.addEventListener("click", deleteReview);
