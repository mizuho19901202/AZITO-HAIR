//メイン4分割
const visuals = document.querySelectorAll(
    ".main-1_image"
);

const items = document.querySelectorAll(
    ".main-1_list li"
);

const photos = [
    "sliderpict-A.jpg",
    "sliderpict-B.jpg",
    "sliderpict-C.jpg",
    "sliderpict-D.jpg"
];

let active = visuals[0];
let next = visuals[1];

active.style.backgroundImage =
`url("${photos[0]}")`;

active.dataset.photo = "0";
active.classList.add("is-active");

items.forEach((item) => {
    item.addEventListener("mouseenter",()=>{
        const index = Number(item.dataset.photo);

        if(active.dataset.photo === String(index)){
            return;
        }

     next.style.backgroundImage =
     `url("${photos[index]}")`;   
     
     next.dataset.photo = String(index);

     next.classList.add("is-active");
     active.classList.remove("is-active");

     [active,next] = [next,active];
});
    
});

//ヘッダー
const header = document.querySelector("#site-header");

function toggleHeader() {
    if(!header)return;

    if(window.scrollY >= window.innerHeight){
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }
}

window.addEventListener("scroll",toggleHeader);
window.addEventListener("resize",toggleHeader);

toggleHeader();
