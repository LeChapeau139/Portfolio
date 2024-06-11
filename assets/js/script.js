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
            details: `Ce projet a pour but de créer plusieurs énigmes, pour former un Escape Game. Nous avions pour seule contrainte d'utiliser deux ou trois systèmes de transmission.
              Nous avons décidé d'utiliser par exemple le WIFI et l'infrarouge. Ce projet était à faire en groupe, mais nous avons tous travaillions sur chacune des parties. <br><br>

              Nous nous sommes donc vite mis d’accord sur une histoire et un contexte : un énorme tremblement de terre risque de se produire dans les 30 prochaines minutes et seule 
              la technologie de l’Institut de Recherche Scientifique sur les Catastrophes Naturelles (IRSCN) peut sauver l’humanité. La tâche consiste donc à passer parmi plusieurs 
              niveaux de sécurité (les énigmes), afin d’activer cette fameuse technologie et sauver le monde<br><br>

              1/ Les utilisateurs devaient tout d'abord se balader dans les codes sources du site pour trouver le mot de passe afin de lancer le jeu. Il était codé en base 64. Une fois connecté,
              le jeu se lance. <br><br>

              2/ Ensuite, il arrive sur une page semblable à une boîte de réception de mail, et ils devaient lire tous les mails, et seul l'un d'entre eux offrait l'indice caché. Sur leur table se trouvait une boîte,
              avec un accéléromètre. Ils devaient secouer la boîte. A l'intérieur, un petit écran écrivait "hiden.php", soit une page pour compléter l'URL. Cette page ramenait à un PDF explicatif pour la suite.<br><br>

              3/ Cette fois, ils devaient utiliser l'outil "Twinkle", qui permet d'appeler en local un numéro de téléphone, que l'on a créé nous-mêmes dans les fichiers de configuration. Lors de cet
              appel, les étudiants devaient bien écouter tout ce que le répondeur disait, puisqu'en suivant les étapes, et en appuyant sur les bonnes touches pour défiler dans les menus, à la fin, le répondeur vous donnez
              un indice pour la prochaine étape.<br><br>

              4/ La suite de l'escape game, nous passons à l'étape avec l'infrarouge. Si vous avez bien écouté le répondeur et que vous n'ayez manqué aucune étape, vous devez normalement être en possession d'un code. Ce dernier
              va vous servir à ouvrir la prochaine boîte. Pour cela, ils devaient trouver dans la salle une télécommande pour activer le capteur infrarouge. Il fallait pointer la télécommande et rentrer le bon code. La boîte
              était scellée par un aimant qui, au moment où le code était bon, s'ouvrait et vous pouviez découvrir un indice : "Parler à Simon". C'est la prochaine étape.<br><br>

              5/ C'est la dernière étape, le Simon. C'est un jeu de couleurs, avec 4 Leds qui clignote, avec une fonction de niveau. Chaque nouveau niveau, reprend le code couleur vu précédemment, ce qui accentue la difficulté
              du jeu au fur et à mesure. Lorsque le jeu est réussi, une trappe s'ouvre et vous affiche un code en binaire. Il correspond au code final, c'est-à-dire qu'une fois convertie, vous devez le mettre sur le site,
              et si le code est bon, alors vous avez remporté le jeu, sinon, vous échouez automatiquement.<br><br>

              Supervision : Du côté supervision, nous avions une fenêtre en temps réel, avec le temps de jeu restant, si les équipes demandaient un indice, la pénalité liée à un indice, si une étape était réussie ou échouée.
              Ce qui était vraiment bien avec cette page supervision, c'était que tout été en temps réel, pas besoin d'être derrière l'équipe, nous pouvions visualiser quelle équipe avait fini une étape, quelle épreuve était
              en train d'être réalisé, ou échoué. Nous avions connecté chacun de nos ardus inos avec le Wi-Fi pour justement, eu en temps réel les données qui arrivaient sur notre serveur.<br><br>`
        },
        EscapeGame: {
            image: "assets/projet/escape_games.jpg",
            title: "EscapeGame",
            date: "Nov 2022 - Jan 2023",
            technologies: ["Arduino / C++", "PHP", "JavaScript", "Apache", "MariaDB", "Administration Système"],
            details: `<p>Ce projet a pour but de créer plusieurs énigmes, pour former un Escape Game. Nous avions pour seule contrainte d'utiliser deux ou trois systèmes de transmission.
              Nous avons décidé d'utiliser par exemple le WIFI et l'infrarouge. Ce projet était à faire en groupe, mais nous avons tous travaillions sur chacune des parties. <br><br>

              Nous nous sommes donc vite mis d’accord sur une histoire et un contexte : un énorme tremblement de terre risque de se produire dans les 30 prochaines minutes et seule 
              la technologie de l’Institut de Recherche Scientifique sur les Catastrophes Naturelles (IRSCN) peut sauver l’humanité. La tâche consiste donc à passer parmi plusieurs 
              niveaux de sécurité (les énigmes), afin d’activer cette fameuse technologie et sauver le monde<br><br>

              1/ Les utilisateurs devaient tout d'abord se balader dans les codes sources du site pour trouver le mot de passe afin de lancer le jeu. Il était codé en base 64. Une fois connecté,
              le jeu se lance. <br><br>

              2/ Ensuite, il arrive sur une page semblable à une boîte de réception de mail, et ils devaient lire tous les mails, et seul l'un d'entre eux offrait l'indice caché. Sur leur table se trouvait une boîte,
              avec un accéléromètre. Ils devaient secouer la boîte. A l'intérieur, un petit écran écrivait "hiden.php", soit une page pour compléter l'URL. Cette page ramenait à un PDF explicatif pour la suite.<br><br>

              3/ Cette fois, ils devaient utiliser l'outil "Twinkle", qui permet d'appeler en local un numéro de téléphone, que l'on a créé nous-mêmes dans les fichiers de configuration. Lors de cet
              appel, les étudiants devaient bien écouter tout ce que le répondeur disait, puisqu'en suivant les étapes, et en appuyant sur les bonnes touches pour défiler dans les menus, à la fin, le répondeur vous donnez
              un indice pour la prochaine étape.<br><br>

              4/ La suite de l'escape game, nous passons à l'étape avec l'infrarouge. Si vous avez bien écouté le répondeur et que vous n'ayez manqué aucune étape, vous devez normalement être en possession d'un code. Ce dernier
              va vous servir à ouvrir la prochaine boîte. Pour cela, ils devaient trouver dans la salle une télécommande pour activer le capteur infrarouge. Il fallait pointer la télécommande et rentrer le bon code. La boîte
              était scellée par un aimant qui, au moment où le code était bon, s'ouvrait et vous pouviez découvrir un indice : "Parler à Simon". C'est la prochaine étape.<br><br>

              5/ C'est la dernière étape, le Simon. C'est un jeu de couleurs, avec 4 Leds qui clignote, avec une fonction de niveau. Chaque nouveau niveau, reprend le code couleur vu précédemment, ce qui accentue la difficulté
              du jeu au fur et à mesure. Lorsque le jeu est réussi, une trappe s'ouvre et vous affiche un code en binaire. Il correspond au code final, c'est-à-dire qu'une fois convertie, vous devez le mettre sur le site,
              et si le code est bon, alors vous avez remporté le jeu, sinon, vous échouez automatiquement.<br><br>

              Supervision : Du côté supervision, nous avions une fenêtre en temps réel, avec le temps de jeu restant, si les équipes demandaient un indice, la pénalité liée à un indice, si une étape était réussie ou échouée.
              Ce qui était vraiment bien avec cette page supervision, c'était que tout été en temps réel, pas besoin d'être derrière l'équipe, nous pouvions visualiser quelle équipe avait fini une étape, quelle épreuve était
              en train d'être réalisé, ou échoué. Nous avions connecté chacun de nos ardus inos avec le Wi-Fi pour justement, eu en temps réel les données qui arrivaient sur notre serveur.<br><br>`
        },
        Etudiants: {
            image: "assets/projet/bdd.jpeg",
            title: "App Gestion des Étudiants",
            date: "Dec 2022 - Jun 2023",
            technologies: ["Python", "Kivy", "MariaDB", "MySQL", "GitHub"],
            details: `<p>L’idée de ce projet est de développer une application permettant le suivi des moyennes des étudiants d’une structure éducative (ici l’IUT R&T) par les professeurs
              de cette même structure. L’application est codée en Python, utilise la bibliothèque graphique Kivy et devra permettre l’ajout d’étudiants, de moyennes ainsi que la
              visualisation des données stockées dans une base de données sur diverses interfaces.
              <br><br>
              Ce projet requiert une base de données comportant 3 tables : une table users qui contient les différents identifiants et mots de passe des professeurs et qui sera
              utilisée lors de la connexion via la page de login ; une table contenant les étudiants avec leur identifiant unique, leur nom, leur prénom, leur âge, leur année d’étude, leur
              moyenne générale et leur photo et enfin, une table contenant les moyennes et les matières correspondantes pour chaque étudiant qui sera lié à cette table par son identifiant.
              <br><br>
              L’application requiert plusieurs bibliothèques et paquets afin de fonctionner correctement et permettre l’implémentation de fonctionnalités pratiques et optimisées tel que :
              Pip / Kivy / WebSockets et WebSocket-Client / Plyer / Mysql_Connector. Afin de permettre à Mysql_Connector de se connecter à la base de données
              et d’envoyer des requêtes, on initialise la configuration nécessaire à cette connexion en début de programme, afin que celle-ci puisse être utilisée dans n’importe quelle classe.
              <br><br>
              Au cours de cette SAÉ, nous avons pu mettre en pratique nos connaissances acquises en Kivy, base de données, mais aussi en développement Python plus
              poussé. Nous avons ainsi pu développer une application communicante de gestion d’étudiants et de leurs moyennes. Au cours de ce projet, nous avons été confrontés à divers problèmes qui nous ont
              forcé à revoir notre stratégie et les fonctionnalités que nous voulions implémenter comme par exemple le Trombinoscope qui a finalement été supprimé après
              plusieurs tentatives infructueuses afin d’organiser les informations des étudiants.
              <br><br>
              En effet, nous avons pensés à ajouter des éléments en plus, pour rendre le programme encore plus précis et plus performant, en voici quelqu’une:
              <br><br>
              - Si un étudiant est déjà présent dans la BDD, faire un update si il rentre de nouvelle note, ne pas recréer un deuxième même étudiant
              <br>
              - Avoir le droit coté serveur, de supprimer un étudiant, avec un bouton supprimer (si l’étudiant ne fait plus partie d’une classe, pouvoir l’enlever de la BDD)
              <br>
              - Faire un classement : L’objectif est de pouvoir classer par ordre alphabétique les étudiants, ou bien de les classer par moyenne/matière
              <br>
              - Pour afficher toutes les photos des étudiants de la classe, avoir le trombinoscope de la classe désiré
              <br><br>
              En effet, nous allons devoir gérer les potentielles erreurs, afin que notre programme soit le plus optimisé possible. 
              <br>
              Voici une liste de toutes les erreurs que nous devons traiter :
              <br><br>
              - Vérifier que l’adresse mail est conforme
              <br>
              - Vérifier que les nom et prénom soit bien conforme (uniquement des lettres)
              <br>
              - Vérifier qu’on ne puisse pas avoir deux fois le même étudiant dans la BDD
              <br>
              - Vérifier qu’un étudiant ai bien sa photo dans la BDD
              <br><br>
            </p>`
        },
        ElasticSearch: {
            image: "assets/projet/supervision.jpg",
            title: "Gestion des Logs - ElasticSearch",
            date: "Nov 2023 - Actuel",
            technologies: ["Docker", "Syslog", "ElasticSearch", "Kibana", "Fluentd", "CI/CD"],
            details: `<p><span class="critical">Les informations liées à ce projet doivent être protégées, seulement les grandes lignes sont abordées.</span>
              <br><br>
              Ce projet est un de mes projets les plus importants en entreprise. L’objectif est de mettre en place un serveur de log, qui va nous permettre de récupérer certaines données sur nos équipements.
              <br><br>
              Afin d’héberger la solution Elasticsearch - Fluentd - Kibana, qui nous servira de syslog ainsi que de moteur pour parcourir et analyser nos logs, nous avons décidé de créer un environnement sous Docker, puisque nous allons utiliser plusieurs services à la fois. 
              <br><br>
              Étant donné que nous n’avons pas besoin de toutes les logs, un travail minutieux de recherche et de réécriture à été effectué afin que uniquement les logs que nous voulions puissent être visualisées. 
              <br><br>
              La configuration d’elasticsearch est des plus minimaliste pour l’instant : un index qui nous permet de voir les logs en fonction du type (Windows - Linux), un système de snapshot qui permet une sauvegarde chaque jour de ces indices, puis une suppression automatique pour être en conformité avec les demandes de la RGPD. 
              <br><br>
              Par la suite, nous nous occuperons de ce qui est de la haute disponibilité afin que notre système puisse être opérationnel en continue. 
              <br><br>
              Kibana nous permet de visualiser à l’aide de dashboard nos logs. Par exemple, un dashboard à été créé afin de mieux visualiser qui se connecte où, par quel PC, à quelle heure. Avec la possibilité de voir aussi ces données sous la forme de chiffre, afin d’avoir une idée précise de ce qu’il nous attend
            </p>`
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
            details: `<p>Ce projet a pour but, en combinant des connaissances acquises en Python, réseau, système et
              administration système, de développer une solution informatique complète pour la supervision des
              incidents se produisant sur chaque site d'une entreprise supposée et rattachée à chaque service présent sur
              les machines qui composent ces sites. Ces incidents seront appelés événements tout le long de ce document.
              <br><br>
              Cette solution doit pouvoir capter des flux RSS servants à répertorier les événements de chaque
              service sur chaque site, agréger ces flux, les formater et les restituer sous forme de page web stylisée.
              La solution doit pouvoir être facilement déployable, c’est-à-dire installable directement sur une machine et
              un réseau inconnus et fonctionner normalement, sous réserve que la solution soit bien configurée par la
              personne en charge de la nouvelle installation.
              <br><br>
              L'objectif est alors de configurer manuellement 3 serveurs, un agrégateur et un client qui pourra sortir sur le web.
              Les trois serveurs sont configurés avec une adresse différente pour chacun d'eux. C'est sur ces machines que nous allons générer aléatoirement des flux RSS.
              Une fois que chacun des serveurs est configuré avec des flux RSS qui se générer aléatoirement toutes les x secondes, nous allons voir le côté agrégateur
              <br><br>
              L'agrégateur, lui, sert de passerelle entre guillemets, il va pouvoir faire le lien entre les flux RSS des serveurs et le client. Pour cela, il va venir récupérer
              les adresses de chaque serveur pour y prendre les serveurs RSS. Au préalable, nous avons mis en place un serveur Apache2. C'est sur ce dernier que les flux RSS vont être stockés.
              Avec du python, nous allons créer un programme qui permet de récupérer uniquement certaines informations présentes dans les flux, tels que le nom, la date, la criticité, et le rapport du flux.
              Pour rendre la page compréhensible, nous y ajoutons du CSS, qui nous permet par exemple d'aligner 2-3 flux, et de mettre en avant la criticité du flux.
              <br><br>
              Le résultat final est de voir sur le client, avec l'adresse de l'agrégateur via un navigateur, l'intitulé du flux RSS, son risque, avec le titre ou l'en-tête
              de couleur verte pour <span class="minor">"minor"</span>, orange pour <span class="major">"major"</span> et rouge pour <span class="critical">"critical"</span>. 
            </p>`
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

    document.querySelectorAll('.competences-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // X coordinate within the card
            const y = e.clientY - rect.top; // Y coordinate within the card
    
            const rotateX = ((y / rect.height) - 0.5) * 20; // Increased multiplier for more rotation
            const rotateY = ((x / rect.width) - 0.5) * -20; // Increased multiplier for more rotation
    
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.boxShadow = '1px 0px 10px 4px rgba(241, 104, 30, 0.7)';
        });
    
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            card.style.boxShadow = '1px 0px 2px 2px rgba(241, 104, 30, 0.5)';
        });
    });

    
});

