import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
    }
    getFile(path) {
        return this.http.get(path);
    }
};
ConfigService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Inject(HttpClient))
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map