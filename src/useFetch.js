import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {

        console.log('DOJO APP > Connecting to REST API')

        const fetchData = async () => {
            const res = await fetch(url)

             seterror(null)
            if (!res.ok) {
                seterror('data not available')
            }
            const data = await res.json()
    
            setdata(data)
            setisPending(false)
        }
        fetchData()
    }, [url]) // [] array dependancy 

    return { data, isPending, error }
}

export default useFetch