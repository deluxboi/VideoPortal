"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var video_service_1 = require("./video.service");
var index_1 = require("../_services/index");
//Videos Component
var VideoComponent = (function () {
    function VideoComponent(_videoService, UserService) {
        this._videoService = _videoService;
        this.UserService = UserService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    VideoComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var _this = this;
        this._videoService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        this.loadAllUsers();
    };
    VideoComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.UserService.get().subscribe(function (users) { _this.users = users; });
    };
    VideoComponent.prototype.addVideo = function () {
        this.newVideo = {
            name: this.name,
            description: this.description,
            url: this.url,
            rating: this.rating
        };
        this._videoService.addVideo(this.newVideo);
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/videos/video.component.html',
        styleUrls: ['app/videos/video.component.css']
    }),
    __metadata("design:paramtypes", [video_service_1.VideoService,
        index_1.UserService])
], VideoComponent);
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map