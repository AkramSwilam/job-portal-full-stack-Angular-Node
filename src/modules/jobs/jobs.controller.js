import { Category } from "../../database/models/category.js";
import { Employer } from "../../database/models/employer.js"
import { Job } from "../../database/models/job.js";
import { crudOps } from "../../utils/crud_ops.js";
import { asyncHandler } from "../../utils/error_handling.js";


export const addJob = asyncHandler(
    async (req, res, nxt) => {
        const { CategoryId, EmployerId } = req.body
        const category = await Category.findById(CategoryId)
        if (!category) return res.status(400).json({ Result: false, message: "category not found" })

        const employer = await Employer.findById(EmployerId)
        if (!employer) return res.status(400).json({ Result: false, message: "employer not found" })

        const doc = await Job.create(req.body)

        return res.json({ Result: true, doc })
    }
)

export const getJobs = asyncHandler(
    async (req, res, nxt) => {
        const { keyword, location, experience } = req.query;

        const filter = {};
        if (keyword) {
            filter.$or = [
                { JobName: { $regex: keyword, $options: 'i' } },
                { JobDescription: { $regex: keyword, $options: 'i' } }
            ];
        }
        if (location) {
            filter.Location = location;
        }
        if (experience) {
            filter.Experience = experience;
        }
        const docs = await Job.find(filter);

        res.status(200).json({docs});
    }
)

export const getJob = asyncHandler(
    async (req, res, nxt) => {
        const docs = await Job.findById(req.params.id).populate('EmployerId')
        return res.json({ Result: true, docs })
    }
)

export const updateJob = asyncHandler(
    async (req, res, nxt) => {

        const { CategoryId, EmployerId } = req.body

        if (CategoryId) {
            const category = await Category.findById(CategoryId)
            if (!category) return res.status(400).json({ Result: false, message: "category not found" })
        }

        if (EmployerId) {
            const employer = await Employer.findById(EmployerId)
            if (!employer) return res.status(400).json({ Result: false, message: "employer not found" })
        }

        const { JobId } = req.body
        delete req.body['JobId']
        const doc = await Job.findByIdAndUpdate(JobId, req.body, { new: true })
        return res.json({ Result: true, doc })
    }
)

export const deleteJob = crudOps.deleteModel(Job)

export const getActiveJobs = asyncHandler(
    async (req, res, nxt) => {
        const docs = await Job.find({ IsActive: true }).populate('EmployerId')
        return res.json({ Result: true, docs })
    }
)

export const getJobsByEmployerId = asyncHandler(
    async (req, res, nxt) => {
        const { employerId } = req.params
        const docs = await Job.find({ EmployerId: employerId })
        return res.json({ Result: true, docs })
    }
)


