import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

//Login Component
@Component({
    templateUrl: 'app/LoginComponent/login.component.html',
    styleUrls: ['app/LoginComponent/login.component.css']
})
export class LoginComponent {
    model: any = {};
    loading = false;
    returnUrl: '/videos';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['videos']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}