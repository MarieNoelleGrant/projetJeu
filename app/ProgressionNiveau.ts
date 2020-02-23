import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";

export class ProgressionNiveau extends ObjetVisible {
    private laMinuterieProgressionNiveau:number = null;
    private vitesse:number = null;
    private leJeu:Jeu = null;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, uneVitesse:number, refJeu:Jeu) {
        super(refStage, unX, unY);

        this.vitesse = uneVitesse;
        this.leJeu = refJeu;

        this.laMinuterieProgressionNiveau = window.setInterval(this.faireProgresserAvatar.bind(this), 1000);
    }

    public dessiner():void {
        window.lib.mccompteursClipProgressionNiveau.call(this);
        this.frameBounds = window.lib.mccompteursClipProgressionNiveau.prototype.frameBounds;
    }

    // *************************************************************************************************************
    // GESTION PROGRESSION NIVEAU
    // *************************************************************************************************************

    private faireProgresserAvatar():void {
        if (this['progression_niveau_avatar'].x<265) {
            this['progression_niveau_avatar'].x = this['progression_niveau_avatar'].x + this.vitesse;
        }
        else {
            window.clearInterval(this.laMinuterieProgressionNiveau);
            // Appel de la méthode de fin du jeu, niveau réussi
            this.leJeu.demanderEcranNiveauReussi();
        }
    }


    // *************************************************************************************************************
    // GESTION RECUL DE PROGRESSION NIVEAU
    // *************************************************************************************************************

    public faireReculerAvatar():void {
        // 1. Arrêter la progression normale le temps de l'animation de recul
        window.clearInterval(this.laMinuterieProgressionNiveau);

        // 2. L'animation de recul
        this['progression_niveau_avatar'].gotoAndPlay('etat_recul');
        for (let intCpt:number=1; intCpt<=80; intCpt++) {
            if (this['progression_niveau_avatar'].x > 79) {
                this['progression_niveau_avatar'].x = this['progression_niveau_avatar'].x - 0.5;
            }
        }

        // 3. Recréation de la minuterie et retour progression normale
        this.laMinuterieProgressionNiveau = window.setInterval(this.faireProgresserAvatar.bind(this), 1000);
    }


    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    public supprimerProgressionNiveau():void {
        if (this.laMinuterieProgressionNiveau != null) {
            window.clearInterval(this.laMinuterieProgressionNiveau);
            this.laMinuterieProgressionNiveau = null;
        }

        this.supprimerObjetVisible();
    }
}