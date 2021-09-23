import React from 'react'
import {useDispatch}  from 'react-redux';
import { filterTodo } from  "../redux/action";
import "./FilterTask.css"
const FilterTask = () => {
    const dispatch = useDispatch()
    return (
        <div className="add">
        <button onClick={() => dispatch(filterTodo("all"))
              
          } className="custom-btn btn-12"><span>Click!</span><span>All</span></button>
          
          <button  onClick={() => dispatch(filterTodo("done"))
              
          }className="custom-btn btn-12"><span>Click!</span><span>Complete</span></button>
          
          <button  onClick={() => dispatch(filterTodo("notDone"))
              
          }className="custom-btn btn-12"><span>Click!</span><span>Uncomplete</span></button>
            
        </div>
    )
}

export default FilterTask
