import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';

  allowNewServer = false;
  serverCreationStatus = 'No Server Creation';

  serverName = '';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } , 2000);
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is Created ';
  }

  // onUpdateServerName(e: any) {
  //   this.serverName  = e.target.value;
  // }
  onUpdateServerName(e: Event) {
    this.serverName  = (e.target as HTMLInputElement).value;
  }
}
