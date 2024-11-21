
import { useDispatch, useSelector } from 'react-redux'
import RelatedVideoListItem from './RelatedVideoListItem'
import { useEffect } from 'react';
import { fetchrelatedVideosAsync } from '../../feature/relatedVideos/relatedVideoSlice';
import Loading from '../ui/Loading';

const RelatedVideoList = ({curentVideoID,tags}) => {
  const dispatch=useDispatch();
  const {relatedVideos,isLoading,isError,error}=useSelector(state=>state.relatedVideos)
  useEffect(()=>{
    dispatch(fetchrelatedVideosAsync({tags,id:curentVideoID}))
  },[dispatch,tags,curentVideoID])

  let content=null;

  if(isLoading) content=<Loading/>
  if(!isLoading && isError){
    content=<div className="col-span-12">{error}</div>
  }
  if(!isLoading && !isError && relatedVideos?.length ===0){
    content=<div className="col-span-12">No related videos found</div>
  }

  if(!isLoading && !isError && relatedVideos?.length >0){
    content= relatedVideos.map((video)=>(
      <RelatedVideoListItem key={video.id} video={video}/>
    ))
  }

  return (
    <div
    className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
>
    {/* <!-- single related video --> */}
    {content}
</div>
  )
}

export default RelatedVideoList