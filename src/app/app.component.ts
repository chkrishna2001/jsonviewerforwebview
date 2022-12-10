import { Component, OnInit } from '@angular/core';
import { WebViewMessage } from './models/WebViewMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blazorjsvcomponent';
  messages:WebViewMessage[]=[];
  ngOnInit(){
    if (window && window.chrome && window.chrome.webview) {
      window.chrome.webview.addEventListener('message',(evt:any) =>{
        this.messages = JSON.parse(evt.data);
      });
    }  
  }

}
declare global {
  interface Window {
    chrome: any;
  }
}
