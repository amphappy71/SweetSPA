import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { SweetDataService } from '../sweet-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminList: Admin[] = [];

  constructor(private data: SweetDataService) { }

  checkAdmin() {
    // todo
  }

  ngOnInit() {
    this.data.getAdmins()
    .subscribe(admin => {
      this.adminList = admin;
      console.log(this.adminList[0].email);
      console.log(this.adminList[0].password);
    });

  }

}
