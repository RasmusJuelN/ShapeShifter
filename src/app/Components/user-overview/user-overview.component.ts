import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { ConfirmationService } from 'src/app/Services/confirmation.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent {
  users: User[] = [];

  constructor(private userService: UserService, private confirm: ConfirmationService) {}

  ngOnInit() {
      this.userService.getUsers().subscribe((data) => {
          this.users = data;
      });
  }

  openDeleteUser(userId: number): void {
    this.confirm.openConfirmation();

    this.confirm.getConfirmation().subscribe((confirmed) => {
        if (confirmed) {
            this.deleteUser(userId);
        }
        this.confirm.closeConfirmation();
    });
}

private deleteUser(userId: number): void {
    // Implement your logic to delete the user by userId
    // Example: this.userService.deleteUser(userId).subscribe(() => { ... });
    console.log(`Deleting user with ID: ${userId}`);
}
}
