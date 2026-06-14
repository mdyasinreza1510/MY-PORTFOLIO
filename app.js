let resetbtn= document.querySelector(".sub-btn");
let mesgs=document.querySelectorAll(".name-pass");

resetbtn.addEventListener("click",() =>{
    
    alert("Messege Sent");


    //har ek input keliye uska value ko empty krdo
    mesgs.forEach(input => {
        input.value="";
    });
});

// piclink.addEventListener("click",()=>{
//     picdiv.classList.add("animate");
//     data.classList.add("left-to-right");
// })