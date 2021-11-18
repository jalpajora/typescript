"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Option 1 (type anotation per property)
const HTTPRequestMethod = {
    GET: 'GET',
    POST: 'POST',
};
// Option 2
// const assertion
const HTTPRequestMethod1 = {
    GET: 'GET',
    POST: 'POST',
};
// Option 4: enum
var HTTPRequestMethodEnum;
(function (HTTPRequestMethodEnum) {
    HTTPRequestMethodEnum["GET"] = "GET";
    HTTPRequestMethodEnum["POST"] = "POST";
})(HTTPRequestMethodEnum || (HTTPRequestMethodEnum = {}));
function fetchJSON(url, method) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, { method });
        return response.json();
    });
}
fetchJSON('https://example.com', HTTPRequestMethodEnum.GET).then(() => {
    console.log('success');
});
