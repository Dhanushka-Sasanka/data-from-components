import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // for the types that we are using in our server-element html page

  @Input()
  // @Input('svrElement')  
  // we can also declare a name for the @Input decarator
  // then we should call this serversElement using svrElement name in the app.html page
    serversElement: { serverType: string, serverName:string, serverContent: string };


  constructor() { }

  ngOnInit() {
    console.log('serverElement');
  }

}
