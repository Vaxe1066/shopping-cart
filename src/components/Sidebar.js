import React from "react";




const Sidebar = (props) => {

    return(
        <div className="sidebar">
            <ul className="cat-lst">
                {
                    props.categories.map( (item) => {
                        return(
                            <div className="lst-div" key={item.id}>
                                <li> <input className="input-cat" type="button" value={item.category}/> </li>
                            </div>
                           )
                    }
                )}
            </ul>
        </div>

        )
}

export default Sidebar;