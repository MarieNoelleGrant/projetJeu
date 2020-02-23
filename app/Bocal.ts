import {Jeu} from "./Jeu";
import {ObjetMobile} from "./ObjetMobile";

export class Bocal extends ObjetMobile {
    private leJeu:Jeu = null;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, uneVitesse:number, refNumNiveau:number, unSens:number, refJeu:Jeu) {
        super(refStage, unX, unY, uneVitesse, unSens, refNumNiveau);

        this.leJeu = refJeu;
    }

    public dessiner():void {
        window.lib.mcdecorsmobileClipBocal.call(this);
        this.frameBounds = window.lib.mcdecorsmobileClipBocal.prototype.frameBounds;
    }

    // *************************************************************************************************************
    // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
    // *************************************************************************************************************
    public changerEtatVisuelSelonNiveau():void {
        if (this.leNumNiveau == 2) {
            this.gotoAndStop('niveau2');
        }
    }

    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    public gererFinScene():void {
        if (this.x<0) {
            this.leJeu.supprimerBocal();
        }
    };


    public supprimerBocal():void {
        this.supprimerObjetMobile();
    }
}
