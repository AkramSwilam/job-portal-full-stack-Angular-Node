import { Application } from "../../database/models/application.js";
import { Job } from "../../database/models/job.js";
import { JobSeeker } from "../../database/models/jobSeeker.js"
import { crudOps } from "../../utils/crud_ops.js";
import { asyncHandler } from "../../utils/error_handling.js";


export const addApplication = asyncHandler(
    async (req, res, nxt) => {
        const { JobSeekerId, JobId } = req.body

        const jobSeeker = await JobSeeker.findById(JobSeekerId)
        if (!jobSeeker) return res.status(400).json({ Result: false, message: "job seeker not found" })

        const job = await Job.findById(JobId)
        if (!job) return res.status(400).json({ Result: false, message: "job not found" })

        const doc = await Application.create(req.body)
        return res.json({Result:true,doc})
    }
)

export const getApplications = crudOps.getAll(Application)

export const getApplication = crudOps.getOne(Application)





export const getApplicationsBySeekerId = asyncHandler(
    async (req, res, nxt) => {
        const { jobSeekerId } = req.params
        const docs = await Application.find({ JobSeekerId: jobSeekerId })
        return res.json({ Result: true, docs })
    }
)

export const getApplicationsByJobId = asyncHandler(
    async (req, res, nxt) => {
        const { jobId } = req.params
        const docs = await Application.find({ JobId: jobId })
        return res.json({ Result: true, docs })
    }
)


