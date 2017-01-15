import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationExtras, ActivatedRoute, UrlSegment } from '@angular/router';
import { LayoutBarComponent } from '../layout-bar/layout-bar.component';

@Component({
  selector: 'layout-body',
  templateUrl: './layout-body.component.html',
  styleUrls: ['./layout-body.component.css'],
  animations: [
    trigger('sideBarVisibility', [
            state('expanded', style({ width: '300px' })),
            state('collapsed', style({ width: '0' })),
            transition('collapsed => expanded', animate('500ms ease-in')),
            transition('expanded => collapsed', animate('500ms ease-out'))
        ])
  ]
})
export class LayoutBodyComponent implements OnInit {
  previousPath: string;
  currentPath: string;
  state: string = 'expanded';
  expanded: boolean = true;
  state2: string = '';
  state3: string = 'fadeIn';
  showMainSideMenu1 = true;
  showMainSideMenu2 = false;
  showMainSideMenu3 = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        //this._accountService.showSpinner = true;
        console.log("appComponent.ngInit.this._router.events.subscribe NavigationStart-event:", event);
        this.onPathChange(event.url);
      }
      if (event instanceof NavigationEnd) {
        //this._accountService.showSpinner = false;
        console.log("appComponent.ngInit.this._router.events.subscribe NavigationEnd-event:", event);
        this.onPathChange(event.url);
      }
    });
  }

  onAnimDone(event) {
    console.log("onAnimDone:", event);
            // this.showMainSideMenu2 = true;
            // this.state2 = "show";

  }
  private onPathChange(path: string) {
        console.log("app.component onPathChange current path:", path);
        if (this.currentPath) {
            this.previousPath = this.currentPath;
            console.log("app.component onPathChange previous path:", this.previousPath);
        }

        this.currentPath = path;

        if (this.currentPath.startsWith("/home") || this.currentPath === "/") {
            this.showMainSideMenu1 = true;
            this.state = "expanded";
            this.expanded = true;
        }
        else {
            this.showMainSideMenu1 = false;
            this.state = "collapsed";
            this.expanded = false;
        }
        // if (this.currentPath.startsWith("/entry") || this.currentPath === "/") {
        //     this.showMainSideMenu2 = true;
        //     this.state2 = "show";
        // }
        // else {
        //     this.showMainSideMenu2 = false;
        //     this.state2 = "hide";
        // }

    }
}
