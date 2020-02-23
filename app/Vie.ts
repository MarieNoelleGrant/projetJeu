import {ObjetVisible} from "./ObjetVisible";

export class Vie extends ObjetVisible {
    public constructor(refStage:createjs.Stage, unX:number, unY:number) {
        super(refStage, unX, unY);
    }

    public dessiner():void {
        window.lib.mcviesClipVie.call(this);
        this.frameBounds = window.lib.mcviesClipVie.prototype.frameBounds;
    }

    public changerEtatVisuelVie():void {
        this.gotoAndStop('vie_perdue');
    }

    public supprimerVie():void {
        this.supprimerObjetVisible();
    }
}
