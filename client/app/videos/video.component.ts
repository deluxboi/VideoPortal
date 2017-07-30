import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from './video';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

//Videos Component
@Component({
    templateUrl: 'app/videos/video.component.html',
    styleUrls: ['app/videos/video.component.css']
})
export class VideoComponent implements OnInit{

    currentUser: User;
    users: User[] = [];

    private videos:Video[];
    private name;
    private description;
    private url;
    private rating;
    private newVideo;

    constructor(
        private _videoService: VideoService,
        private UserService: UserService
        ){
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
        this._videoService.getVideos().subscribe(videos => {
            this.videos = videos;
        });

        this.loadAllUsers();
    }

    private loadAllUsers() {
        this.UserService.get().subscribe(users => { this.users = users; });
    }

    addVideo(){
        this.newVideo = {
            name: this.name,
            description: this.description,
            url: this.url,
            rating: this.rating
        }

        this._videoService.addVideo(this.newVideo);
    }
}