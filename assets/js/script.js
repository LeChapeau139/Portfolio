document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const modal = document.getElementById("projectModal");
    const closeButton = document.querySelector(".close-button");
    const projectDetails = document.getElementById("projectDetails");

    const projectData = {
        AppliMétéo: {
            image: "assets/projet/meteo.jpg",
            title: "AppliMétéo",
            date: "Avr 2024 - Mai 2023",
            technologies: ["HTML", "CSS", "JavaScript", "API", "GitLab", "Gestion de projet"],
            details: "Detailed description of DecisionHub project..."
        },
        EscapeGame: {
            image: "assets/projet/escape_games.jpg",
            title: "EscapeGame",
            date: "Nov 2022 - Jan 2023",
            technologies: ["Arduino / C++", "PHP", "JavaScript", "Apache", "MariaDB", "Administration Système"],
            details: "Detailed description of Trackify project..."
        },
        Etudiants: {
            image: "assets/projet/bdd.jpeg",
            title: "App Gestion des Étudiants",
            date: "Dec 2022 - Jun 2023",
            technologies: ["Python", "Kivy", "MariaDB", "MySQL", "GitHub"],
            details: "Detailed description of Podstream project..."
        },
        ElasticSearch: {
            image: "assets/projet/supervision.jpg",
            title: "Gestion des Logs - ElasticSearch",
            date: "Nov 2023 - Actuel",
            technologies: ["Docker", "Syslog", "ElasticSearch", "Kibana", "Fluentd", "CI/CD"],
            details: "Detailed description of Podstream project..."
        },
        Automatisation: {
            image: "assets/projet/automatisation.jpg",
            title: "Automatisation de script",
            date: "Jun 2024 - Jun 2024",
            technologies: ["CheckMK", "Python", "Automatisation (CRON)", "ChadBurn", "CI/CD"],
            details: "Detailed description of Podstream project..."
        },
        RSS: {
            image: "assets/projet/flux_rss.jpg",
            title: "Automatisation de script",
            date: "Jan 2022 - Jun 2022",
            technologies: ["HTML", "CSS", "Python", "Administration Système", "Gestion de projet"],
            details: "Detailed description of Podstream project..."
        },
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            const project = projectData[projectKey];
            console.log(`Project clicked: ${projectKey}`);

            projectDetails.innerHTML = `
                <img src=${project.image} alt="DecisionHub">
                <h3>${project.title}</h3>
                <p id="date">${project.date}</p>
                <div class="skills">
                    ${project.technologies.map(skill => `<span>${skill}</span>`).join('')}
                </div>
                <p>${project.details}</p>
            `;
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
    
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

    $(".image").click(function(){
        $(".image").removeClass("active");
        $(this).addClass("active");
    })

});

