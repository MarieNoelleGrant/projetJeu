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
define(["require", "exports", "./ObjetMobile"], function (require, exports, ObjetMobile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bocal = (function (_super) {
        __extends(Bocal, _super);
        function Bocal(refStage, unX, unY, uneVitesse, refNumNiveau, unSens, refJeu) {
            var _this = _super.call(this, refStage, unX, unY, uneVitesse, unSens, refNumNiveau) || this;
            _this.leJeu = null;
            _this.leJeu = refJeu;
            return _this;
        }
        Bocal.prototype.dessiner = function () {
            window.lib.mcdecorsmobileClipBocal.call(this);
            this.frameBounds = window.lib.mcdecorsmobileClipBocal.prototype.frameBounds;
        };
        // *************************************************************************************************************
        // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
        // *************************************************************************************************************
        Bocal.prototype.changerEtatVisuelSelonNiveau = function () {
            if (this.leNumNiveau == 2) {
                this.gotoAndStop('niveau2');
            }
        };
        // *************************************************************************************************************
        // FIN SCÈNE + SUPPRESSION
        // *************************************************************************************************************
        Bocal.prototype.gererFinScene = function () {
            if (this.x < 0) {
                this.leJeu.supprimerBocal();
            }
        };
        ;
        Bocal.prototype.supprimerBocal = function () {
            this.supprimerObjetMobile();
        };
        return Bocal;
    }(ObjetMobile_1.ObjetMobile));
    exports.Bocal = Bocal;
});
//# sourceMappingURL=Bocal.js.map