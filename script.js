var modal = document.getElementById("mymodal");
var btn = document.getElementById("btn_modal_window");
var close = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = () => {
    modal.style.display = "block";
}
close.onclick = () => {
    modal.style.display = "none";
}
//window.onclick = (e) => {
  //  if (e.target == modal) {
    //    modal.style.display = "none";
   // }
//}
