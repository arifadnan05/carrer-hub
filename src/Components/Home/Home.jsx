import Banner from "../Banner/Banner"
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs"
import JobsCategory from "../JobsCategory/JobsCategory"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobsCategory></JobsCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    )
}

export default Home
