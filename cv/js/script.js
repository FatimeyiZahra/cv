$('.picker').datetimepicker({
    timepicker: true,
    datepicker: true,
    format: 'Y-m-d H:i', // formatDate
    hours12: false,
    step: 1
})
let cv = document.querySelector(".CV")
// let deleteBtn = document.querySelectorAll(".deleteBtn")
let addBtn = document.querySelector(".addBtn")
let cvAdd = document.querySelector(".cvAdd")

addBtn.addEventListener("click", function () {
    let cloneCv = cv.cloneNode(true)
    cvAdd.append(cloneCv);
})
var deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "delete";
deleteBtn.classList.add("btn")
deleteBtn.classList.add("btn-danger")
deleteBtn.classList.add("mb-3")
cv.appendChild(deleteBtn)

deleteBtn.addEventListener("click", function () {
    
        this.parentNode.remove();
    });


// $(".deleteBtn").on("click", ".remove", function() {
//     $(this).parent().remove();
//     return false; 
// });
// $(".deleteBtn").click(function () {

//     $(this).closest(".CV").remove();
// });
// $(".deleteBtn").click(function () {
//     // $(".CV:last").remove();
// });
// $(".deleteBtn").click(function() {
//     $(this).parent().remove();
// });
// deleteBtn.addEventListener("click", function () {
//     deleteBtn.forEach(element => {
//         element.parentNode.remove();
//     });
// });
