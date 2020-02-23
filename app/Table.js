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
    var Table = (function (_super) {
        __extends(Table, _super);
        function Table(refStage, unX, unY, refNumNiveau) {
            var _this = _super.call(this, refStage, unX, unY) || this;
            _this.numeroNiveau = null;
            _this.numeroNiveau = refNumNiveau;
            _this.changerEtatVisuelSelonNiveau();
            return _this;
        }
        Table.prototype.dessiner = function () {
            window.lib.mcdecorsfixeClipTable.call(this);
            this.frameBounds = window.lib.mcdecorsfixeClipTable.prototype.frameBounds;
        };
        Table.prototype.changerEtatVisuelSelonNiveau = function () {
            if (this.numeroNiveau == 2) {
                this.gotoAndStop('niveau2');
            }
        };
        // *************************************************************************************************************
        // FIN SCÈNE + SUPPRESSION
        // *************************************************************************************************************
        Table.prototype.supprimerTable = function () {
            this.supprimerObjetVisible();
        };
        return Table;
    }(ObjetVisible_1.ObjetVisible));
    exports.Table = Table;
});
//# sourceMappingURL=Table.js.map