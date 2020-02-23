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
    var Fond = (function (_super) {
        __extends(Fond, _super);
        function Fond(refStage, unX, unY, uneVitesse, refNumNiveau, unSens) {
            return _super.call(this, refStage, unX, unY, uneVitesse, unSens, refNumNiveau) || this;
        }
        Fond.prototype.dessiner = function () {
            window.lib.mcdecorsdefilantClipFond.call(this);
            this.frameBounds = window.lib.mcdecorsdefilantClipFond.prototype.frameBounds;
        };
        // *************************************************************************************************************
        // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
        // *************************************************************************************************************
        Fond.prototype.changerEtatVisuelSelonNiveau = function () {
            // *** FAIRE UN SWITCH SI PLUS QUE DEUX NIVEAUX! ***
            if (this.leNumNiveau == 2) {
                this.gotoAndStop('niveau2');
            }
        };
        // *************************************************************************************************************
        // FIN SCÈNE + SUPPRESSION
        // *************************************************************************************************************
        Fond.prototype.gererFinScene = function () {
            // vide puisqu'elle n'est pas pertinente dans ce contexte, décor défile tout au long du niveau.
        };
        ;
        Fond.prototype.supprimerFond = function () {
            this.supprimerObjetMobile();
        };
        return Fond;
    }(ObjetMobile_1.ObjetMobile));
    exports.Fond = Fond;
});
//# sourceMappingURL=Fond.js.map