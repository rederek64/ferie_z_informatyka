const list_default_width = 300; // px
let list_width = 0; // px
const menu = document.querySelector('.list');
const btn = document.querySelector('.list_button');

function changeMenu(width, id) {
    list_width = width;
    menu.style.width = list_width + "px";
    btn.style.left = list_width-20 + "px";
    menu.id = id;
}

function togglemenu() {

    if(menu.id === "false") {
        const interval = setInterval(() => {
            changeMenu(list_width + 15, "false");
            if (list_width === 300) {
                clearInterval(interval);
                document.querySelector(".list_lis").style.display = "inherit";
                document.querySelector(".list_title").style.display = "inherit";
                changeMenu(list_width, "true");
            }
        }, 1)
    } else {
        document.querySelector(".list_lis").style.display = "none";
        document.querySelector(".list_title").style.display = "none";
        const interval = setInterval(() => {
            changeMenu(list_width - 15, "true");
            if (list_width === 0) {
                clearInterval(interval);
                changeMenu(list_width, "false");
            }
        }, 1)
    }

}

$(".list_button").on("click", togglemenu);