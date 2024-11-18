function updatetime(){
    let date = new Date();
    let hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    console.log(hrs,min,sec);
    if(hrs<12){
        document.querySelector('.fr').innerHTML = "AM";

    }
    else{
        document.querySelector('.fr').innerHTML = "PM";
        hrs = (hrs-12);
    }
    document.querySelector('.hrs').innerHTML = padder(hrs);
    document.querySelector('.min').innerHTML = padder(min);
    document.querySelector('.sec').innerHTML = padder(sec);
}
function padder(pr){
    return pr<10? ("0"+pr):pr;
}
setInterval(()=>{
    updatetime();
},1000);