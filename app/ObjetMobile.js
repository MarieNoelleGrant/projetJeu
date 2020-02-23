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
    var ObjetMobile = (function (_super) {
        __extends(ObjetMobile, _super);
        function ObjetMobile(refStage, unX, unY, uneVitesse, unSens, refNumNiveau) {
            var _this = _super.call(this, refStage, unX, unY) || this;
            _this.vitesse = null;
            _this.sens = null;
            _this.bouger_lier = null;
            _this.leNumNiveau = null;
            _this.laMinuterieFinScene = null;
            _this.gererFinScene_lier = null;
            _this.pixelsParSeconde = 30;
            _this.vitesse = uneVitesse;
            _this.sens = unSens;
            _this.leNumNiveau = refNumNiveau;
            _this.bouger_lier = _this.bouger.bind(_this);
            _this.addEventListener("tick", _this.bouger_lier);
            _this.laMinuterieFinScene = window.setInterval(_this.gererFinScene.bind(_this), 1000 / 30);
            _this.changerEtatVisuelSelonNiveau();
            return _this;
        }
        // *************************************************************************************************************
        // DÉPLACEMENT
        // *************************************************************************************************************
        ObjetMobile.prototype.bouger = function (evenement) {
            this.x = this.x + ((evenement.delta / 1000) * this.pixelsParSeconde) * this.vitesse * this.sens;
            //this.x = this.x + this.vitesse * this.sens;
            this.gererFinScene();
        };
        ObjetMobile.prototype.supprimerObjetMobile = function () {
            this.removeEventListener("tick", this.bouger_lier);
            window.clearInterval(this.laMinuterieFinScene);
            this.laMinuterieFinScene = null;
            this.supprimerObjetVisible();
        };
        return ObjetMobile;
    }(ObjetVisible_1.ObjetVisible));
    exports.ObjetMobile = ObjetMobile;
});
//# sourceMappingURL=ObjetMobile.js.map