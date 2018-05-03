import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { SweetDataService } from '../sweet-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminList: Admin[] = [];
  youMissed = false;

  constructor(private data: SweetDataService, private router: Router) { }

  checkAdmin(frm) {
    const authString = frm.value.email + frm.value.password;
    for (let i = 0; i < this.adminList.length; i++) {
      const checker = this.adminList[i].email + this.adminList[i].password;
      if (authString === checker) {
        this.router.navigate(['adminhome']);
      }
    }
    this.youMissed = true;
  }

  ngOnInit() {
    this.data.getAdmins()
    .subscribe(admin => {
      this.adminList = admin;
    });

  }

}
