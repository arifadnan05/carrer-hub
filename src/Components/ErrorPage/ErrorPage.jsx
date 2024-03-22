import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1 className='text-4xl'>Oops!!!</h1>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default ErrorPage
