import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams(); // hook for route parameters
    const { data: blog, isPending, error } = useFetch('http://localhost:3000/blogs/' + id);


    return ( 
        <div className="blog-details">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { !error && blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;