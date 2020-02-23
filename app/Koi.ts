import {ObjetVisible} from "./ObjetVisible";
import {Vie} from "./Vie";
import {ProgressionNiveau} from "./ProgressionNiveau";
import {Jeu} from "./Jeu";

// ***************************************************************************************************************
// CONSTANTES
// ***************************************************************************************************************
const redimensionMax:number = 1.5;

export class Koi extends ObjetVisible {
    private tTouches:Array<boolean> = new Array();
    private laMinuterieKoi:number = null;
    private laMinuterieSiTouche:number = null;
    private enTir:boolean = false;
    private laMinuterieDebutTir:number = null;
    private laMinuterieBufferTir:number = null;
    private laMinuterieMortKoi:number = null;
    private debuterMinuterie:boolean = false;
    private debuterMinuterieTir:boolean = false;
    private tPointsContact:Array<createjs.MovieClip> = new Array();
    private koiEstTouche:boolean = false;
    private tVies:Array<Vie> = null;
    private nombreViesRestantes:number = 3;
    private numeroNiveau:number = null;
    private laProgressionNiveau:ProgressionNiveau = null;
    private leJeu:Jeu = null;
    private leNumNiveau:number = null;

    private static limite:{haut:number,bas:number,gauche:number,droite:number} = {haut:240,bas:520,gauche:100,droite:650};

    public constructor(refStage:createjs.Stage, unX:number, unY:number, refTVies:Array<Vie>, refNumeroNiveau:number, refProgressionNiveau:ProgressionNiveau, refJeu:Jeu) {
        super(refStage, unX, unY);

        this.tTouches = [false, false, false, false, false]; //Touches 37 + 65(gauche + 'a'), 38+ 87(haut + 'w'), 39 + 68(droite + 'd'), 40 + 83(bas + 's'), 37 + 13(espace + enter)

        window.onkeydown = this.activerTouche.bind(this);
        window.onkeyup = this.desactiverTouche.bind(this);

        this.tPointsContact[0] = this['P0_mc'];
        this.tPointsContact[1] = this['P1_mc'];
        this.tPointsContact[2] = this['P2_mc'];
        this.tPointsContact[3] = this['P3_mc'];

        this.tVies = refTVies;
        this.numeroNiveau = refNumeroNiveau;

        this.laProgressionNiveau = refProgressionNiveau;

        this.leJeu = refJeu;
        this.leStage = refStage;

        // Mise à zéro pour la tête de lecture des sous clips, permettant de modifier sans bogue avec gotoAndStop
        this.miseAZeroTetesLectureSousClips();

        this.leNumNiveau = refNumeroNiveau;
        if (this.leNumNiveau!=1) {
            this.changerEtatVisuelSelonNiveau();
        }
    }

    private miseAZeroTetesLectureSousClips():void {
        this['avatar_cycleMarche'].gotoAndStop(0);
        this['avatar_cycleMarche']['ombre'].gotoAndStop(0);
        this['avatar_cycleMarche'].gotoAndPlay(0);

        this['avatar_etatTouche'].gotoAndStop(0);
        this['avatar_etatTouche']['ombre'].gotoAndStop(0);
        this['avatar_etatTouche'].gotoAndPlay(0);

        this['avatar_etatTombe'].gotoAndStop(0);
        this['avatar_etatTombe']['ombre'].gotoAndStop(0);
        this['avatar_etatTombe'].gotoAndPlay(0);

        this['avatar_etatTombe_neutre'].gotoAndStop(0);
        this['avatar_etatTombe_neutre']['ombre'].gotoAndStop(0);
        this['avatar_etatTombe_neutre'].gotoAndPlay(0);

        // Changement esthétique des ombres (ajout alpha par programmation)
        this['avatar_cycleMarche']['ombre'].alpha = 0.7;
        this['avatar_etatTouche']['ombre'].alpha = 0.7;
        this['avatar_etatTombe']['ombre'].alpha = 0.7;
        this['avatar_etatTombe_neutre']['ombre'].alpha = 0.7;
    }

    public dessiner():void {
        window.lib.mcavatarClipKoi.call(this);
        this.frameBounds = window.lib.mcavatarClipKoi.prototype.frameBounds;
    }

    private changerEtatVisuelSelonNiveau():void {
        if (this.leNumNiveau==2) {
            this['avatar_cycleMarche']['ombre'].gotoAndStop('foncee');
            this['avatar_etatTouche']['ombre'].gotoAndStop('foncee');
            this['avatar_etatTombe']['ombre'].gotoAndStop('foncee');
            this['avatar_etatTombe_neutre']['ombre'].gotoAndStop('foncee');
        }
    }

    // *************************************************************************************************************
    // DÉPLACEMENT
    // *************************************************************************************************************

    private activerTouche(evenement:KeyboardEvent):void {
        switch (evenement.keyCode)
        {
            // Touches 'principales' & 'alternatives'
            case 37 : //flèche gauche
            case 65 : //touche 'a'
                this.tTouches[0] = true;
                this.debuterMinuterie = true;
                evenement.preventDefault();
                break;

            case 38 : //flèche haut
            case 87 : //touche 'w'
                this.tTouches[1] = true;
                this.debuterMinuterie = true;
                evenement.preventDefault();
                break;

            case 39 : //flèche droite
            case 68 : //touche 'd'
                this.tTouches[2] = true;
                this.debuterMinuterie = true;
                evenement.preventDefault();
                break;

            case 40 : //flèche bas
            case 83 : //touche 's'
                this.tTouches[3] = true;
                this.debuterMinuterie = true;
                evenement.preventDefault();
                break;

            case 32 : //touche 'espace'
            case 13 : //touche 'enter'
                this.tTouches[4] = true;
                this.debuterMinuterieTir = true;
                evenement.preventDefault();
                break;
        }

        if(this.debuterMinuterie != false && this.laMinuterieKoi == null){
            this.laMinuterieKoi = window.setInterval(this.bougerAvatar.bind(this), 50);
        }
        if (this.debuterMinuterieTir != false && this.enTir == false) {
            this.enTir = true;
            this.debuterFaireTirerAvatar();
        }
    }

    private desactiverTouche(evenement:KeyboardEvent):void {
        switch (evenement.keyCode)
        {
            // Touches 'principales' & 'alternatives'
            case 37 : //flèche gauche
            case 65 : //touche 'a'
                this.tTouches[0] = false;
                break;

            case 38 : //flèche haut
            case 87 : //touche 'w'
                this.tTouches[1] = false;
                break;

            case 39 : //flèche droite
            case 68 : //touche 'd'
                this.tTouches[2] = false;
                break;

            case 40 : //flèche bas
            case 83 : //touche 's'
                this.tTouches[3] = false;
                break;

            case 32 : //touche 'espace'
            case 13 : //touche 'enter'
                this.tTouches[4] = false;
                break;
        }

        if(this.tTouches.indexOf(true) == -1){
            window.clearInterval(this.laMinuterieKoi);
            this.laMinuterieKoi = null;
        }

        if(this.tTouches[4] == false) {

        }
    }

    // *************************************************************************************************************
    // DÉPLACEMENT + REDIMENSION
    // *************************************************************************************************************

    private bougerAvatar():void {
        if(this.tTouches[0] != false) {
            if(this.x>Koi.limite.gauche) {
                this.x=this.x - 6;
            }
        }

        if(this.tTouches[1] != false) {
            if(this.y>Koi.limite.haut) {
                this.y = this.y - 6;
                let facteurDeRedimensionnement = redimensionMax * (this.y/window.lib.properties.height);
                this.scaleX = facteurDeRedimensionnement;
                this.scaleY = facteurDeRedimensionnement;
            }
        }

        if(this.tTouches[2] != false) {
            if(this.x<Koi.limite.droite) {
                this.x = this.x + 6;
            }
        }

        if(this.tTouches[3] != false) {
            if(this.y<Koi.limite.bas) {
                this.y=this.y + 6;
                let facteurDeRedimensionnement = redimensionMax * (this.y/window.lib.properties.height);
                this.scaleX = facteurDeRedimensionnement;
                this.scaleY = facteurDeRedimensionnement;
            }
        }
    }

    // *************************************************************************************************************
    // GESTION + CREATION PROJECTILES
    // *************************************************************************************************************

    private debuterFaireTirerAvatar():void {
        this['avatar_cycleMarche']['source_jet_eau'].gotoAndPlay('tir');
        this.laMinuterieDebutTir = window.setInterval(this.faireTirerAvatar.bind(this), 400);
    }

    private faireTirerAvatar():void {
        window.clearInterval(this.laMinuterieDebutTir);
        this['avatar_cycleMarche']['source_jet_eau'].gotoAndStop('neutre');

        // Calcul du positionnement à envoyer au constructor du projectile, qui prend en compte le redimentionnement
        let rectAvatarKoi:createjs.Rectangle = this.getTransformedBounds();
        let refPositionXSourceProjectile = this.x+(rectAvatarKoi.width/2);
        let refPositionYSourceProjectile = (this.y*-1)+(rectAvatarKoi.height/3);

        this.leJeu.creerProjectile(refPositionXSourceProjectile, refPositionYSourceProjectile);

        this.leJeu.partirSonSFX('tir');

        this.laMinuterieBufferTir = window.setInterval(this.permettreNouveauTir.bind(this), 700);
    }

    public permettreNouveauTir():void {
        window.clearInterval(this.laMinuterieBufferTir);

        this.leJeu.arreterSonSFX('tir');

        if (this.laMinuterieDebutTir!=null) {
            this.laMinuterieDebutTir = null;
        }
        this.laMinuterieBufferTir = null;

        this.enTir = false;
        this.debuterMinuterieTir = false;
    }


    // *************************************************************************************************************
    // GESTION COLLISION
    // *************************************************************************************************************

    public enCollisionGrossiereAvec(refDemandeur:createjs.MovieClip):boolean {
        let monRect = this.getTransformedBounds();
        let rectDemandeur = refDemandeur.getTransformedBounds();
        let enCollision = monRect.intersects(rectDemandeur);

        return enCollision;
    }

    public enCollisionFineAvec(refDemandeur:createjs.MovieClip):number {
        if (this.koiEstTouche != true) {
            // Une valeur 'impossible' à la base, change pour un index réel si point touché
            let indexPointTouche:number = -1;
            // Pour chacun de mes points de contact
            for (let intCpt: number = 0; intCpt < this.tPointsContact.length && indexPointTouche == -1; intCpt++) {
                let monPoint:createjs.MovieClip = this.tPointsContact[intCpt];
                // Convertir mon point en coordonnée locale au demandeur
                let monPointLocalAuDemandeur: createjs.Point = monPoint.localToLocal(monPoint.x, monPoint.y, refDemandeur);
                if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y)) {
                    indexPointTouche = intCpt;
                }
            }
            return indexPointTouche;
        }
    }

    public gererAvatarTouche():void {
        if (this.koiEstTouche==false) {
            this.debuterInvincibilite();
            // Empêche le son double de collision et de mort de l'avatar
            if (this.nombreViesRestantes > 1) {
                this.leJeu.partirSonSFX('avatar_touche');
            }
        }
    }

    // *************************************************************************************************************
    // INVINCIBILITÉ + RETOUR NORMALE
    // *************************************************************************************************************

    private debuterInvincibilite():void {
        // Bascule état changement, pour évite empilement des écouteurs d'évènement
        this.koiEstTouche =! this.koiEstTouche;
        this.gotoAndStop("etatTouche");

        this.laMinuterieSiTouche = window.setInterval(this.retourEtatNormal.bind(this), 2000);
    }

    private retourEtatNormal():void {
        this.leJeu.arreterSonSFX('avatar_touche');
        this.koiEstTouche =! this.koiEstTouche;
        window.clearInterval(this.laMinuterieSiTouche);
        this.laMinuterieSiTouche = null;
        this.gotoAndStop("enMouvement");
    }

    // *************************************************************************************************************
    // GESTION POINTS DE VIE
    // *************************************************************************************************************

    public gererPointsVie() {
        if (this.nombreViesRestantes >= 1) {
            this.nombreViesRestantes = this.nombreViesRestantes-1;
            this.tVies[this.nombreViesRestantes].changerEtatVisuelVie();

            if (this.nombreViesRestantes == 0) {
                this.debuterAnimationMortKoi();
            }
        }
    }

    public debuterAnimationMortKoi():void {
        this.gotoAndStop('etatSiTombe');
        this.laMinuterieMortKoi = window.setInterval(this.debuterPartieTerminee.bind(this), 2000);
        this.leJeu.partirSonSFX('avatar_mort');
    }

    private debuterPartieTerminee():void {
        this.leJeu.arreterSonSFX('avatar_mort');
        window.clearInterval(this.laMinuterieMortKoi);
        this.gotoAndStop('etatMort_neutre');
        // Appel de la méthode de fin du jeu, niveau échoué
        if (this.nombreViesRestantes == 0) {
            this.leJeu.demanderEcranFinJeu('manekiNeko');
        }
        else {
            this.leJeu.demanderEcranFinJeu('manqueDAir');
        }
    }


    // *************************************************************************************************************
    // GESTION PROGRESSION NIVEAU
    // *************************************************************************************************************

    public gererProgressionNiveau() {
        this.laProgressionNiveau.faireReculerAvatar();
    }


    // *************************************************************************************************************
    // RETURNS POUR INFORMATIONS DE L'AVATAR
    // *************************************************************************************************************
    public retournerY():number {
        return this.y;
    }

    public retournerEstTouche():boolean {
        return this.koiEstTouche;
    }

    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************
    public supprimerKoi():void {
        window.onkeydown = null;
        window.onkeyup = null;

        window.clearInterval(this.laMinuterieKoi);
        this.laMinuterieKoi = null;

        if (this.laMinuterieSiTouche != null) {
            window.clearInterval(this.laMinuterieSiTouche);
            this.laMinuterieSiTouche = null;
        }

        if (this.laMinuterieDebutTir != null) {
            window.clearInterval(this.laMinuterieDebutTir);
            this.laMinuterieDebutTir = null;
        }

        if (this.laMinuterieBufferTir != null) {
            window.clearInterval(this.laMinuterieBufferTir);
            this.laMinuterieBufferTir = null;
        }

        this.supprimerObjetVisible();
    }
}