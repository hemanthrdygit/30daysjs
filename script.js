let data = [{
    name:"Digital Clock",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque?",
    image:"digitalclock",
    live:"digitalclock",
    github:"github"
},{
    name:"Calendar",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque?",
    image:"calendar",
    live:"calendar",
    github:"github"
}]
let cards = document.querySelector('.cards');
let html=``;
data.forEach((element)=>{
    html+=`<div class="card">
                    <div class="cardimage">
                    <img src="assets/${element.image}.png" alt="">
                    </div>
                    <div class="cardname">
                        ${element.name}
                    </div>
                    <div class="carddesc">
                    ${element.description}
                    </div>
                    <div class="cardbtn">
                        <div class="live"><a href="${element.live}">Live</a></div>
                        <div class="githubc"><a href="${element.github}">Github</a></div>
                    </div>
                </div>`
})
cards.innerHTML = html;