/**
 * Created by mrouleau on 2017-02-24.
 */
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
define(["require", "exports", "./Sons"], function (require, exports, Sons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SFX = (function (_super) {
        __extends(SFX, _super);
        function SFX(strUrlson, arrExtAlt, idSon, maxNumber) {
            var _this = _super.call(this, strUrlson, arrExtAlt, idSon, maxNumber, 0) || this;
            //console.log("sonfx");
            // son diminué légèrement pour les effets sonores par programmation
            _this.volume = 0.8;
            return _this;
        }
        SFX.prototype.demarrerSon = function () {
            _super.prototype.demarrerSon.call(this);
        };
        SFX.prototype.arreterSon = function () {
            _super.prototype.arreterSon.call(this);
        };
        return SFX;
    }(Sons_1.Sons));
    exports.SFX = SFX;
});
//# sourceMappingURL=SFX.js.map