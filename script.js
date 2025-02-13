function chatBot() {
    return {
        
        subjects: {
            "algorithmique": [
                { question: "algorithme !", answer: "Un algorithme est une séquence finie d'instructions permettant de résoudre un problème donné." },
                { question: "Quelle est la différence entre un algorithme itératif et un algorithme récursif ?", answer: "Un algorithme itératif répète une série d'instructions de manière linéaire, tandis qu'un algorithme récursif s'appelle lui-même pour résoudre une sous-partie du problème." },
                { question: "Qu'est-ce qu'un graphe ?", answer: "Un graphe est une structure de données composée de sommets (ou nœuds) reliés entre eux par des arêtes." },
                { question: "Qu'est-ce qu'un algorithme de recherche ?", answer: "Un algorithme de recherche permet de trouver un élément dans une collection de données, comme la recherche linéaire ou la recherche binaire." },
                { question: "Qu'est-ce que la programmation dynamique ?", answer: "La programmation dynamique est une technique de résolution de problèmes en décomposant un problème en sous-problèmes plus petits et en mémorisant leurs résultats." },
                { question: "Comment déterminer la complexité d'un algorithme ?", answer: "La complexité d'un algorithme peut être mesurée en termes de temps d'exécution ou de mémoire utilisée en fonction de la taille des données d'entrée." },
                { question: "Qu'est-ce qu'un algorithme de recherche binaire ?", answer: "La recherche binaire consiste à diviser récursivement un tableau trié en deux parties pour localiser un élément cible." },
                { question: "Qu'est-ce qu'un algorithme glouton ?", answer: "Un algorithme glouton résout un problème en prenant à chaque étape la meilleure solution locale, en espérant qu'elle mène à la solution optimale." },
                { question: "Qu'est-ce que le tri par insertion ?", answer: "Le tri par insertion consiste à insérer successivement chaque élément dans une position appropriée dans une liste triée." },
                { question: "Qu'est-ce que la notion de récursivité ?", answer: "La récursivité est la capacité d'une fonction à s'appeler elle-même pour résoudre un problème." }
            ],
            "python": [
                { question: "Qu'est-ce qu'une liste en Python ?", answer: "Une liste en Python est une collection ordonnée et modifiable d'éléments." },
                { question: "Comment déclarer un dictionnaire en Python ?", answer: "Un dictionnaire en Python est une collection de paires clé-valeur, définie avec des accolades : {clé1: valeur1, clé2: valeur2}" },
                { question: "Qu'est-ce qu'un tuple en Python ?", answer: "Un tuple est une collection ordonnée d'éléments, similaire à une liste, mais immuable." },
                { question: "Qu'est-ce que l'indentation en Python ?", answer: "L'indentation est un espace ou une tabulation utilisé pour délimiter les blocs de code en Python." },
                { question: "Qu'est-ce qu'une exception en Python ?", answer: "Une exception en Python est un événement qui perturbe le flux normal d'exécution du programme." },
                { question: "Comment lire un fichier en Python ?", answer: "On utilise la fonction 'open()' pour ouvrir un fichier et la méthode 'read()' pour lire son contenu." },
                { question: "Qu'est-ce que la compréhension de liste ?", answer: "La compréhension de liste permet de créer une nouvelle liste en appliquant une expression sur chaque élément d'une séquence." },
                { question: "Qu'est-ce qu'un décorateur en Python ?", answer: "Un décorateur en Python est une fonction qui modifie le comportement d'une autre fonction." },
                { question: "Qu'est-ce qu'une lambda en Python ?", answer: "Une lambda est une fonction anonyme, définie avec le mot-clé 'lambda', permettant d'effectuer une opération rapide sans avoir à déclarer une fonction entière." },
                { question: "Qu'est-ce que l'encapsulation en Python ?", answer: "L'encapsulation est un principe de la programmation orientée objet qui consiste à restreindre l'accès direct à certains composants d'un objet." }
            ],
            "java": [
                { question: "Qu'est-ce qu'une interface en Java ?", answer: "Une interface en Java est un type qui spécifie un ensemble de méthodes qu'une classe doit implémenter." },
                { question: "Comment instancier un objet en Java ?", answer: "Un objet est instancié en Java avec le mot-clé 'new', suivi du nom de la classe, par exemple : MaClasse monObjet = new MaClasse();" },
                { question: "Qu'est-ce que la surcharge de méthode en Java ?", answer: "La surcharge de méthode permet d'avoir plusieurs méthodes dans une même classe avec le même nom, mais avec des paramètres différents." },
                { question: "Qu'est-ce que l'interface Comparable ?", answer: "L'interface Comparable permet de définir un ordre naturel pour les objets d'une classe afin de les trier." },
                { question: "Qu'est-ce qu'un objet en Java ?", answer: "Un objet en Java est une instance d'une classe, contenant des propriétés et des méthodes." },
                { question: "Qu'est-ce qu'une exception en Java ?", answer: "Une exception en Java est un événement qui perturbe le flux normal du programme et qui peut être capturé et traité." },
                { question: "Qu'est-ce que l'encapsulation en Java ?", answer: "L'encapsulation en Java consiste à cacher l'état interne d'un objet et à y accéder uniquement via des méthodes publiques." },
                { question: "Qu'est-ce qu'une collection en Java ?", answer: "Une collection en Java est une structure de données utilisée pour stocker et manipuler des objets." },
                { question: "Qu'est-ce qu'une classe abstraite ?", answer: "Une classe abstraite en Java est une classe qui ne peut pas être instanciée et qui peut contenir des méthodes abstraites à implémenter dans les classes dérivées." },
                { question: "Comment fonctionne le garbage collector en Java ?", answer: "Le garbage collector en Java est responsable de la gestion de la mémoire en supprimant les objets non utilisés." }
            ],
            "security": [
                { question: "Qu'est-ce que la sécurité informatique ?", answer: "La sécurité informatique vise à protéger les systèmes, les réseaux et les données contre les cyberattaques et les accès non autorisés."},
                { question: "Qu'est-ce qu'un pare-feu ?", answer: "Un pare-feu est un système qui surveille et contrôle le trafic réseau entrant et sortant, en fonction de règles de sécurité définies."},
                { question: "Que sont les attaques par phishing ?", answer: "Le phishing est une technique d'attaque où l'attaquant se fait passer pour une entité légitime pour obtenir des informations personnelles sensibles."},
                { question: "Qu'est-ce que l'authentification à deux facteurs ?", answer: "L'authentification à deux facteurs ajoute une couche de sécurité en exigeant deux formes d'identification avant d'accorder l'accès."},
                { question: "Qu'est-ce qu'une attaque par déni de service (DDoS) ?", answer: "Une attaque DDoS consiste à submerger un serveur ou un réseau de trafic afin de le rendre indisponible."},
                { question: "Qu'est-ce qu'un logiciel malveillant (malware) ?", answer: "Un malware est un programme conçu pour causer des dommages ou voler des informations sur un ordinateur ou un réseau."},
                { question: "Qu'est-ce qu'un certificat SSL/TLS ?", answer: "Un certificat SSL/TLS est utilisé pour sécuriser les communications sur Internet en chiffrant les données échangées."},
                { question: "Qu'est-ce qu'un cryptage asymétrique ?", answer: "Le cryptage asymétrique utilise deux clés distinctes, une clé publique pour chiffrer et une clé privée pour déchiffrer."},
                { question: "Que signifie l'acronyme VPN ?", answer: "VPN signifie `Virtual Private Network`, un réseau sécurisé permettant de naviguer sur Internet de manière privée."},
                { question: "Qu'est-ce qu'une vulnérabilité ?", answer: "Une vulnérabilité est une faiblesse dans un système qui peut être exploitée par un attaquant pour accéder à des informations sensibles."}
            ],
            "database": [
                { question: "Qu'est-ce qu'une base de données ?", answer: "Une base de données est un système organisé pour stocker, gérer et récupérer des données de manière efficace."},
                { question: "Qu'est-ce qu'une clé primaire ?", answer: "Une clé primaire est un identifiant unique pour chaque enregistrement dans une base de données."},
                { question: "Qu'est-ce que SQL ?", answer: "SQL (Structured Query Language) est un langage utilisé pour gérer et manipuler les bases de données relationnelles."},
                { question: "Qu'est-ce qu'une clé étrangère ?", answer: "Une clé étrangère est une colonne dans une table qui lie cette table à une autre, permettant de maintenir l'intégrité des données."},
                { question: "Qu'est-ce qu'une jointure en SQL ?", answer: "Une jointure en SQL permet de combiner des données provenant de deux ou plusieurs tables en fonction d'une condition de correspondance."},
                { question: "Qu'est-ce qu'une vue en SQL ?", answer: "Une vue est une table virtuelle construite à partir des résultats d'une requête SQL."},
                { question: "Qu'est-ce que la normalisation dans les bases de données ?", answer: "La normalisation est un processus qui vise à organiser les données dans une base de données pour éviter les redondances et améliorer l'efficacité."},
                { question: "Qu'est-ce que la transaction en SQL ?", answer: "Une transaction en SQL est une série d'opérations qui sont exécutées comme une unité, garantissant la cohérence des données."},
                { question: "Quelle est la différence entre une base de données relationnelle et une base de données NoSQL ?", answer: "Une base de données relationnelle utilise des tables avec des relations entre elles, tandis qu'une base de données NoSQL est plus flexible, souvent utilisée pour les données non structurées."},
                { question: "Qu'est-ce que l'indexation dans une base de données ?", answer: "L'indexation permet d'accélérer les requêtes en créant des structures de données qui facilitent l'accès rapide aux informations."}
            ]
        },

        // Questions et réponses supplémentaires
        prompts: [
            ["salut", "hey", "bonjour", "bonjour", "bon après-midi", "hi", "hey", "hello", "good morning", "good afternoon"],
            ["comment ça va", "comment va la vie", "comment ça se passe", "how are you", "how is life", "how are things"],
            ["que fais-tu", "qu'est-ce qui se passe", "quoi de neuf", "what are you doing", "what is going on", "what is up"],
            ["quel âge as-tu", "how old are you"],
            ["who are you", "are you human", "are you bot", "are you human or bot"],
            ["who created you", "who made you"],
            ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
            ["i love you"]
        ],
        replies: [
            ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
            ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
            ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
            ["I am infinite"],
            ["I am just a bot", "I am a bot. What are you?"],
            ["The one true God, JavaScript"],
            ["I am nameless", "I don't have a name"],
            ["I love you too", "Me too"]
        ],

        botTyping: false,
    messages: [{
        from: 'bot',
        text: 'Bonjour ! Je suis ton assistant (YnovBot - V2) pour les matières enseignées à Ynov Campus. Que souhaites-tu savoir ?'
    }],

    output: function(input) {
        let response;
        const question = input.toLowerCase().trim();
        
        // Recherche de la question dans les sujets
        for (const subject in this.subjects) {
            for (let i = 0; i < this.subjects[subject].length; i++) {
                const q = this.subjects[subject][i].question.toLowerCase();
                if (q.includes(question)) {
                    response = this.subjects[subject][i].answer;
                    break;
                }
            }
            if (response) break;
        }

        // Si aucune réponse n'est trouvée, on vérifie dans les questions générales
        if (!response) {
            for (let i = 0; i < this.prompts.length; i++) {
                for (let j = 0; j < this.prompts[i].length; j++) {
                    if (this.prompts[i][j] === question) {
                        response = this.replies[i][Math.floor(Math.random() * this.replies[i].length)];
                        break;
                    }
                }
                if (response) break;
            }
        }

        // Si aucune réponse n'est trouvée
        if (!response) {
            response = "Je ne comprends pas bien ta question. Essaye une autre formulation. / I don't fully understand your question. Try rephrasing it.";
        }

        this.addChat(input, response);
    },

    addChat: function(input, response) {
        // Ajouter le message de l'utilisateur
        this.messages.push({
            from: 'user',
            text: input
        });

        // Simuler une réponse avec un délai
        setTimeout(() => {
            this.botTyping = true;
        }, 1000);

        setTimeout(() => {
            this.botTyping = false;
            this.messages.push({
                from: 'bot',
                text: response
            });
        }, ((response.length / 10) * 1000) + (Math.floor(Math.random() * 2000) + 1500));
    },

    updateChat: function(target) {
        if (target.value.trim()) {
            this.output(target.value.trim());
            target.value = '';
        }
    }
}
}