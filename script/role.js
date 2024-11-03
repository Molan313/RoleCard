let namaku = localStorage.getItem("nama");
let player = random();
let komputer = random()

tampilkanPlayer();
tampilkanKomputer();
updateHasil();


document.querySelector("#resetPlayer").addEventListener("click", () => {
    player = random();
    tampilkanPlayer();
    updateHasil();
})

document.querySelector("#resetKomputer").addEventListener("click", () => {
    komputer = random();
    tampilkanKomputer();
    updateHasil();
})

function updateHasil(){
    const hasilGame = hasil();
    document.querySelector("#hasil").innerHTML = `Anda ${hasilGame.final}, nilai anda ${hasilGame.hasilPlayer} dan nilai Komputer ${hasilGame.hasilKomputer}`
}

function hasil(){

    const nilaiPlayer = unlockPlayer().value;
    const nilaiKomputer = unlockKomputer().value;

    if(nilaiPlayer == nilaiKomputer){
        return{
            hasilPlayer : nilaiPlayer,
            hasilKomputer : nilaiKomputer,
            final : "seri"
        }
    }
    else if(nilaiPlayer < nilaiKomputer){
        return{
            hasilPlayer : nilaiPlayer,
            hasilKomputer : nilaiKomputer,
            final : "Kalah"
        }
    }

    else if(nilaiPlayer > nilaiKomputer){
        return{
            hasilPlayer : nilaiPlayer,
            hasilKomputer : nilaiKomputer,
            final : "Menang"
        }
    }
}

function unlockPlayer(){
    const nilaiPlayer = player.indeksProperti;
    const levelPlayer = player.level;

        if((levelPlayer < nilaiPlayer * 10)){
            return{
                unlock: "locked",
                value: nilaiPlayer * 10
            }
        }
        else if((levelPlayer >= nilaiPlayer * 10)){
            return{
                unlock: "unlocked",
                value: nilaiPlayer*levelPlayer
            }

        }
}

function unlockKomputer(){
    const nilaiKomputer = komputer.indeksProperti;
    const levelKomputer = komputer.level;
        if((levelKomputer < nilaiKomputer * 10) ){
            return{
                unlock: "locked",
                value: nilaiKomputer * 10
            }
        }
        else if( levelKomputer >= (nilaiKomputer * 10)){
            return{
                unlock: "unlocked",
                value: nilaiKomputer*levelKomputer
            }
    }
}

function tampilkanPlayer(){
    document.querySelector("#imagePlayer").setAttribute("src", `./Image/${player.role}.png`);
    document.querySelector("#namaPlayer").innerHTML = `Name: ${namaku}`;
    document.querySelector("#rolePlayer").innerHTML = `Role   : ${player.role}`;
    document.querySelector("#propertiPlayer").innerHTML = `Property \t: ${player.property} (${unlockPlayer().unlock})`;
    document.querySelector("#levelPlayer").innerHTML = `Level \t: ${player.level}`;
    // document.querySelector("#valuePropertiPlayer").innerHTML = `Value \t: ${player.indeksProperti}`;
    return{
        nilaiPropertiPlayer: player.indeksProperti,
        levelPlayer: player.level
    }
}

function tampilkanKomputer(){
    document.querySelector("#imageKomputer").setAttribute("src", `./Image/${komputer.role}.png`);
    document.querySelector("#namaKomputer").innerHTML = `Name: Computer`;
    document.querySelector("#roleKomputer").innerHTML = `Role   : ${komputer.role}`;
    document.querySelector("#propertiKomputer").innerHTML = `Property \t: ${komputer.property} (${unlockKomputer().unlock})`;
    document.querySelector("#levelKomputer").innerHTML = `Level \t: ${komputer.level}`;
    // document.querySelector("#valuePropertiKomputer").innerHTML = `Value \t: ${komputer.indeksProperti}`;
    return{
        nilaiPropertiKomputer: komputer.indeksProperti,
        levelKomputer: komputer.level
    }
}


function random(){
    const role = ["Tank", "Tamer", "Fighter"];
    const properties = {
        "Tank" : ["Wooden Shield", "Iron Shield", "Diamond Shield", "Gravity Shield", "Aura"],
        "Tamer" : ["Ant 🐜", "Cat 😼", "Dragon 🐲", "Celestial", "VoidBeast"],
        "Fighter" : ["Wooden Sword", "Fire Sword", "Diamond Sword", "Gun", "Bazooka"]
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
        level : level,
        indeksProperti : randomProperti + 1
    }
}

