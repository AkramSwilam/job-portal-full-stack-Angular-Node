import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  jobList : any []=[]
  constructor(private jobSer : JobService,private router : Router)
  {

  }
  ngOnInit(): void {
    this.loadJobs()
  }

  loadJobs(){
    this.jobSer.getActiveJobs().subscribe((res:any)=>
    {
      this.jobList=res.docs
    })
  }
  openJob(id:string){
    this.router.navigate(['/job-details/'+id])
  }
}
