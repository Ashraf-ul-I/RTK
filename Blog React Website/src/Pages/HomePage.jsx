import React from 'react'
import SideBar from '../components/SideBar'
import PostContainer from '../components/PostContainer/PostContainer'

const HomePage = () => {
  
  return (
    <section className="wrapper">
    <SideBar/>
    {/* Post Container */}
    <PostContainer/>
 </section>
  )
}

export default HomePage