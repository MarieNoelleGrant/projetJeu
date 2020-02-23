var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./ObjetVisible"], function (require, exports, ObjetVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GaugeAir = (function (_super) {
        __extends(GaugeAir, _super);
        function GaugeAir(refStage, unX, unY, refAvatar) {
            var _this = _super.call(this, refStage, unX, unY) || this;
            _this.intCptAir = 0;
            _this.refMinuterieAir = null;
            _this.lAvatarKoi = null;
            // Cycle de plus ou moins 1minute = intervales de 1670ms
            _this.refMinuterieAir = window.setInterval(_this.diminuerQuantiteAir.bind(_this), 2505);
            _this.lAvatarKoi = refAvatar;
            return _this;
        }
        GaugeAir.prototype.dessiner = function () {
            window.lib.mccompteursClipGaugeAir.call(this);
            this.frameBounds = window.lib.mccompteursClipGaugeAir.prototype.frameBounds;
        };
        GaugeAir.prototype.diminuerQuantiteAir = function () {
            if (this.intCptAir <= 36) {
                this.intCptAir = this.intCptAir + 1;
                this['gauge_air_minuterie'].gotoAndStop(this.intCptAir);
                if (this.intCptAir == 36) {
                    window.clearInterval(this.refMinuterieAir);
                    this.changerEtatVisuelGaugeAir();
                    console.log("*** AH NON! KOI A MANQUÉ D'AIR... ***");
                    // *** APPELER LA MÉTHODE POUR LA FIN DU JEU - PARTIE PERDUE
                    this.lAvatarKoi.debuterAnimationMortKoi();
                }
            }
        };
        GaugeAir.prototype.changerEtatVisuelGaugeAir = function () {
            this.gotoAndStop('gauge_vide');
        };
        GaugeAir.prototype.supprimerGaugeAir = function () {
            if (this.refMinuterieAir != null) {
                window.clearInterval(this.refMinuterieAir);
                this.refMinuterieAir = null;
            }
            this.supprimerObjetVisible();
        };
        return GaugeAir;
    }(ObjetVisible_1.ObjetVisible));
    exports.GaugeAir = GaugeAir;
});
//# sourceMappingURL=GaugeAir.js.map