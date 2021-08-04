import Link from "next/link"
import {useEffect} from 'react';
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push('/')
        },3000)
    },[])
    return (
        <div className="not-found">
            <h1>Ooooops.....</h1>
            <p>That page cannot be found</p>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
    );
};

export default NotFound;