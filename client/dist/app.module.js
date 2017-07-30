"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var login_module_1 = require("./LoginComponent/login.module");
var video_module_1 = require("./videos/video.module");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome/welcome.component");
var video_service_1 = require("./videos/video.service");
var md5_1 = require("ts-md5/dist/md5");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            login_module_1.LoginModule,
            video_module_1.VideoModule,
            router_1.RouterModule.forRoot([
                { path: '', component: welcome_component_1.WelcomeComponent }
                // { path: '', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            video_service_1.VideoService,
            md5_1.Md5
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map