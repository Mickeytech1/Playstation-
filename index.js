var menulist = document.getElementById("menulist");
menulist.style.maxHeight= "10px";

function togglemenu(){
    if (menulist.style.maxHeight=="10px")
    {
        menulist.style.maxHeight= "130px";
    }
    else
    {
        menulist.style.maxHeight="10px";
    }
}