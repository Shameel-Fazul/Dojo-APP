import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams(); // hook for route parameters
    const { data: blog, isPending, error } = useFetch('http://localhost:3000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => history.push('/'))
    }


    return ( 
        <div className="blog-details">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { !error && blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;