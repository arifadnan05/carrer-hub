import { useEffect, useState } from "react"
import Job from "../Job/Job"

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-5xl'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={jobs.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="text-center mt-5">
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedJobs
