import {ObjetVisible} from "./ObjetVisible";
import {Koi} from "./Koi";

export class GaugeAir extends ObjetVisible {
    private intCptAir:number = 0;
    private refMinuterieAir:number = null;
    private lAvatarKoi:Koi = null;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, refAvatar:Koi) {
        super(refStage, unX, unY);
        // Cycle de plus ou moins 1minute = intervales de 1670ms
        this.refMinuterieAir = window.setInterval(this.diminuerQuantiteAir.bind(this), 2505);
        this.lAvatarKoi = refAvatar;
    }

    public dessiner():void {
        window.lib.mccompteursClipGaugeAir.call(this);
        this.frameBounds = window.lib.mccompteursClipGaugeAir.prototype.frameBounds;
    }

    private diminuerQuantiteAir():void {
        if (this.intCptAir<=36) {
            this.intCptAir = this.intCptAir + 1;
            this['gauge_air_minuterie'].gotoAndStop(this.intCptAir);
            if (this.intCptAir==36) {
                window.clearInterval(this.refMinuterieAir);
                this.changerEtatVisuelGaugeAir();
                console.log("*** AH NON! KOI A MANQUÉ D'AIR... ***");
                // *** APPELER LA MÉTHODE POUR LA FIN DU JEU - PARTIE PERDUE
                this.lAvatarKoi.debuterAnimationMortKoi();
            }
        }
    }

    private changerEtatVisuelGaugeAir():void {
        this.gotoAndStop('gauge_vide');
    }

    public supprimerGaugeAir():void {
        if (this.refMinuterieAir!=null) {
            window.clearInterval(this.refMinuterieAir);
            this.refMinuterieAir = null;
        }
        this.supprimerObjetVisible();
    }
}