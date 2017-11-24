"use strict";
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./vg-play-pause");
var i2 = require("../../core/services/vg-api");
var styles_VgPlayPause = ["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "];
var RenderType_VgPlayPause = i0.ɵcrt({ encapsulation: 2, styles: styles_VgPlayPause, data: {} });
exports.RenderType_VgPlayPause = RenderType_VgPlayPause;
function View_VgPlayPause_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["aria-label", "play pause button"], ["class", "icon"], ["role", "button"], ["tabindex", "0"]], [[2, "vg-icon-pause", null], [2, "vg-icon-play_arrow", null], [1, "aria-valuetext", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.getState() === "playing"); var currVal_1 = ((_co.getState() === "paused") || (_co.getState() === "ended")); var currVal_2 = _co.ariaValue; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }); }
exports.View_VgPlayPause_0 = View_VgPlayPause_0;
function View_VgPlayPause_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "vg-play-pause", [], null, [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_VgPlayPause_0, RenderType_VgPlayPause)), i0.ɵdid(1, 245760, null, 0, i1.VgPlayPause, [i0.ElementRef, i2.VgAPI], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_VgPlayPause_Host_0 = View_VgPlayPause_Host_0;
var VgPlayPauseNgFactory = i0.ɵccf("vg-play-pause", i1.VgPlayPause, View_VgPlayPause_Host_0, { vgFor: "vgFor" }, {}, []);
exports.VgPlayPauseNgFactory = VgPlayPauseNgFactory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheS1wYXVzZS5uZ2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1wbGF5LXBhdXNlLm5nZmFjdG9yeS50cyIsInZnLXBsYXktcGF1c2UudHMuVmdQbGF5UGF1c2UuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztzRENBQSx1Q0FDUSxNQUFBLDRQQU11QyxLQUFBLHVDQUN2Qyx5REFOSyw2Q0FBZ0QsR0FDaEQsNkVBQThFLElBSTlFLG1CQUFpQyxZQU50QyxZQU11QyxFQUxsQyxTQUFnRCxFQUNoRCxTQUE4RSxFQUk5RSxTQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGkwIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaTAuQ29tcG9uZW50RmFjdG9yeTtcbiIsIlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tcGF1c2VdPVwiZ2V0U3RhdGUoKSA9PT0gJ3BsYXlpbmcnXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1wbGF5X2Fycm93XT1cImdldFN0YXRlKCkgPT09ICdwYXVzZWQnIHx8IGdldFN0YXRlKCkgPT09ICdlbmRlZCdcIlxuICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgYXJpYS1sYWJlbD1cInBsYXkgcGF1c2UgYnV0dG9uXCJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWVcIj5cbiAgICAgICAgPC9kaXY+Il19