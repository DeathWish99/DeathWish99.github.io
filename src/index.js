import _ from 'lodash';

function main(){
    let carousel = document.getElementById("carouselExampleControls")
    let header = document.getElementById("textHeading")
    let description = document.getElementById("textDescription")
    carousel.addEventListener('slid.bs.carousel', function(ev){
        let id = ev.target.getElementsByClassName("carousel-item active")[0].id;
        console.log(id);
        switch(id){
            case "0":
                header.textContent = "Chicken Flock"
                description.textContent = "Endless runner game with chickens and chicken upgrades"
            break;
            case "1":
                header.textContent = "NameMe!"
                description.textContent = "Writing game to teach dyslexic children how to write words"
            break;
            case "2":
                header.textContent = "Propaganda State Machine"
                description.textContent = "2D Game Jam game where you convert pawns to your cause"
            break;
            case "3":
                header.textContent = "Road of Ascension (Unfinished)"
                description.textContent = "Currently a character generation tool based on random names"
            break;
            case "4":
                header.textContent = "Zellin"
                description.textContent = "2D Platformer which explores the human blood stream"
            break;
            case "5":
                header.textContent = "Protectors"
                description.textContent = "Endless tower defense inspired game where the player protects a forest"
            break;
            default:
                header.textContent = "This is Default"
                description.textContent = "ssss"
        }
    });
}

main();

