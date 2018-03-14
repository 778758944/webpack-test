/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ali_dingtalk_idl_ts_dist_dingpan__ = __webpack_require__(2);


Object(__WEBPACK_IMPORTED_MODULE_1__ali_dingtalk_idl_ts_dist_dingpan__["a" /* CSpace_getToken */])().catch(() => {});

function component() {
	var element = document.createElement('pre');

	element.innerHTML = [
		"Hello webpack!",
		"5 cubed is equal to " + Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* cube */])(5)
	].join('\n\n');

	return element;
}

document.body.appendChild(component());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export square */
/* harmony export (immutable) */ __webpack_exports__["a"] = cube;
function square(x) {
	return x * x;
}

function cube(x) {
	return x * x * x;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CSpaceAcl_listAcl */
/* unused harmony export CSpaceAcl_createAcl */
/* unused harmony export CSpaceAcl_addMember */
/* unused harmony export CSpaceAcl_deleteMember */
/* unused harmony export CSpaceAcl_validateAction */
/* unused harmony export CSpaceAcl_setReadOnly */
/* unused harmony export CSpaceAcl_isReadOnly */
/* unused harmony export DpRecentOperation_listRecentOperation */
/* unused harmony export DpOrg_getOrgConversations */
/* unused harmony export CSpace_listDentry */
/* unused harmony export CSpace_listFiles */
/* unused harmony export CSpace_listSpace */
/* unused harmony export CSpace_addDentry */
/* unused harmony export CSpace_updateDentry */
/* unused harmony export CSpace_renameDentry */
/* unused harmony export CSpace_deleteDentry */
/* unused harmony export CSpace_transferDentry */
/* unused harmony export CSpace_infoDentry */
/* unused harmony export CSpace_search */
/* unused harmony export CSpace_searchByTypes */
/* unused harmony export CSpace_preview */
/* unused harmony export CSpace_downloadAuth */
/* unused harmony export CSpace_uploadAuth */
/* unused harmony export CSpace_packageInfo */
/* unused harmony export CSpace_infoDeletedDentry */
/* unused harmony export CSpace_getTempSpace */
/* unused harmony export CSpace_listIndustryOperationRelationByUid */
/* unused harmony export CSpace_updateSpaceExtensionById */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSpace_getToken; });
/* unused harmony export CSpace_listUidsByFileIdAndAccessType */
/* unused harmony export CSpace_getConversationSpace */
/* unused harmony export CSpace_listRecentFile */
/* unused harmony export CSpace_getDingSpace */
/* unused harmony export CSpace_createShare */
/* unused harmony export CSpace_infoShare */
/* unused harmony export CSpace_saveShare */
/* unused harmony export CSpace_listShare */
/* unused harmony export CSpace_deleteShare */
/* unused harmony export CSpace_convertShareToDentry */
/* unused harmony export CSpace_getShareDownloadUrl */
/* unused harmony export CSpace_listShareDentry */
/* unused harmony export CSpace_setOrgGroupSyncStatus */
/* unused harmony export CSpace_getOrgGroupSyncStatus */
/* unused harmony export CSpace_fullSync */
/* unused harmony export CSpace_incrementSync */
/* unused harmony export CSpace_listSyncSpace */
/* unused harmony export CSpace_getDownloadUrl */
/* unused harmony export CSpace_getIndustryOperationUrl */
/* unused harmony export CSpace_sendCSpaceMessage */
/* unused harmony export CSpace_infoDentryForKnowledge */
/* unused harmony export CSpace_play */
/* unused harmony export CSpace_createHomeWork */
/* unused harmony export CSpace_infoHomeWork */
/* unused harmony export CSpace_homeWorkAuthAdd */
/* unused harmony export CSpace_infoMediaInfo */
/* unused harmony export CSpace_finishIndustryGuide */
/* unused harmony export CSpace_incrReadCount */
/* unused harmony export CSpace_addDentryByBatch */
/* unused harmony export CSpace_getDentryTemplate */
/* unused harmony export OnlineDocI_addEditor */
/* unused harmony export OnlineDocI_createDocForOnline */
/* unused harmony export OnlineDocI_saveOnlineDoc */
/* unused harmony export OnlineDocI_getMemberList */
/* unused harmony export OnlineDocI_listUnEdit */
/* unused harmony export OnlineDocI_listEdit */
/* unused harmony export OnlineDocI_getCooperatorCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__ = __webpack_require__(3);

var CSpaceAcl_listAcl = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpaceAcl/listAcl', headers, [param]);
};
var CSpaceAcl_createAcl = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpaceAcl/createAcl', headers, [param]);
};
var CSpaceAcl_addMember = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpaceAcl/addMember', headers, [param]);
};
var CSpaceAcl_deleteMember = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpaceAcl/deleteMember', headers, [param]);
};
var CSpaceAcl_validateAction = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpaceAcl/validateAction', headers, [param]);
};
var CSpaceAcl_setReadOnly = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpaceAcl/setReadOnly', headers, [param]);
};
var CSpaceAcl_isReadOnly = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpaceAcl/isReadOnly', headers, [param]);
};
var DpRecentOperation_listRecentOperation = function (offSet, length, direction, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/DpRecentOperation/listRecentOperation', headers, [offSet, length, direction]);
};
var DpOrg_getOrgConversations = function (orgId, start, size, byOrder, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/DpOrg/getOrgConversations', headers, [orgId, start, size, byOrder]);
};
var CSpace_listDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listDentry', headers, [param]);
};
var CSpace_listFiles = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listFiles', headers, [param]);
};
var CSpace_listSpace = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listSpace', headers, [param]);
};
var CSpace_addDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/addDentry', headers, [param]);
};
var CSpace_updateDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/updateDentry', headers, [param]);
};
var CSpace_renameDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/renameDentry', headers, [param]);
};
var CSpace_deleteDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/deleteDentry', headers, [param]);
};
var CSpace_transferDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/transferDentry', headers, [param]);
};
var CSpace_infoDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/infoDentry', headers, [param]);
};
var CSpace_search = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/search', headers, [param]);
};
var CSpace_searchByTypes = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/searchByTypes', headers, [param]);
};
var CSpace_preview = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/preview', headers, [param]);
};
var CSpace_downloadAuth = function (aclContent, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/downloadAuth', headers, [aclContent]);
};
var CSpace_uploadAuth = function (mediaId, aclContent, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/uploadAuth', headers, [mediaId, aclContent]);
};
var CSpace_packageInfo = function (packageId, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/packageInfo', headers, [packageId]);
};
var CSpace_infoDeletedDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/infoDeletedDentry', headers, [param]);
};
var CSpace_getTempSpace = function (headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getTempSpace', headers, []);
};
var CSpace_listIndustryOperationRelationByUid = function (headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listIndustryOperationRelationByUid', headers, []);
};
var CSpace_updateSpaceExtensionById = function (id, extension, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/updateSpaceExtensionById', headers, [id, extension]);
};
var CSpace_getToken = function (headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getToken', headers, []);
};
var CSpace_listUidsByFileIdAndAccessType = function (dentryId, spaceId, accessType, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listUidsByFileIdAndAccessType', headers, [dentryId, spaceId, accessType]);
};
var CSpace_getConversationSpace = function (convId, type, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getConversationSpace', headers, [convId, type]);
};
var CSpace_listRecentFile = function (headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listRecentFile', headers, []);
};
var CSpace_getDingSpace = function (dingId, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getDingSpace', headers, [dingId]);
};
var CSpace_createShare = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/createShare', headers, [param]);
};
var CSpace_infoShare = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/infoShare', headers, [param]);
};
var CSpace_saveShare = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/saveShare', headers, [param]);
};
var CSpace_listShare = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listShare', headers, [param]);
};
var CSpace_deleteShare = function (shortLinks, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/deleteShare', headers, [shortLinks]);
};
var CSpace_convertShareToDentry = function (shortLink, password, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/convertShareToDentry', headers, [shortLink, password]);
};
var CSpace_getShareDownloadUrl = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getShareDownloadUrl', headers, [param]);
};
var CSpace_listShareDentry = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listShareDentry', headers, [param]);
};
var CSpace_setOrgGroupSyncStatus = function (spaceId, status, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/setOrgGroupSyncStatus', headers, [spaceId, status]);
};
var CSpace_getOrgGroupSyncStatus = function (spaceId, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getOrgGroupSyncStatus', headers, [spaceId]);
};
var CSpace_fullSync = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/fullSync', headers, [param]);
};
var CSpace_incrementSync = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/incrementSync', headers, [param]);
};
var CSpace_listSyncSpace = function (headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/listSyncSpace', headers, []);
};
var CSpace_getDownloadUrl = function (spaceId, dentryId, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getDownloadUrl', headers, [spaceId, dentryId]);
};
var CSpace_getIndustryOperationUrl = function (orgId, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getIndustryOperationUrl', headers, [orgId]);
};
var CSpace_sendCSpaceMessage = function (spaceId, dentryId, cid, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/sendCSpaceMessage', headers, [spaceId, dentryId, cid]);
};
var CSpace_infoDentryForKnowledge = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/infoDentryForKnowledge', headers, [param]);
};
var CSpace_play = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/play', headers, [param]);
};
var CSpace_createHomeWork = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/createHomeWork', headers, [param]);
};
var CSpace_infoHomeWork = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/infoHomeWork', headers, [param]);
};
var CSpace_homeWorkAuthAdd = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/homeWorkAuthAdd', headers, [param]);
};
var CSpace_infoMediaInfo = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/infoMediaInfo', headers, [param]);
};
var CSpace_finishIndustryGuide = function (headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/finishIndustryGuide', headers, []);
};
var CSpace_incrReadCount = function (spaceId, fileId, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/incrReadCount', headers, [spaceId, fileId]);
};
var CSpace_addDentryByBatch = function (paramList, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/addDentryByBatch', headers, [paramList]);
};
var CSpace_getDentryTemplate = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/CSpace/getDentryTemplate', headers, [param]);
};
var OnlineDocI_addEditor = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/OnlineDocI/addEditor', headers, [param]);
};
var OnlineDocI_createDocForOnline = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/OnlineDocI/createDocForOnline', headers, [param]);
};
var OnlineDocI_saveOnlineDoc = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/OnlineDocI/saveOnlineDoc', headers, [param]);
};
var OnlineDocI_getMemberList = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/OnlineDocI/getMemberList', headers, [param]);
};
var OnlineDocI_listUnEdit = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/OnlineDocI/listUnEdit', headers, [param]);
};
var OnlineDocI_listEdit = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/OnlineDocI/listEdit', headers, [param]);
};
var OnlineDocI_getCooperatorCount = function (param, headers) {
    if (headers === void 0) { headers = {}; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_rpc_request__["a" /* sendMsg */])('/r/Adaptor/OnlineDocI/getCooperatorCount', headers, [param]);
};
//# sourceMappingURL=dingpan.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendMsg; });
var rpc;
function init(_rpc) {
    rpc = _rpc;
}
var sendMsg = function (url, headers, body) {
    if (!rpc) {
        throw new Error('rpc is null, must init rpc first');
    }
    else {
        return rpc.sendMsg(url, headers, body);
    }
};
//# sourceMappingURL=rpc-request.js.map

/***/ })
/******/ ]);