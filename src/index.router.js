import { connectDB } from "./database/connection.js"
import { applicationsRouter } from "./modules/applications/applications.routes.js"
import { categoriesRouter } from "./modules/categories/categories.routes.js"
import { employersRouter } from "./modules/employers/employers.routes.js"
import { jobSeekerRouter } from "./modules/job_seekers/jobSeeker.routes.js"
import { jobsRouter } from "./modules/jobs/jobs.routes.js"
import { usersRouter } from "./modules/users/users.routes.js"
import { globalErrorHandler } from "./utils/error_handling.js"

export const bootstrap=(app)=>{
connectDB()

app.use("/api/users",usersRouter)
app.use('/api/categories',categoriesRouter)
app.use("/api/employers",employersRouter)
app.use("/api/jobSeekers",jobSeekerRouter)
app.use("/api/jobs",jobsRouter)
app.use("/api/applications",applicationsRouter)

app.use(globalErrorHandler)
app.use("*",(req,res,nxt)=>{
    return res.status(404).json({"message":"404 Not Found"})
})
}