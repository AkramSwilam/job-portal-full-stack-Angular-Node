import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  keyword: string = '';
  location: string = '';
  experience: string = '';
  constructor(private router : Router){}
  search(){
    this.router.navigate(['/jobs'], { queryParams: { keyword: this.keyword, location: this.location, experience: this.experience } });
    
  }
}

