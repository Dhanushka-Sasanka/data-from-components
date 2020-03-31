import { AppComponent } from './../app.component';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverAdded = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild("serverContentInput",{static:true}) serverInputData:ElementRef;


  constructor() {}
 


  ngOnInit() {

  }

  addServer(inputValue: HTMLInputElement) {
    console.log('addServer start');
    console.log(inputValue.value);
    console.log(this.serverInputData);

    // using ngModel       

    // this.serverAdded.emit({
    //   serverName: this.server_name,
    //   serverContent: this.server_content
    // });

    // using localreference

    this.serverAdded.emit({
      serverName: inputValue.value,
      serverContent: this.serverInputData.nativeElement.value
    });
    console.log('addServer end');

  }
  addBluePrint() {
    console.log(15);
  }

}
