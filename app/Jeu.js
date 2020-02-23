define(["require", "exports", "./Koi", "./ManekiNeko", "./Obstacle", "./Vie", "./GaugeAir", "./ProgressionNiveau", "./Fond", "./Table", "./Projectile", "./Bocal", "./Ecran", "./Chaise", "./SFX", "./Trame"], function (require, exports, Koi_1, ManekiNeko_1, Obstacle_1, Vie_1, GaugeAir_1, ProgressionNiveau_1, Fond_1, Table_1, Projectile_1, Bocal_1, Ecran_1, Chaise_1, SFX_1, Trame_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = (function () {
        function Jeu(refStage) {
            this.tManekiNeko = new Array();
            this.tPositionsYPossibles1 = [255, 290, 340, 410, 480];
            this.tPositionsYPossibles2 = [265, 300, 350, 421, 490];
            this.tPositionsYPossiblesManekiNeko = new Array();
            this.tPositionsYPossiblesObstacles = new Array();
            this.tObstacles = new Array();
            this.laMinuterieManekiNeko = null;
            this.laMinuterieObstacles = null;
            this.leStage = null;
            this.avatarKoi = null;
            this.tVies = new Array();
            this.laGaugedAir = null;
            this.barreProgressionNiveau = null;
            this.leFondDefilant = null;
            this.leFondFixe = null;
            this.leBocalDebutNiveau = null;
            this.laChaise = null;
            this.tProjectiles = new Array();
            this.numeroNiveau = 1;
            this.creerManekiNeko_lier = null;
            this.creerObstacle_lier = null;
            this.classerObjetsEnProfondeur_lier = null;
            this.ecranInterface = null;
            this.sonSFXProjectile_lancement = null;
            this.sonSFXProjectile_contact = null;
            this.sonSFXAvatar_mort = null;
            this.sonSFXAvatar_touche = null;
            this.sonSFXAntagoniste_touche = null;
            this.sonSFXAntagoniste_creation = null;
            this.sonSFXNiveau_reussi = null;
            this.sonSFXNiveau_echoue = null;
            this.sonTrameNiveau1 = null;
            this.sonTrameNiveau2 = null;
            this.leStage = refStage;
            this.tPositionsYPossiblesManekiNeko = this.tPositionsYPossibles1.slice(0);
            this.tPositionsYPossiblesObstacles = this.tPositionsYPossibles2.slice(0);
            this.creerManekiNeko_lier = this.creerManekiNeko.bind(this);
            this.creerObstacle_lier = this.creerObstacle.bind(this);
            this.classerObjetsEnProfondeur_lier = this.classerObjetsEnProfondeur.bind(this);
            this.afficherEcranDebutJeu();
        }
        // *************************************************************************************************************
        // GESTION DEBUT / CHANGEMENT ÉCRANS & NIVEAUX
        // *************************************************************************************************************
        // Écran début de jeu + instanciation des sons + trame pour le chargement
        Jeu.prototype.afficherEcranDebutJeu = function () {
            this.ecranInterface = new Ecran_1.Ecran(this.leStage, 800, 600, this);
            // Préchargement des trames pour les deux niveaux
            this.sonTrameNiveau1 = new Trame_1.Trame("./sons/01_trames/trame_niveau1.mp3", ["mp3"], "trame_n1", 1, -1);
            this.sonTrameNiveau2 = new Trame_1.Trame("./sons/01_trames/trame_niveau2.mp3", ["mp3"], "trame_n2", 1, -1);
            // Préchargement des sons
            // ---------------------------------------------------------------------------------------------------------
            // Réussite ou echec du niveau
            this.sonSFXNiveau_reussi = new SFX_1.SFX("./sons/02_sfx/04_niveaux/sfx_partieGagnee.mp3", ["mp3"], "sfx_partie_gagnee", 1);
            this.sonSFXNiveau_echoue = new SFX_1.SFX("./sons/02_sfx/04_niveaux/sfx_partiePerdue.mp3", ["mp3"], "sfx_partie_perdue", 1);
            // ---------------------------------------------------------------------------------------------------------
            // Projectiles
            this.sonSFXProjectile_lancement = new SFX_1.SFX("./sons/02_sfx/01_projectiles/sfx_projectile_lancement.mp3", ["mp3"], "sfx_projectile_lancement", 1);
            this.sonSFXProjectile_contact = new SFX_1.SFX("./sons/02_sfx/01_projectiles/sfx_projectile_contact.mp3", ["mp3"], "sfx_projectile_contact", 1);
            // ---------------------------------------------------------------------------------------------------------
            // Avatar (Koi)
            this.sonSFXAvatar_touche = new SFX_1.SFX("./sons/02_sfx/02_avatar/sfx_avatarTouche.mp3", ["mp3"], "sfx_avatar_touche", 1);
            this.sonSFXAvatar_mort = new SFX_1.SFX("./sons/02_sfx/02_avatar/sfx_avatarMort_v3.mp3", ["mp3"], "sfx_avatar_mort", 1);
            // ---------------------------------------------------------------------------------------------------------
            // Antagoniste (ManekiNeko)
            this.sonSFXAntagoniste_creation = new SFX_1.SFX("./sons/02_sfx/03_antagoniste/sfx_antagonisteCreation.mp3", ["mp3"], "sfx_antagoniste_creation", 1);
            this.sonSFXAntagoniste_touche = new SFX_1.SFX("./sons/02_sfx/03_antagoniste/sfx_antagonisteTouche.mp3", ["mp3"], "sfx_antagoniste_touche", 1);
        };
        // Méthodes pour déclancher le début du jeu
        Jeu.prototype.faireDebuterLeJeu = function () {
            this.debuterLeJeu();
        };
        Jeu.prototype.debuterLeJeu = function () {
            this.construireJeu();
            this.laMinuterieManekiNeko = window.setInterval(this.creerManekiNeko_lier, 500);
            this.laMinuterieObstacles = window.setInterval(this.creerObstacle_lier, 800);
            createjs.Ticker.addEventListener("tick", this.classerObjetsEnProfondeur_lier);
            // Démarrage des trames selon le numéro de niveau
            this["sonTrameNiveau" + this.numeroNiveau].demarrerSon();
        };
        // Écran niveau réussi
        Jeu.prototype.demanderEcranNiveauReussi = function () {
            this.ecranInterface.afficherEcranNiveauTermine();
            this["sonTrameNiveau" + this.numeroNiveau].arreterSon();
        };
        // Changement niveau
        Jeu.prototype.changerNiveau = function (refNiveau) {
            this.numeroNiveau = refNiveau;
        };
        // Écran fin de jeu
        Jeu.prototype.demanderEcranFinJeu = function (strRaisonMort) {
            this.ecranInterface.afficherEcranFinJeu(strRaisonMort);
            this["sonTrameNiveau" + this.numeroNiveau].arreterSon();
            this.ecranInterface.changerEtatFinActivee();
        };
        // *************************************************************************************************************
        // GESTION DE PERCEPTION DE PROFONDEUR
        // *************************************************************************************************************
        Jeu.prototype.classerObjetsEnProfondeur = function () {
            this.leStage.sortChildren(this.comparerY.bind(this));
        };
        Jeu.prototype.comparerY = function (a, b) {
            if (a.y > b.y)
                return 1;
            else if (a.y < b.y)
                return -1;
            else
                return 0;
        };
        // *************************************************************************************************************
        // CONSTRUCTION ÉLÉMENTS BASE JEU
        // *************************************************************************************************************
        Jeu.prototype.construireJeu = function () {
            // ---------------------------------------------------------------------------------------------------------
            // Afficheurs
            // *** Création des vies
            for (var intCpt = 1; intCpt <= 3; intCpt++) {
                this.tVies[intCpt - 1] = new Vie_1.Vie(this.leStage, intCpt * 75, 45);
            }
            // *** Création de la gauge d'air
            // APRÈS AVATAR !!!
            // *** Création de la barre de progression de niveau
            var vitesseSelonNiveau = 3.5;
            if (this.numeroNiveau == 2) {
                vitesseSelonNiveau = 3;
            }
            this.barreProgressionNiveau = new ProgressionNiveau_1.ProgressionNiveau(this.leStage, 32, 584, vitesseSelonNiveau, this);
            // ---------------------------------------------------------------------------------------------------------
            // Fonds / Décors
            // *** Création du fond défilant
            this.leFondDefilant = new Fond_1.Fond(this.leStage, 0, 0, 0.3, this.numeroNiveau, -1);
            // *** Création du fond fixe (table)
            this.leFondFixe = new Table_1.Table(this.leStage, 0, 230, this.numeroNiveau);
            // *** Création du fond mobile (bocal)
            this.leBocalDebutNiveau = new Bocal_1.Bocal(this.leStage, 230, 527.7, 1, this.numeroNiveau, -1, this);
            // *** Création du fond mobile extra niveau 1 (chaise)
            if (this.numeroNiveau == 1) {
                this.laChaise = new Chaise_1.Chaise(this.leStage, 439, 230, 0.5, -1, this.numeroNiveau);
            }
            // ---------------------------------------------------------------------------------------------------------
            // Avatar
            // *** Création de l'avatar
            this.avatarKoi = new Koi_1.Koi(this.leStage, 300, 400, this.tVies, this.numeroNiveau, this.barreProgressionNiveau, this);
            // *** Création de la gauge d'air
            this.laGaugedAir = new GaugeAir_1.GaugeAir(this.leStage, 728, 587, this.avatarKoi);
        };
        // *************************************************************************************************************
        // DESTRUCTION DU BOCAL (visible qu'en début de niveau)
        // *************************************************************************************************************
        Jeu.prototype.supprimerBocal = function () {
            this.leBocalDebutNiveau.supprimerBocal();
            this.leBocalDebutNiveau = null;
        };
        // *************************************************************************************************************
        // CONSTRUCTION + DESTRUCTION ANTAGONISTES - MANEKINEKO
        // *************************************************************************************************************
        Jeu.prototype.creerManekiNeko = function () {
            // Pour reremplir le tableau des positions possibles si vidé
            if (this.tPositionsYPossiblesManekiNeko.length == 0) {
                this.tPositionsYPossiblesManekiNeko = this.tPositionsYPossibles1.slice(0);
            }
            // Pour changer le nombre d'antagonistes + leur vitesse selon le niveau
            var nbEnnemiParNiveau = 3;
            var vitesseSelonNiveau = 2;
            if (this.numeroNiveau == 2) {
                nbEnnemiParNiveau = 5;
                vitesseSelonNiveau = 3;
            }
            // Limite le nombre d'antagonistes sur la scène à la fois à la variable nbEnnemiParNiveau
            if (this.tManekiNeko.length < nbEnnemiParNiveau) {
                // Pige au hasard un position du tableau
                var positionYHasard = Math.floor(Math.random() * (this.tPositionsYPossiblesManekiNeko.length - 1));
                this.tManekiNeko.push(new ManekiNeko_1.ManekiNeko(this.leStage, 850, this.tPositionsYPossiblesManekiNeko[positionYHasard], vitesseSelonNiveau, -1, this, this.avatarKoi, this.numeroNiveau));
                // Retire position pigé au hasard du tableau
                this.tPositionsYPossiblesManekiNeko.splice(positionYHasard, 1);
            }
            // Recréation de la minuterie, avec valeur au hasard pour le délai
            window.clearInterval(this.laMinuterieManekiNeko);
            // Pige au hasard l'interval de création des Maneki Neko. Change selon le niveau.
            var nbHasardMinuterie = Math.floor(Math.random() * 3000) + 4000;
            if (this.numeroNiveau == 2) {
                nbHasardMinuterie = Math.floor(Math.random() * 3000) + 2000;
            }
            this.laMinuterieManekiNeko = window.setInterval(this.creerManekiNeko_lier, nbHasardMinuterie);
        };
        Jeu.prototype.supprimerManekiNeko = function (refManekiNeko) {
            var positionTableau = this.tManekiNeko.indexOf(refManekiNeko);
            this.tManekiNeko[positionTableau].supprimerManekiNeko();
            this.tManekiNeko.splice(positionTableau, 1);
        };
        // *************************************************************************************************************
        // CONSTRUCTION + DESTRUCTION OBSTACLES
        // *************************************************************************************************************
        Jeu.prototype.creerObstacle = function () {
            // Pour reremplir le tableau des positions possibles si vidé
            if (this.tPositionsYPossiblesObstacles.length == 0) {
                this.tPositionsYPossiblesObstacles = this.tPositionsYPossibles2.slice(0);
            }
            // Pour changer le nombre d'antagonistes selon le niveau
            var nbObstacleParNiveau = 5;
            if (this.numeroNiveau == 2) {
                nbObstacleParNiveau = 7;
            }
            // Limite le nombre d'antagonistes sur la scène à la fois à la variable nbObstacleParNiveau
            if (this.tObstacles.length < nbObstacleParNiveau) {
                // Pige au hasard un position du tableau
                var positionYHasard = Math.floor(Math.random() * (this.tPositionsYPossiblesManekiNeko.length - 1));
                this.tObstacles.push(new Obstacle_1.Obstacle(this.leStage, 1000, this.tPositionsYPossiblesObstacles[positionYHasard], 1, -1, this, this.numeroNiveau, this.avatarKoi));
                // Retire position pigé au hasard du tableau
                this.tPositionsYPossiblesObstacles.splice(positionYHasard, 1);
            }
            // Recréation de la minuterie, avec valeur au hasard pour le délai
            window.clearInterval(this.laMinuterieObstacles);
            var nbHasardMinuterie = Math.floor(Math.random() * 2000) + 4000;
            if (this.numeroNiveau == 2) {
                nbHasardMinuterie = Math.floor(Math.random() * 2000) + 3000;
            }
            this.laMinuterieObstacles = window.setInterval(this.creerObstacle_lier, nbHasardMinuterie);
        };
        Jeu.prototype.supprimerObstacle = function (refObstacle) {
            var positionTableau = this.tObstacles.indexOf(refObstacle);
            this.tObstacles[positionTableau].supprimerObstacle();
            this.tObstacles.splice(positionTableau, 1);
        };
        // *************************************************************************************************************
        // CONSTRUCTION + DESTRUCTION DES PROJECTILES
        // *************************************************************************************************************
        Jeu.prototype.creerProjectile = function (refXProjectile, refYProjectile) {
            if (this.tProjectiles.length < 4) {
                this.tProjectiles.push(new Projectile_1.Projectile(this.leStage, refXProjectile, refYProjectile, 10, 1, this.numeroNiveau, this));
            }
        };
        Jeu.prototype.retournerTManekiNeko = function () {
            return this.tManekiNeko;
        };
        Jeu.prototype.detruireProjectile = function (refProjectile) {
            var positionProjectile = this.tProjectiles.indexOf(refProjectile);
            this.tProjectiles[positionProjectile].supprimerProjectile();
            this.tProjectiles.splice(positionProjectile, 1);
        };
        // *************************************************************************************************************
        // GESTION DES SONS SFX (débuter)
        // *************************************************************************************************************
        Jeu.prototype.partirSonSFX = function (refSon) {
            switch (refSon) {
                case 'tir':
                    this.sonSFXProjectile_lancement.demarrerSon();
                    break;
                case 'contact_projectile':
                    this.sonSFXProjectile_contact.demarrerSon();
                    break;
                case 'avatar_mort':
                    this.sonSFXAvatar_mort.demarrerSon();
                    break;
                case 'avatar_touche':
                    this.sonSFXAvatar_touche.demarrerSon();
                    break;
                case 'antagoniste_touche':
                    this.sonSFXAntagoniste_touche.demarrerSon();
                    break;
                case 'antagoniste_creation':
                    this.sonSFXAntagoniste_creation.demarrerSon();
                    break;
                case 'partie_gagnee':
                    this.sonSFXNiveau_reussi.demarrerSon();
                    break;
                case 'partie_perdue':
                    this.sonSFXNiveau_echoue.demarrerSon();
                    break;
            }
        };
        Jeu.prototype.arreterSonSFX = function (refSon) {
            switch (refSon) {
                case 'tir':
                    this.sonSFXProjectile_lancement.arreterSon();
                    break;
                case 'contact_projectile':
                    this.sonSFXProjectile_contact.arreterSon();
                    break;
                case 'avatar_mort':
                    this.sonSFXAvatar_mort.arreterSon();
                    break;
                case 'avatar_touche':
                    this.sonSFXAvatar_touche.arreterSon();
                    break;
                case 'antagoniste_touche':
                    this.sonSFXAntagoniste_touche.arreterSon();
                    break;
                case 'antagoniste_creation':
                    this.sonSFXAntagoniste_creation.arreterSon();
                    break;
                case 'partie_gagnee':
                    this.sonSFXNiveau_reussi.arreterSon();
                    break;
                case 'partie_perdue':
                    this.sonSFXNiveau_echoue.arreterSon();
                    break;
            }
        };
        // *************************************************************************************************************
        // SUPPRESSION GÉNÉRALE DES COMPOSANTES DU JEU
        // *************************************************************************************************************
        Jeu.prototype.supprimerComposantesJeu = function () {
            // suppression des écouteurs d'événement
            window.clearInterval(this.laMinuterieManekiNeko);
            window.clearInterval(this.laMinuterieObstacles);
            createjs.Ticker.removeEventListener("tick", this.classerObjetsEnProfondeur_lier);
            this.supprimerAvatarKoi();
            if (this.tManekiNeko.length != 0) {
                this.supprimerTousManekiNeko();
            }
            if (this.tObstacles.length != 0) {
                this.supprimerTousObstacles();
            }
            if (this.tProjectiles.length != 0) {
                this.supprimerProjectiles();
            }
            this.supprimerTousLesCompteurs();
            this.supprimerTousLesFonds();
        };
        Jeu.prototype.supprimerAvatarKoi = function () {
            this.avatarKoi.supprimerKoi();
            this.avatarKoi = null;
        };
        Jeu.prototype.supprimerProjectiles = function () {
            for (var intCpt = 0; intCpt < this.tProjectiles.length; intCpt++) {
                this.tProjectiles[intCpt].supprimerProjectile();
            }
            this.tProjectiles.splice(0);
        };
        Jeu.prototype.supprimerTousLesCompteurs = function () {
            for (var intCpt = 0; intCpt < this.tVies.length; intCpt++) {
                this.tVies[intCpt].supprimerVie();
            }
            this.laGaugedAir.supprimerGaugeAir();
            this.barreProgressionNiveau.supprimerProgressionNiveau();
            this.tVies.splice(0);
            this.laGaugedAir = null;
            this.barreProgressionNiveau = null;
        };
        Jeu.prototype.supprimerTousLesFonds = function () {
            this.leFondDefilant.supprimerFond();
            this.leFondFixe.supprimerTable();
            if (this.leBocalDebutNiveau != null) {
                this.leBocalDebutNiveau.supprimerBocal();
            }
            if (this.laChaise != null) {
                this.laChaise.supprimerChaise();
            }
            this.leFondDefilant = null;
            this.leFondFixe = null;
            this.leBocalDebutNiveau = null;
            this.laChaise = null;
        };
        Jeu.prototype.supprimerTousManekiNeko = function () {
            for (var intCpt = 0; intCpt < this.tManekiNeko.length; intCpt++) {
                this.tManekiNeko[intCpt].supprimerManekiNeko();
            }
            this.tManekiNeko.splice(0);
            window.clearInterval(this.laMinuterieManekiNeko);
        };
        Jeu.prototype.supprimerTousObstacles = function () {
            for (var intCpt = 0; intCpt < this.tObstacles.length; intCpt++) {
                this.tObstacles[intCpt].supprimerObstacle();
            }
            this.tObstacles.splice(0);
            window.clearInterval(this.laMinuterieObstacles);
        };
        Jeu.prototype.supprimerToutLeJeu = function () {
            this.supprimerComposantesJeu();
            this.ecranInterface.supprimerEcran();
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map