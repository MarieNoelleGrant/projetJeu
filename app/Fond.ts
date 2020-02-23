import {ObjetMobile} from "./ObjetMobile";

export class Fond extends ObjetMobile {

    public constructor(refStage:createjs.Stage, unX:number, unY:number, uneVitesse:number, refNumNiveau:number, unSens:number) {
        super(refStage, unX, unY, uneVitesse, unSens, refNumNiveau);
    }

    public dessiner():void {
        window.lib.mcdecorsdefilantClipFond.call(this);
        this.frameBounds = window.lib.mcdecorsdefilantClipFond.prototype.frameBounds;
    }

    // *************************************************************************************************************
    // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
    // *************************************************************************************************************
    public changerEtatVisuelSelonNiveau():void {
        // *** FAIRE UN SWITCH SI PLUS QUE DEUX NIVEAUX! ***
        if (this.leNumNiveau == 2) {
            this.gotoAndStop('niveau2');
        }
    }

    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    public gererFinScene():void {
        // vide puisqu'elle n'est pas pertinente dans ce contexte, décor défile tout au long du niveau.
    };


    public supprimerFond():void {
        this.supprimerObjetMobile();
    }
}
