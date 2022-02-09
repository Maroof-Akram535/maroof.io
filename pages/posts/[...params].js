import {useRouter} from 'next/router';
export default function FirstPost()
{
    const router=useRouter();
    const {params}=router.query;
    return (
        <>
        <h1>First Post</h1>
        <h2>
          Index haeding{params}

        </h2>
      </>
    )
}