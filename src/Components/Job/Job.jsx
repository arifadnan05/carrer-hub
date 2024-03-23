import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl min-h-[400px]">
                <div className="card-body">
                    <img className="w-[210px]" src={logo} />
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="space-x-6">
                        <button className="py-2 px-5 border rounded border-[#7E90FE] font-bold text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="py-2 px-5 border rounded border-[#7E90FE] font-bold text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="flex items-center">
                        <p className="flex items-center gap-2"><SlLocationPin />
                            {location}
                        </p>
                        <p className="flex items-center gap-2"><AiOutlineDollarCircle />
                            {salary}
                        </p>
                    </div>
                    <div className="card-actions">
                        <Link to= {`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job
