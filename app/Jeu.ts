import {Koi} from "./Koi";
import {ManekiNeko} from "./ManekiNeko";
import {Obstacle} from "./Obstacle";
import {Vie} from "./Vie";
import {GaugeAir} from "./GaugeAir";
import {ProgressionNiveau} from "./ProgressionNiveau";
import {Fond} from "./Fond";
import {Table} from "./Table";
import {Projectile} from "./Projectile";
import {Bocal} from "./Bocal";
import {Ecran} from "./Ecran";
import {Chaise} from "./Chaise";
import {SFX} from "./SFX";
import {Trame} from "./Trame";


export class Jeu {
    private tManekiNeko:Array<ManekiNeko> = new Array();
    private tPositionsYPossibles1:Array<number> = [255, 290, 340, 410, 480];
    private tPositionsYPossibles2:Array<number> = [265, 300, 350, 421, 490];
    private tPositionsYPossiblesManekiNeko:Array<number> = new Array();
    private tPositionsYPossiblesObstacles:Array<number> = new Array();
    private tObstacles:Array<Obstacle> = new Array();

    private laMinuterieManekiNeko:number = null;
    private laMinuterieObstacles:number = null;

    private leStage:createjs.Stage = null;

    private avatarKoi:Koi = null;

    private tVies:Array<Vie> = new Array();
    private laGaugedAir:GaugeAir = null;
    private barreProgressionNiveau:ProgressionNiveau = null;

    private leFondDefilant:Fond = null;
    private leFondFixe:Table = null;
    private leBocalDebutNiveau:Bocal = null;
    private laChaise:Chaise = null;

    private tProjectiles:Array<Projectile> = new Array();

    private numeroNiveau:number = 1;

    private creerManekiNeko_lier:any = null;
    private creerObstacle_lier:any = null;
    private classerObjetsEnProfondeur_lier:any = null;

    private ecranInterface:Ecran = null;

    private sonSFXProjectile_lancement:SFX = null;
    private sonSFXProjectile_contact:SFX = null;
    private sonSFXAvatar_mort:SFX = null;
    private sonSFXAvatar_touche:SFX = null;
    private sonSFXAntagoniste_touche:SFX = null;
    private sonSFXAntagoniste_creation:SFX = null;
    private sonSFXNiveau_reussi:SFX = null;
    private sonSFXNiveau_echoue:SFX = null;
    private sonTrameNiveau1:Trame = null;
    private sonTrameNiveau2:Trame = null;

    public constructor(refStage:createjs.Stage) {
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
    private afficherEcranDebutJeu():void {
        this.ecranInterface = new Ecran(this.leStage, 800, 600, this);

        // Préchargement des trames pour les deux niveaux
        this.sonTrameNiveau1 = new Trame("./sons/01_trames/trame_niveau1.mp3", ["mp3"], "trame_n1", 1, -1);
        this.sonTrameNiveau2 = new Trame("./sons/01_trames/trame_niveau2.mp3", ["mp3"], "trame_n2", 1, -1);

        // Préchargement des sons

        // ---------------------------------------------------------------------------------------------------------
        // Réussite ou echec du niveau
        this.sonSFXNiveau_reussi = new SFX("./sons/02_sfx/04_niveaux/sfx_partieGagnee.mp3", ["mp3"], "sfx_partie_gagnee", 1);
        this.sonSFXNiveau_echoue = new SFX("./sons/02_sfx/04_niveaux/sfx_partiePerdue.mp3", ["mp3"], "sfx_partie_perdue", 1);


        // ---------------------------------------------------------------------------------------------------------
        // Projectiles
        this.sonSFXProjectile_lancement = new SFX("./sons/02_sfx/01_projectiles/sfx_projectile_lancement.mp3", ["mp3"], "sfx_projectile_lancement", 1);
        this.sonSFXProjectile_contact = new SFX("./sons/02_sfx/01_projectiles/sfx_projectile_contact.mp3", ["mp3"], "sfx_projectile_contact", 1);

        // ---------------------------------------------------------------------------------------------------------
        // Avatar (Koi)
        this.sonSFXAvatar_touche = new SFX("./sons/02_sfx/02_avatar/sfx_avatarTouche.mp3", ["mp3"], "sfx_avatar_touche", 1);
        this.sonSFXAvatar_mort = new SFX("./sons/02_sfx/02_avatar/sfx_avatarMort_v3.mp3", ["mp3"], "sfx_avatar_mort", 1);

        // ---------------------------------------------------------------------------------------------------------
        // Antagoniste (ManekiNeko)
        this.sonSFXAntagoniste_creation = new SFX("./sons/02_sfx/03_antagoniste/sfx_antagonisteCreation.mp3", ["mp3"], "sfx_antagoniste_creation", 1);
        this.sonSFXAntagoniste_touche = new SFX("./sons/02_sfx/03_antagoniste/sfx_antagonisteTouche.mp3", ["mp3"], "sfx_antagoniste_touche", 1);
    }

    // Méthodes pour déclancher le début du jeu
    public faireDebuterLeJeu():void {
        this.debuterLeJeu();
    }

    private debuterLeJeu():void {
        this.construireJeu();

        this.laMinuterieManekiNeko = window.setInterval(this.creerManekiNeko_lier, 500);
        this.laMinuterieObstacles = window.setInterval(this.creerObstacle_lier, 800);

        createjs.Ticker.addEventListener("tick", this.classerObjetsEnProfondeur_lier);

        // Démarrage des trames selon le numéro de niveau
        this["sonTrameNiveau" + this.numeroNiveau].demarrerSon();

    }

    // Écran niveau réussi
    public demanderEcranNiveauReussi():void {
        this.ecranInterface.afficherEcranNiveauTermine();
        this["sonTrameNiveau" + this.numeroNiveau].arreterSon();
    }

    // Changement niveau
    public changerNiveau(refNiveau:number):void {
        this.numeroNiveau = refNiveau;
    }

    // Écran fin de jeu
    public demanderEcranFinJeu(strRaisonMort:string):void {
        this.ecranInterface.afficherEcranFinJeu(strRaisonMort);
        this["sonTrameNiveau" + this.numeroNiveau].arreterSon();
        this.ecranInterface.changerEtatFinActivee();
    }

    // *************************************************************************************************************
    // GESTION DE PERCEPTION DE PROFONDEUR
    // *************************************************************************************************************

    private classerObjetsEnProfondeur():void {
        this.leStage.sortChildren(this.comparerY.bind(this));
    }

    private comparerY(a:createjs.MovieClip,b:createjs.MovieClip):Number{
        if (a.y > b.y )
            return 1;
        else if (a.y < b.y)
            return -1;
        else
            return 0;
    }

    // *************************************************************************************************************
    // CONSTRUCTION ÉLÉMENTS BASE JEU
    // *************************************************************************************************************

    private construireJeu():void {

        // ---------------------------------------------------------------------------------------------------------
        // Afficheurs

        // *** Création des vies
        for (let intCpt:number=1; intCpt<=3; intCpt++) {
            this.tVies[intCpt-1] = new Vie(this.leStage, intCpt*75, 45);
        }
        // *** Création de la gauge d'air
        // APRÈS AVATAR !!!

        // *** Création de la barre de progression de niveau
        let vitesseSelonNiveau:number = 3.5;
        if (this.numeroNiveau == 2) {
            vitesseSelonNiveau = 3;
        }
        this.barreProgressionNiveau = new ProgressionNiveau(this.leStage, 32, 584, vitesseSelonNiveau, this);

        // ---------------------------------------------------------------------------------------------------------
        // Fonds / Décors

        // *** Création du fond défilant
        this.leFondDefilant = new Fond(this.leStage, 0, 0, 0.3, this.numeroNiveau, -1);

        // *** Création du fond fixe (table)
        this.leFondFixe = new Table(this.leStage, 0, 230, this.numeroNiveau);

        // *** Création du fond mobile (bocal)
        this.leBocalDebutNiveau = new Bocal(this.leStage, 230, 527.7, 1, this.numeroNiveau, -1, this);

        // *** Création du fond mobile extra niveau 1 (chaise)
        if (this.numeroNiveau ==1) {
            this.laChaise = new Chaise(this.leStage, 439, 230, 0.5, -1, this.numeroNiveau);
        }

        // ---------------------------------------------------------------------------------------------------------
        // Avatar

        // *** Création de l'avatar
        this.avatarKoi = new Koi(this.leStage, 300, 400, this.tVies, this.numeroNiveau, this.barreProgressionNiveau, this);

        // *** Création de la gauge d'air
        this.laGaugedAir = new GaugeAir(this.leStage, 728, 587, this.avatarKoi);
    }

    // *************************************************************************************************************
    // DESTRUCTION DU BOCAL (visible qu'en début de niveau)
    // *************************************************************************************************************

    public supprimerBocal():void {
        this.leBocalDebutNiveau.supprimerBocal();
        this.leBocalDebutNiveau = null;
    }

    // *************************************************************************************************************
    // CONSTRUCTION + DESTRUCTION ANTAGONISTES - MANEKINEKO
    // *************************************************************************************************************

    private creerManekiNeko():void {
        // Pour reremplir le tableau des positions possibles si vidé
        if (this.tPositionsYPossiblesManekiNeko.length == 0) {
            this.tPositionsYPossiblesManekiNeko = this.tPositionsYPossibles1.slice(0);
        }

        // Pour changer le nombre d'antagonistes + leur vitesse selon le niveau
        let nbEnnemiParNiveau:number = 3;
        let vitesseSelonNiveau:number = 2;
        if (this.numeroNiveau==2) {
            nbEnnemiParNiveau = 5;
            vitesseSelonNiveau = 3;
        }

        // Limite le nombre d'antagonistes sur la scène à la fois à la variable nbEnnemiParNiveau
        if (this.tManekiNeko.length < nbEnnemiParNiveau) {

            // Pige au hasard un position du tableau
            let positionYHasard:number = Math.floor(Math.random()*(this.tPositionsYPossiblesManekiNeko.length-1));

            this.tManekiNeko.push(new ManekiNeko(this.leStage, 850, this.tPositionsYPossiblesManekiNeko[positionYHasard], vitesseSelonNiveau, -1, this, this.avatarKoi, this.numeroNiveau));

            // Retire position pigé au hasard du tableau
            this.tPositionsYPossiblesManekiNeko.splice(positionYHasard, 1);

        }

        // Recréation de la minuterie, avec valeur au hasard pour le délai
        window.clearInterval(this.laMinuterieManekiNeko);

        // Pige au hasard l'interval de création des Maneki Neko. Change selon le niveau.
        let nbHasardMinuterie:number = Math.floor(Math.random()*3000)+4000;
        if (this.numeroNiveau==2) {
            nbHasardMinuterie = Math.floor(Math.random()*3000)+2000;
        }

        this.laMinuterieManekiNeko = window.setInterval(this.creerManekiNeko_lier, nbHasardMinuterie);
    }

    public supprimerManekiNeko(refManekiNeko:ManekiNeko):void {
        let positionTableau:number = this.tManekiNeko.indexOf(refManekiNeko);
        this.tManekiNeko[positionTableau].supprimerManekiNeko();
        this.tManekiNeko.splice(positionTableau, 1);
    }

    // *************************************************************************************************************
    // CONSTRUCTION + DESTRUCTION OBSTACLES
    // *************************************************************************************************************

    private creerObstacle():void {
        // Pour reremplir le tableau des positions possibles si vidé
        if (this.tPositionsYPossiblesObstacles.length == 0) {
            this.tPositionsYPossiblesObstacles = this.tPositionsYPossibles2.slice(0);
        }

        // Pour changer le nombre d'antagonistes selon le niveau
        let nbObstacleParNiveau:number = 5;
        if (this.numeroNiveau==2) {
            nbObstacleParNiveau = 7;
        }

        // Limite le nombre d'antagonistes sur la scène à la fois à la variable nbObstacleParNiveau
        if (this.tObstacles.length < nbObstacleParNiveau) {

            // Pige au hasard un position du tableau
            let positionYHasard:number = Math.floor(Math.random()*(this.tPositionsYPossiblesManekiNeko.length-1));

            this.tObstacles.push(new Obstacle(this.leStage, 1000, this.tPositionsYPossiblesObstacles[positionYHasard], 1, -1, this, this.numeroNiveau, this.avatarKoi));

            // Retire position pigé au hasard du tableau
            this.tPositionsYPossiblesObstacles.splice(positionYHasard, 1);
        }

        // Recréation de la minuterie, avec valeur au hasard pour le délai
        window.clearInterval(this.laMinuterieObstacles);

        let nbHasardMinuterie:number = Math.floor(Math.random()*2000)+4000;
        if (this.numeroNiveau==2) {
            nbHasardMinuterie = Math.floor(Math.random()*2000)+3000;
        }
        this.laMinuterieObstacles = window.setInterval(this.creerObstacle_lier, nbHasardMinuterie);
    }

    public supprimerObstacle(refObstacle:Obstacle):void {
        let positionTableau:number = this.tObstacles.indexOf(refObstacle);
        this.tObstacles[positionTableau].supprimerObstacle();
        this.tObstacles.splice(positionTableau, 1);
    }


    // *************************************************************************************************************
    // CONSTRUCTION + DESTRUCTION DES PROJECTILES
    // *************************************************************************************************************

    public creerProjectile(refXProjectile, refYProjectile):void {
        if (this.tProjectiles.length<4) {
            this.tProjectiles.push(new Projectile(this.leStage, refXProjectile, refYProjectile, 10, 1, this.numeroNiveau, this));
        }
    }

    public retournerTManekiNeko():Array<ManekiNeko> {
        return this.tManekiNeko;
    }

    public detruireProjectile(refProjectile:Projectile):void {
        let positionProjectile:number = this.tProjectiles.indexOf(refProjectile);
        this.tProjectiles[positionProjectile].supprimerProjectile();
        this.tProjectiles.splice(positionProjectile, 1);
    }

    // *************************************************************************************************************
    // GESTION DES SONS SFX (débuter)
    // *************************************************************************************************************
    public partirSonSFX(refSon:string):void {
        switch (refSon) {
            case 'tir' : this.sonSFXProjectile_lancement.demarrerSon();
                break;

            case 'contact_projectile' : this.sonSFXProjectile_contact.demarrerSon();
                break;

            case 'avatar_mort' : this.sonSFXAvatar_mort.demarrerSon();
                break;

            case 'avatar_touche' : this.sonSFXAvatar_touche.demarrerSon();
                break;

            case 'antagoniste_touche' : this.sonSFXAntagoniste_touche.demarrerSon();
                break;

            case 'antagoniste_creation' : this.sonSFXAntagoniste_creation.demarrerSon();
                break;

            case 'partie_gagnee' : this.sonSFXNiveau_reussi.demarrerSon();
                break;

            case 'partie_perdue' : this.sonSFXNiveau_echoue.demarrerSon();
                break;
        }
    }

    public arreterSonSFX(refSon:string):void {
        switch (refSon) {
            case 'tir' : this.sonSFXProjectile_lancement.arreterSon();
                break;

            case 'contact_projectile' : this.sonSFXProjectile_contact.arreterSon();
                break;

            case 'avatar_mort' : this.sonSFXAvatar_mort.arreterSon();
                break;

            case 'avatar_touche' : this.sonSFXAvatar_touche.arreterSon();
                break;

            case 'antagoniste_touche' : this.sonSFXAntagoniste_touche.arreterSon();
                break;

            case 'antagoniste_creation' : this.sonSFXAntagoniste_creation.arreterSon();
                break;

            case 'partie_gagnee' : this.sonSFXNiveau_reussi.arreterSon();
                break;

            case 'partie_perdue' : this.sonSFXNiveau_echoue.arreterSon();
                break;
        }
    }

    // *************************************************************************************************************
    // SUPPRESSION GÉNÉRALE DES COMPOSANTES DU JEU
    // *************************************************************************************************************

    public supprimerComposantesJeu():void {
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
    }

    private supprimerAvatarKoi():void {
        this.avatarKoi.supprimerKoi();
        this.avatarKoi = null;
    }

    private supprimerProjectiles():void {
        for(let intCpt:number=0; intCpt<this.tProjectiles.length; intCpt++) {
            this.tProjectiles[intCpt].supprimerProjectile();
        }
        this.tProjectiles.splice(0);
    }

    private supprimerTousLesCompteurs():void {
        for(let intCpt:number=0; intCpt<this.tVies.length; intCpt++) {
            this.tVies[intCpt].supprimerVie();
        }
        this.laGaugedAir.supprimerGaugeAir();
        this.barreProgressionNiveau.supprimerProgressionNiveau();

        this.tVies.splice(0);
        this.laGaugedAir = null;
        this.barreProgressionNiveau = null;
    }

    private supprimerTousLesFonds():void {
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
    }

    private supprimerTousManekiNeko():void {
        for(let intCpt:number = 0; intCpt<this.tManekiNeko.length; intCpt++) {
            this.tManekiNeko[intCpt].supprimerManekiNeko();
        }
        this.tManekiNeko.splice(0);
        window.clearInterval(this.laMinuterieManekiNeko);
    }

    private supprimerTousObstacles():void {
        for(let intCpt:number = 0; intCpt<this.tObstacles.length; intCpt++) {
            this.tObstacles[intCpt].supprimerObstacle();
        }
        this.tObstacles.splice(0);
        window.clearInterval(this.laMinuterieObstacles);
    }

    public supprimerToutLeJeu():void {
        this.supprimerComposantesJeu();

        this.ecranInterface.supprimerEcran();
    }
}