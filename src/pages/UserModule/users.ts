import { Component } from '@angular/core';
import {UserService} from '../../app/Services/userService';
import { BaseController } from '../Base/basecontroller';

@Component({
  selector: 'users',
  templateUrl: 'users.html'
})
export class UsersPage{
    items:any;
  constructor(private service:UserService,private baseCntrl:BaseController) {
       
  }

ngOnInit(){
 this.getUsers();
}

getUsers()
{
    this.baseCntrl.presentLoading();
    this.baseCntrl.checkNetwork();
    this.service.getUsers().subscribe(response=>{
       this.items=response.results;
    });
    this.baseCntrl.checkNetwork();
}

}