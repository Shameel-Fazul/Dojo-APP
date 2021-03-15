import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
// destructure and assign to the blogs variable
    const { data : blogs, isPending, error } = useFetch('http://localhost:3000/blogs')

    return ( 
        <div className="Home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { blogs && !error && <BlogList blogs={ blogs } title={ 'All Blogs!' } /> }
        </div>
     );
}
 
export default Home;