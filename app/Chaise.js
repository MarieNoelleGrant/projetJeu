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
    var Chaise = (function (_super) {
        __extends(Chaise, _super);
        function Chaise(refStage, unX, unY, uneVitesse, unSens, refNumeroNiveau) {
            return _super.call(this, refStage, unX, unY, uneVitesse, unSens, refNumeroNiveau) || this;
        }
        Chaise.prototype.dessiner = function () {
            window.lib.mcdecorsmobileClipChaise.call(this);
            this.frameBounds = window.lib.mcdecorsmobileClipChaise.prototype.frameBounds;
        };
        Chaise.prototype.changerEtatVisuelSelonNiveau = function () {
            // vide puisque c'est la seule méthode qui n'est pas nécessaire dans Chaise (n'existe pas dans le niveau 2)
        };
        Chaise.prototype.gererFinScene = function () {
            if (this.x <= 0) {
                this.x = 1150;
            }
        };
        Chaise.prototype.supprimerChaise = function () {
            this.supprimerObjetMobile();
        };
        return Chaise;
    }(ObjetMobile_1.ObjetMobile));
    exports.Chaise = Chaise;
});
//# sourceMappingURL=Chaise.js.map