import { Component, Input } from '@angular/core';

@Component({
  selector: 'org-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.scss']
})
export class WebViewComponent {
  @Input() public src = '';
}
