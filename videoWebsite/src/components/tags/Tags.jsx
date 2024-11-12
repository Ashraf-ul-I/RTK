
import { useEffect } from 'react'
import Tag from './Tag'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTagsAsync } from '../../feature/tags/tagsSlice';

const Tags = () => {
  
  const {tags,isLoading}=useSelector(state=>state.tags)
  const dispatch=useDispatch();
  //because we know that we are getting the data using async thunk function
  //so for getting the data automatically we have to use useEffect
  //why useEffect? because we know it will render afther the inner return component render then
  //useEffect will execute so 
  //if we dispatch the asyncFunction here so it will dispatch the function from the component
  //then the function will get the data from the srver
  //then this asyncThunk will return the data to the state so then we 
  //can access via useSelector
  useEffect(()=>{
    dispatch(fetchTagsAsync())
  },[dispatch])
  return tags.length>0?(<section>
    <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
    >
        {tags.map(tag=> <Tag key={tag.id} title={tag.title}/>)}
    </div>
</section>):null;
}

export default Tags