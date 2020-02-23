import {Jeu} from "./Jeu";
import {Koi} from "./Koi";
import {ObjetCollision} from "./ObjetCollision";

export class ManekiNeko extends ObjetCollision {
    private leJeu:Jeu = null;
    private manekiNekoToucheProjectile:boolean = false;
    private laMinuterieMortManekiNeko:number = null;
    private manekiNekoEstTouche:boolean = false;

    private laMinuterieArreterBruitCreation:number = null;


    public constructor(refScene:createjs.Stage, unX:number, unY:number, uneVitesse:number, unSens:number, refJeu:Jeu, refKoi:Koi, refNumeroNiveau:number) {
        super(refScene, unX, unY, uneVitesse, unSens, refKoi, refNumeroNiveau);
        this.leJeu = refJeu;

        // Changement esthétique des ombres (ajout alpha par programmation)
        this['cycleMarche']['ombre'].alpha = 0.7;
        this['etatTouche']['ombre'].alpha = 0.7;
        this['etatTombe']['ombre'].alpha = 0.7;

        // Appel du son à la création du manekiNeko
        this.leJeu.partirSonSFX('antagoniste_creation');
        this.laMinuterieArreterBruitCreation = window.setInterval(this.arreterBruitCreation.bind(this), 1500);
    }

    public dessiner():void {
        window.lib.mcantagonistesClipManekiNeko.call(this);
        this.frameBounds = window.lib.mcantagonistesClipManekiNeko.prototype.frameBounds;
    }

    private arreterBruitCreation():void {
        // arret du son de création
        window.clearInterval(this.laMinuterieArreterBruitCreation);
        this.laMinuterieArreterBruitCreation = null;
        this.leJeu.arreterSonSFX('antagoniste_creation');
    }

    // *************************************************************************************************************
    // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
    // *************************************************************************************************************
    protected changerEtatVisuelSelonNiveau():void {
        if (this.leNumNiveau==2) {
            // Mise à zéro pour la tête de lecture des sous clips, permettant de modifier sans bogue avec gotoAndStop
            // ** Effectuée ici plutôt que dans le constructeur,
            // ** puisque la méthode est appelée dans le constructeur d'ObjetMobile, qui s'exécute APRÈS
            this.miseAZeroTetesLectureSousClips();

            this['cycleMarche']['ombre'].gotoAndStop('foncee');
            this['etatTouche']['ombre'].gotoAndStop('foncee');
            this['etatTombe']['ombre'].gotoAndStop('foncee');
        }
    }

    private miseAZeroTetesLectureSousClips():void {
        this['cycleMarche'].gotoAndStop(0);
        this['cycleMarche']['ombre'].gotoAndStop(0);
        this['cycleMarche'].gotoAndPlay(0);

        this['etatTouche'].gotoAndStop(0);
        this['etatTouche']['ombre'].gotoAndStop(0);
        this['etatTouche'].gotoAndPlay(0);

        this['etatTombe'].gotoAndStop(0);
        this['etatTombe']['ombre'].gotoAndStop(0);
        this['etatTombe'].gotoAndPlay(0);
    }


    // *************************************************************************************************************
    // GESTION COLLISION AVEC AVATAR +
    // *************************************************************************************************************

    public gererCollisionAvecAvatar():void {
        this.avatarKoi.gererPointsVie();
    }

    // *************************************************************************************************************
    // GESTION COLLISION AVEC PROJECTILE
    // *************************************************************************************************************

    public retournerManekiNekoTouche():boolean {
        return this.manekiNekoEstTouche;
    }

    public changerEtatToucheManekiNeko():void {
        this.manekiNekoEstTouche =! this.manekiNekoEstTouche;
    }
    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    public retournerY():number {
        return this.y;
    }

    public gererFinScene():void {
        if (this.x < -50) {
            this.leJeu.supprimerManekiNeko(this);
        }

        if (this.manekiNekoToucheProjectile == true) {
            this.leJeu.partirSonSFX('contact_projectile');
            this.faireAnimationTouche();
            this.manekiNekoToucheProjectile = false;
        }
    }

    public debuterMortManekiNeko():void {
        this.manekiNekoToucheProjectile = true;
    }

    private faireAnimationTouche():void {
        this.gotoAndStop('etatTouche');
        this.leJeu.partirSonSFX('antagoniste_touche');
        this.laMinuterieMortManekiNeko = window.setInterval(this.faireAnimationMort.bind(this), 1000);
    }

    private faireAnimationMort():void {
        window.clearInterval(this.laMinuterieMortManekiNeko);
        this.laMinuterieMortManekiNeko = null;
        this.gotoAndStop('etatTombe');

        this.leJeu.arreterSonSFX('contact_projectile');
        this.leJeu.arreterSonSFX('antagoniste_touche');
        this.laMinuterieMortManekiNeko = window.setInterval(this.detruireManekiNeko.bind(this), 1000);
    }

    private detruireManekiNeko():void {
        window.clearInterval(this.laMinuterieMortManekiNeko);
        this.laMinuterieMortManekiNeko = null;
        for(let intCpt:number=10; intCpt>=0; intCpt--) {
            this.alpha = this.alpha - 0.1;
            if (this.alpha <= 0) {
                this.leJeu.supprimerManekiNeko(this);
            }
        }
    }

    public supprimerManekiNeko():void {
        this.removeEventListener("tick", this.gererFinScene_lier);

        if (this.laMinuterieMortManekiNeko != null) {
            window.clearInterval(this.laMinuterieMortManekiNeko);
            this.laMinuterieMortManekiNeko = null;
        }

        if (this.laMinuterieArreterBruitCreation != null) {
            window.clearInterval(this.laMinuterieArreterBruitCreation);
            this.laMinuterieArreterBruitCreation = null;
        }

        this.supprimerObjetCollision();
    }
}