import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VideoLoader from '../ui/loaders/VideoLoader'
import Error from '../ui/Error'
export default function Videos() {

    const {data:videos,isError,isLoading,refetch}=useGetVideosQuery();
    // {
    //     // refetchOnFocus:true, //whenever i change the tab and come on the page again it will refetch again
    //     // refetchOnReconnect:true //means if internet disconnect and come again then it will refetch again without refersh
    //     //poolingInterval:3000 // per 3 sec it will refetch
    // }
    
    //decide what to render because useGetVideosQuery is manually use useState and useEffect but we know that
    //useEffect will work first after the component rendering so then we didnot get the data before the component 
    //loading so we have to mainataining its using content
    let content=null;

    if(isLoading){
        content=(
            <>
            <VideoLoader/>
            <VideoLoader/>
            <VideoLoader/>
            <VideoLoader/>
            <VideoLoader/>
            <VideoLoader/>
            <VideoLoader/>
            <VideoLoader/>
            </>
        )
    }
    if(!isLoading && isError){
        content=<Error message="There was an Error from Videos.js"/>
    }
    if(!isLoading && !isError && videos?.length === 0){
        content=<Error message="No Videos Found"/>
    }

    if(!isLoading && !isError && videos?.length> 0){
        content=videos.map(video=><Video key={video.id} video={video} refetch
        ={refetch}/>)
        return content
    }


    return (
        <>
           {content}
        </>
    );
}
