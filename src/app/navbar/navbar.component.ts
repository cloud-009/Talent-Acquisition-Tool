import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsedNav!: boolean;
  mobileQuery!: MediaQueryList;

  private _mobileQueryListener: (() => void) | undefined;

  constructor(private changeRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.getMediaMatched();
  }


  ngOnInit(): void {
    //
  }

  getMediaMatched() {
    this.mobileQuery = this.media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => this.changeRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

}
