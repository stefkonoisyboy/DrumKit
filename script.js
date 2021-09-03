let buttons = Array.from(document.querySelectorAll("button"));
let audios = Array.from(document.querySelectorAll("audio"));

window.addEventListener("keydown", function(e) {
    if (e.key === "a") {
        buttons.forEach((button) => {
            if(button.id == "65") {
                button.classList.add("playing");
            }
        });
        
        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "65") {
                audio.play();
            }
        });
    }
    else if (e.key === "s") {
        buttons.forEach((button) => {
            if(button.id == "83") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "83") {
                audio.play();
            }
        });
    }
    else if (e.key === "d") {
        buttons.forEach((button) => {
            if(button.id == "68") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "68") {
                audio.play();
            }
        });
    }
    else if (e.key === "f") {
        buttons.forEach((button) => {
            if(button.id == "70") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "70") {
                audio.play();
            }
        });
    }
    else if (e.key === "g") {
        buttons.forEach((button) => {
            if(button.id == "71") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "71") {
                audio.play();
            }
        });
    }
    else if (e.key === "h") {
        buttons.forEach((button) => {
            if(button.id == "72") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "72") {
                audio.play();
            }
        });
    }
    else if (e.key === "j") {
        buttons.forEach((button) => {
            if(button.id == "74") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "74") {
                audio.play();
            }
        });
    }
    else if (e.key === "k") {
        buttons.forEach((button) => {
            if(button.id == "75") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "75") {
                audio.play();
            }
        });
    }
    else {
        buttons.forEach((button) => {
            if(button.id == "76") {
                button.classList.add("playing");
            }
        });

        audios.forEach((audio) => {
            let audioId = audio.getAttribute("data-key");
            if(audioId == "76") {
                audio.play();
            }
        });
    }
});

window.addEventListener("keyup", function(e) {
    if (e.key === "a") {
        buttons.forEach((button) => {
            if(button.id == "65") {
                button.classList.remove("playing");
            }
        });
    }
    else if (e.key === "s") {
        buttons.forEach((button) => {
            if(button.id == "83") {
                button.classList.remove("playing");
            }
        });
    }
    else if (e.key === "d") {
        buttons.forEach((button) => {
            if(button.id == "68") {
                button.classList.remove("playing");
            }
        });
    }
    else if (e.key === "f") {
        buttons.forEach((button) => {
            if(button.id == "70") {
                button.classList.remove("playing");
            }
        });
    }
    else if (e.key === "g") {
        buttons.forEach((button) => {
            if(button.id == "71") {
                button.classList.remove("playing");
            }
        });
    }
    else if (e.key === "h") {
        buttons.forEach((button) => {
            if(button.id == "72") {
                button.classList.remove("playing");
            }
        });
    }
    else if (e.key === "j") {
        buttons.forEach((button) => {
            if(button.id == "74") {
                button.classList.remove("playing");
            }
        });
    }
    else if (e.key === "k") {
        buttons.forEach((button) => {
            if(button.id == "75") {
                button.classList.remove("playing");
            }
        });
    }
    else {
        buttons.forEach((button) => {
            if(button.id == "76") {
                button.classList.remove("playing");
            }
        });
    }
});