import { useLoaderData, useParams } from "react-router-dom"
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    return (
        <div>
            <div className="mb-32">
                <div className="text-center my-24">
                    <h1 className="text-3xl font-extrabold text-[#1A1919]">Job Details</h1>
                </div>

                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <p className="leading-8"><span className="font-extrabold text-[#1A1919]">Job Description:</span> <span className="text-[#757575]">{job_description}</span></p>
                        <p className="leading-8 mt-6"><span className="font-extrabold text-[#1A1919]">Job Responsibility: </span> <span className="text-[#757575]">{job_responsibility}</span></p>
                        <h2 className="font-extrabold leading-8 mb-4 mt-6 text-[#1A1919]">Educational Requirement: </h2>
                        <p className="text-[#757575]">{educational_requirements}</p>
                        <h2 className="font-extrabold leading-8 mb-4 mt-6 text-[#1A1919]">Experience: </h2>
                        <p className="text-[#757575]">{experiences}</p>
                    </div>
                    <div className="col-span-1 ml-6">
                        <div>
                            <div className="card bg-gray-100 w-96">
                                <div className="card-body">
                                    <h2 className="text-xl text-[#1A1919] font-extrabold">Job Details</h2>
                                    <hr className="mb-6" />
                                    <div className="space-y-4">
                                        <h3 className="flex items-center"><span className="text-[#9873FF] text-2xl mr-2"><AiOutlineDollarCircle /></span>Salary: {salary} (Per Month)</h3>
                                        <h3 className="flex items-center"><span className="text-[#9873FF] text-2xl mr-2"><IoCalendarOutline /></span>Job Title: {job_title}</h3>
                                    </div>
                                    <h2 className="text-xl text-[#1A1919] font-extrabold mt-6">Contact Information</h2>
                                    <hr className="mb-6" />

                                    <div>
                                        <h3 className="flex items-center"><span className="text-[#9873FF] text-2xl mr-2"><MdOutlineLocalPhone /></span>Phone: {contact_information.phone}</h3>
                                        <h3 className="flex items-center my-4"><span className="text-[#9873FF] text-2xl mr-2"><MdOutlineEmail /></span>Email: {contact_information.email}</h3>
                                        <h3 className="flex items-center"><span className="text-[#9873FF] text-2xl mr-2"><CiLocationOn /></span>Address: {contact_information.address}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
