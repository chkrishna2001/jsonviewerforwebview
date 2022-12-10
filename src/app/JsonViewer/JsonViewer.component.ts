import { Component, Input, OnInit } from '@angular/core';
import { WebViewMessage } from '../models/WebViewMessage';

@Component({
  selector: 'app-JsonViewer',
  templateUrl: './JsonViewer.component.html',
  styleUrls: ['./JsonViewer.component.css']
})
export class JsonViewerComponent implements OnInit {
  @Input() componentPrefix: string = "";
  @Input() jsonData:any;
  constructor() { }

  ngOnInit() {
    
  }

}
