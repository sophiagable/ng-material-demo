import { Component , OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-material-demo';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer)
    {}
    ngOnInit(){
      this.matIconRegistry.addSvgIconInNamespace(
        'custom-svg',
        'angularicon',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg')
      );

      // 加入 fontawesome，但要加入 CDN
      this.matIconRegistry.registerFontClassAlias('fontawesome','fa')
    }
}
