import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.css'],
})
export class ClientsViewComponent implements OnInit {
  public clients!: Client[];

  constructor(private clientSvc: ClientService) {}

  ngOnInit(): void {
    this.clientSvc
      .getAll()
      .subscribe((data: Client[]) => (this.clients = data));
  }
}
