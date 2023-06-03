var cnt = 0;
var cog = 10;
const btntext = document.getElementById('btn');
function doAction() {
    cnt += 1;
    btntext.innerText = cnt;
    if(btntext.innerText == cog){
        alert("10 달성");
        cog += 10;
    }
}
