document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("first") === false)
    {
        var currentLanguage = navigator.language || navigator.userLanguage;
        if (currentLanguage.startsWith('pt'))
        {
            localStorage.setItem("lang", 1);
        }
        else
        {
            localStorage.setItem("lang", 0);
        }
        localStorage.setItem("first", true);
    }
    changeLanguage(localStorage.getItem("lang"));
});
function changeLanguage(lang)
{
    let langPath;
    if (lang == 0)
    {
        langPath = "../languages/en.json";
    }
    else if (lang == 1)
    {
        langPath = "../languages/pt-br.json";
    }
        fetch(langPath).then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON');
            }
            return response.json();
        }).then(data => {
            document.getElementById("homebutton").childNodes[1].nodeValue = JSON.stringify(data.menu.homebutton).replace(/"/g, '');
            document.getElementById("gamesbutton").childNodes[1].nodeValue = JSON.stringify(data.menu.gamesbutton).replace(/"/g, '');
            document.getElementById("modelsbutton").childNodes[1].nodeValue = JSON.stringify(data.menu.modelsbutton).replace(/"/g, '');
            document.getElementById("contactbutton").childNodes[1].nodeValue = JSON.stringify(data.menu.contactbutton).replace(/"/g, '');
            document.getElementById("languagebutton").childNodes[1].nodeValue = JSON.stringify(data.menu.languagebutton).replace(/"/g, '');

            document.getElementById("introduction-greetings").innerHTML = JSON.stringify(data.introduction.greetings).replace(/"/g, '');
            document.getElementById("introduction-description").innerHTML = JSON.stringify(data.introduction.description).replace(/"/g, '');

            document.getElementById("skills-title").innerHTML = JSON.stringify(data.skills.title).replace(/"/g, '');
            document.getElementById("csharp").innerHTML = JSON.stringify(data.skills.csharp.title).replace(/"/g, '');

            var modalsCloseButtons = document.getElementsByClassName("close-modal");
            console.log(modalsCloseButtons.length);
            for (var i = 0; i < modalsCloseButtons.length; i++)
            {
                modalsCloseButtons[i].textContent = JSON.stringify(data.skills.closemodal).replace(/"/g, '');
            }

            document.getElementById("csharp-title").innerHTML = JSON.stringify(data.skills.csharp.title).replace(/"/g, '');
            document.getElementById("csharp-modal").innerHTML = JSON.stringify(data.skills.csharp.modal).replace(/"/g, '');

            document.getElementById("unity-modal").innerHTML = JSON.stringify(data.skills.unity.modal).replace(/"/g, '');

            document.getElementById("githubdesktop-modal").innerHTML = JSON.stringify(data.skills.githubdesktop.modal).replace(/"/g, '');

            document.getElementById("visualstudio-modal").innerHTML = JSON.stringify(data.skills.visualstudio.modal).replace(/"/g, '');
            document.getElementById("blender-modal").innerHTML = JSON.stringify(data.skills.blender.modal).replace(/"/g, '');
            document.getElementById("html-modal").innerHTML = JSON.stringify(data.skills.html.modal).replace(/"/g, '');
            document.getElementById("css-modal").innerHTML = JSON.stringify(data.skills.css.modal).replace(/"/g, '');
            document.getElementById("bootstrap-modal").innerHTML = JSON.stringify(data.skills.bootstrap.modal).replace(/"/g, '');

            document.getElementById("games-title").innerHTML = JSON.stringify(data.games.title).replace(/"/g, '');
            document.getElementById("games-description").innerHTML = JSON.stringify(data.games.description).replace(/"/g, '');

            document.getElementById("pixel2d").innerHTML = JSON.stringify(data.games.pixel2d.description).replace(/"/g, '');
            document.getElementById("tilepuzzle").innerHTML = JSON.stringify(data.games.tilepuzzle.description).replace(/"/g, '');
            document.getElementById("sharperfps").innerHTML = JSON.stringify(data.games.sharperfps.description).replace(/"/g, '');
            document.getElementById("piecearena").innerHTML = JSON.stringify(data.games.piecearena.description).replace(/"/g, '').replace(/\\/g, '');
            document.getElementById("csjmultiplayer").innerHTML = JSON.stringify(data.games.csjmultiplayer.description).replace(/"/g, '');
            document.getElementById("runoverzombies").innerHTML = JSON.stringify(data.games.runoverzombies.description).replace(/"/g, '');
            document.getElementById("spaceshipshooter").innerHTML = JSON.stringify(data.games.spaceshipshooter.description).replace(/"/g, '');
            document.getElementById("seemoregames").innerHTML = JSON.stringify(data.games.seemoregames).replace(/"/g, '');

            var accessButtons = document.getElementsByClassName("access-button");
            console.log(accessButtons.length);
            for (var i = 0; i < accessButtons.length; i++)
            {
                accessButtons[i].textContent = JSON.stringify(data.games.accessbutton).replace(/"/g, '');
            }
            document.getElementById("models-title").innerHTML = JSON.stringify(data.models.title).replace(/"/g, '');
            document.getElementById("models-description").innerHTML = JSON.stringify(data.models.description).replace(/"/g, '');
            document.getElementById("seemoremodels").innerHTML = JSON.stringify(data.models.seemoremodels).replace(/"/g, '');
            
            document.getElementById("contact-title").innerHTML = JSON.stringify(data.contact.title).replace(/"/g, '');
            document.getElementById("contact-description").innerHTML = JSON.stringify(data.contact.description).replace(/"/g, '');
            document.getElementById("contact-form").innerHTML = JSON.stringify(data.contact.contactform).replace(/"/g, '');

            document.getElementById("footer").innerHTML = JSON.stringify(data.footer.text).replace(/"/g, '');
            localStorage.setItem("lang", lang);
        });
}