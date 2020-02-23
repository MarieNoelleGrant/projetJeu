import {ObjetMobile} from "./ObjetMobile";

export class Chaise extends ObjetMobile {

    public constructor(refStage:createjs.Stage, unX:number, unY:number, uneVitesse:number, unSens:number, refNumeroNiveau:number) {
        super(refStage, unX, unY, uneVitesse, unSens, refNumeroNiveau);
    }

    public dessiner():void {
        window.lib.mcdecorsmobileClipChaise.call(this);
        this.frameBounds = window.lib.mcdecorsmobileClipChaise.prototype.frameBounds;
    }

    public changerEtatVisuelSelonNiveau():void {
        // vide puisque c'est la seule méthode qui n'est pas nécessaire dans Chaise (n'existe pas dans le niveau 2)
    }

    public gererFinScene():void {
        if (this.x <= 0) {
            this.x = 1150;
        }
    }

    public supprimerChaise():void {
        this.supprimerObjetMobile();
    }
}
