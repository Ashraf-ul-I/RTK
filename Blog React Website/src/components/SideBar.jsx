import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sortPosts,filterData } from '../feature/postApi/postSlice';
const SideBar = () => {
  const { post } = useSelector((state) => state.postSlice);
  const dispatch=useDispatch();
  const [check,setCheck]=useState('All');
  const handleSorting=(e)=>{
    const criteria=e.target.value;
    if(criteria){
      dispatch(sortPosts({criteria}))
    }
    
  }

  const handleFiltering=(e)=>{
    const savedFilter=e.target.value;
    setCheck(savedFilter);
    if(savedFilter){
      dispatch(filterData({savedFilter}))
    }
  }




  return (
    <aside>
    <div className="sidebar-items">
      <div className="sidebar-content">
        <h4>Sort</h4>
        <select name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500" onChange={handleSorting}>
          <option value="default">Default</option>
          <option value="newest" >Newest</option>
          <option value="most_liked">Most Liked</option>
        </select>
      </div>
      <div className="sidebar-content">
        <h4>Filter</h4>
        <div className="radio-group">
          {/* <!-- handle filter on button click --> */}
          <div>
            <input type="radio" name="filter" id="lws-all" value='All' checked={check ==='All'}  className="radio" onClick={handleFiltering}/>
            <label htmlFor="lws-all" >All</label>
          </div>
          <div>
            <input type="radio" name="filter" id="lws-saved" value='saved' checked={check ==='saved'} className="radio" onClick={handleFiltering} />
            <label htmlFor="lws-saved" >Saved</label>
          </div>
        </div>
      </div>
    </div>
  </aside>
  )
}

export default SideBar