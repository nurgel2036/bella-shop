import React from 'react'

import '../RecentPosts/ResentPosts.scss'
import {RiFileList2Line} from 'react-icons/ri';


export default function ResentPosts() {
  return (
    <div className='outRecentPosts'>
      <div className='recentPosts'>
        <h1>OUR RECENT POSTS</h1>
          <div className="seeAllPosts">
            <RiFileList2Line className='refile'/>
            <p>see all posts</p>
          </div>
      </div>
    </div>
  )
}
