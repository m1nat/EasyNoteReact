import react from 'react';
import classes from './Sort-post.module.scss'

const SortPost = () => {
  return(
    <div className={classes.wrapper}> 
      <input type="text" placeholder="Search posts..." className={classes.sortPost}/>
    </div>
  )
}

export default SortPost;