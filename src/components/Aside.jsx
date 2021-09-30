import React from "react";
import classes from '../styles/aside.module.scss';
import SearchNotes from "./UI/search-notes/Search-notes";
import SortPost from "./UI/sort/Sort-post";

const AsidePage = () => {
  return (
    <div className={classes.aside}>
      <div className={classes.aside__userinfo}>
        <div className={classes.username}>Username:</div>
        <div className={classes.useremail}>Email:</div>
      </div>
      <div className={classes.aside__menu}>
        <SortPost />
        <SearchNotes />
        <div className={classes.todolist}>Todo-list</div>
        <div className={classes.favorites}>Favorites</div>
        <div className={classes.completeted}>Completed</div>
      </div>
    </div>
  )
}

export default AsidePage;