import {Link} from 'react-router'


const PageNotFound = () =>{
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-2">Oops! Page not found</p>
      
      {/* Link back to Home */}
      <Link 
        to="/" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
        </>
    )
}

export default PageNotFound;