import {ObjetVisible} from "./ObjetVisible";

export class Table extends ObjetVisible {
    private numeroNiveau:number = null;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, refNumNiveau:number) {
        super(refStage, unX, unY);
        this.numeroNiveau = refNumNiveau;

        this.changerEtatVisuelSelonNiveau();
    }

    public dessiner():void {
        window.lib.mcdecorsfixeClipTable.call(this);
        this.frameBounds = window.lib.mcdecorsfixeClipTable.prototype.frameBounds;
    }

    private changerEtatVisuelSelonNiveau():void {
        if (this.numeroNiveau == 2) {
            this.gotoAndStop('niveau2');
        }
    }

    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    public supprimerTable():void {
        this.supprimerObjetVisible();
    }
}