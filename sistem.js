//Counter
var hitung = document.getElementById("hitung");
var baca = localStorage.getItem("datahitung");
if(isNaN(baca)){
    baca = 0;
}
baca++;
hitung.innerHTML = baca;
localStorage.setItem("datahitung", baca);

//Timer
var detik = document.getElementById("detik");
var menit = document.getElementById("menit");
var hitungandetik = 0;
var hitunganmenit = 0;
var myinterval;

myinterval = setInterval(function(){
    hitungandetik++;
    if (hitungandetik == 60){
        hitunganmenit++
        menit.innerHTML = hitunganmenit;
        hitungandetik = 0
    }
    detik.innerHTML = hitungandetik;
}, 1000);
