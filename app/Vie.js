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
    var Vie = (function (_super) {
        __extends(Vie, _super);
        function Vie(refStage, unX, unY) {
            return _super.call(this, refStage, unX, unY) || this;
        }
        Vie.prototype.dessiner = function () {
            window.lib.mcviesClipVie.call(this);
            this.frameBounds = window.lib.mcviesClipVie.prototype.frameBounds;
        };
        Vie.prototype.changerEtatVisuelVie = function () {
            this.gotoAndStop('vie_perdue');
        };
        Vie.prototype.supprimerVie = function () {
            this.supprimerObjetVisible();
        };
        return Vie;
    }(ObjetVisible_1.ObjetVisible));
    exports.Vie = Vie;
});
//# sourceMappingURL=Vie.js.map