// import getCurrentDate  from "./knowDate.js"; 
// document.querySelector(".CurrentDatebtn").addEventListener("click", () => {
//     const currentdate = getCurrentDate();
//   let paraTag = document.querySelector("#DataPara");
//   if (!paraTag) {  
//     paraTag = document.createElement("p");
//     paraTag.id = "DataPara";
//     document.body.appendChild(paraTag);
//   }

//   paraTag.textContent = currentdate;
// });


//     document.querySelector(".card").addEventListener("click",async()=>{
//     const all_variants_raw= await fetch(`https://pokeapi.co/api/v2/pokemon/`);
//     const all_variants =await  all_variants_raw.json();
//     all_variants.results.forEach(element => {
//         const ptag = document.createElement("p")
//         document.body.appendChild(ptag);
//         ptag.innerHTML=element.name;
//     });
// })


document.getElementById("fetchBtn").addEventListener("click", async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        const container = document.querySelector(".cards");
        container.innerHTML = "";
        data.results.forEach((pokemon,index) => {
            const newCard = document.createElement("div");
            newCard.className = `card ${pokemon.name}`;
            newCard.innerHTML = `
                <a href="https://pokemon.com/us/pokedex/${pokemon.name}">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png">
                    <h4>#${pokemon.name}</h4>
                    <p style = {color="white"}>click Here to Know More</p>
                </a>
            `;
            container.appendChild(newCard);
        });
});






