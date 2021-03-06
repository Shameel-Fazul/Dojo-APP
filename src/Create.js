import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [author, setAuthor] = useState('Shameel A')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsPending(true)

        const blog = { title: title, body: body, author: author }
        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => { 
            console.log('new blog added')
            setIsPending(false)
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input 
                 type="text"
                 required
                 value={ title }
                 onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Blog body:</label>
                <textarea
                 required
                 value={ body }
                 onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                <label>Blog author:</label>
                <select
                 value={ author }
                 onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="Shameel A">Shameel A</option>
                    <option value="Shameel B">Shameel B</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;