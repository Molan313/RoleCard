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
    document.querySelector("#namaPlayer").innerHTML = `Nama: ${namaku}`;
    document.querySelector("#rolePlayer").innerHTML = `Role   : ${player.role}`;
    document.querySelector("#propertiPlayer").innerHTML = `Properti \t: ${player.properties}`;
    document.querySelector("#levelPlayer").innerHTML = `Level \t: ${player.level}`;

}

function tampilkanKomputer(){
    document.querySelector("#roleKomputer").innerHTML = `Role   : ${komputer.role}`;
    document.querySelector("#propertiKomputer").innerHTML = `Properti \t: ${komputer.properties}`;
    document.querySelector("#levelKomputer").innerHTML = `Level \t: ${komputer.level}`;
    
}

function random(){
    const role = ["Tank", "Tamer", "Fighter"];
    const properties = {
        "Tank" : ["Perisai Kayu", "Perisai Besi"],
        "Tamer" : ["Naga 🐲", "Kucing 😼", "Semut 🐜"],
        "Fighter" : ["Pedang Obsidian", "Pedang Api"]
    };
    const level = Math.floor(Math.random()*100);

    const randomRole = Math.floor(Math.random()* role.length);
    const rolePilihan = role[randomRole];
    const listProperti = properties[rolePilihan];
    const randomProperti = Math.floor(Math.random()* listProperti.length);
    const propertiPilihan = listProperti[randomProperti];

    return{
        role : rolePilihan,
        properties : propertiPilihan,
        level : level
    }
}

