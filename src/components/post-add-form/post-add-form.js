import React from "react";
import "./post-add-form.css"
const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
            type = "text"
            placeholder = "o чем вы думаете"
            className = "form-control new-post-label" />
            <button 
            type = "button"
            className="btn btn-outline-secondsry">
                Добавить
            </button>    
        </form>

    )
}
export default PostAddForm;