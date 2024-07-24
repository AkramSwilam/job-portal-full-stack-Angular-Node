import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
 apiEndPoint : string ='http://localhost:5000/api/'
  constructor(private http : HttpClient) { }

  registerEmployer(obj : any){
    return this.http.post(this.apiEndPoint + 'employers',obj)

  }
  registerAsJobSeeker(obj :any){
    return this.http.post(this.apiEndPoint + 'jobSeekers',obj)
  }
  login(obj :any){
    return this.http.post(this.apiEndPoint + 'users/login',obj)
  }
  getAllCategories()
  {
    return this.http.get(this.apiEndPoint + 'categories')
  }
  createNewJob(obj : any){
    return this.http.post(this.apiEndPoint + 'jobs',obj)
  }
  getActiveJobs(){
    return this.http.get(this.apiEndPoint + 'jobs/active')
  }
  getJobListingById(jobid :number){
    return this.http.get(this.apiEndPoint + 'jobs/job/' + jobid)
  }
  SendJopApplication(obj : any){
    return this.http.post(this.apiEndPoint + 'applications',obj)
  }
  GetJobsByEmployerId(employerid : number){
    return this.http.get(this.apiEndPoint + 'jobs/employer/'+ employerid)
  }
  rejectJobApplication(jobid :string){
    return this.http.delete(this.apiEndPoint + 'jobs/'+ jobid)
  }

  

}
