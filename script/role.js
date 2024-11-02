let namaku = localStorage.getItem("nama");
let player = random();
let komputer = random()

tampilkanPlayer();
tampilkanKomputer();

document.querySelector("#resetPlayer").addEventListener("click", () => {
    player = random();
    tampilkanPlayer();
})

document.querySelector("#resetKomputer").addEventListener("click", () => {
    komputer = random();
    tampilkanKomputer();
})

function tampilkanPlayer(){
    document.querySelector("#namaPlayer").innerHTML = `Name: ${namaku}`;
    document.querySelector("#rolePlayer").innerHTML = `Role   : ${player.role}`;
    document.querySelector("#propertiPlayer").innerHTML = `Property \t: ${player.properties}`;
    document.querySelector("#levelPlayer").innerHTML = `Level \t: ${player.level}`;

}

function tampilkanKomputer(){
    document.querySelector("#namaPlayer").innerHTML = `Name: Computer`;
    document.querySelector("#roleKomputer").innerHTML = `Role   : ${komputer.role}`;
    document.querySelector("#propertiKomputer").innerHTML = `Property \t: ${komputer.properties}`;
    document.querySelector("#levelKomputer").innerHTML = `Level \t: ${komputer.level}`;
    
}

function random(){
    const role = ["Tank", "Tamer", "Fighter"];
    const properties = {
        "Tank" : ["Wooden Shield", "Iron Shield"],
        "Tamer" : ["Dragon 🐲", "Cat 😼", "Ant 🐜"],
        "Fighter" : ["Obsidian Sword", "Fire Sword"]
    };
    const level = Math.floor(Math.random()*100);

    const randomRole = Math.floor(Math.random()* role.length);
    const rolePilihan = role[randomRole];
    const listProperti = properties[rolePilihan];
    const randomProperti = Math.floor(Math.random()* listProperti.length);
    const propertiPilihan = listProperti[randomProperti];

    return{
        role : rolePilihan,
        property : propertiPilihan,
        level : level
    }
}

