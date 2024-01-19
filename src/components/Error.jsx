import { useRouteError } from "react-router-dom"
const Error=()=>{
    const err=useRouteError();//This will give detailed error object 
    //we can use it to display better message
    return (
        <div>
            <h1>Opps!...</h1>
            <h2>Error occured</h2>
        </div>
    )
}
export default Error