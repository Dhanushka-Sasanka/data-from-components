import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  servers = [
    { serverType: 'server', serverName: 'dhanushka', serverContent: "this is it" },
    { serverType: 'blueprint', serverName: 'ghosty', serverContent: "this is blueprinted of server" },
    { serverType: 'server', serverName: 'super mario', serverContent: "this is the eternal server" }
  ];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    console.log('onserverAdded');
    console.log(serverData);
    this.servers.push({
      serverType: 'server',
      serverName: serverData.serverName,
      serverContent: serverData.serverContent
    });

  }
  onBlueprintAdded() {
    console.log(15);
  }
}
