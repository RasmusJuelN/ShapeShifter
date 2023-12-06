import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/auth.service';

import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent {
  users: User[] = [];

  constructor(private userService: UserService, private user: UserService) {}

    ngOnInit() {
        this.loadUsers();
        
    }

    loadUsers(): void {
        this.userService.getUsers().subscribe((data) => {
            this.users = data;
        });
    }


    deleteUser(userId: number, username: string | undefined): void {
    if(confirm(`Delete user: ${username}?`))
        this.userService.deleteUser(userId).subscribe(() => {
                alert('user was successfully deleted');
                this.loadUsers();
            },
            (err) => {
                console.error(err.error.message);
            }
        );
    }
}


