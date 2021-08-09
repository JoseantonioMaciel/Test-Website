import React from 'react';
import{Link} from 'react-router-dom';


function TimeItem(props){
return(
    <>
    <li className='timeline_item'>
        <Link className='timeline_item_link' to={props.path}>
            <figure className='timeline_item_pic-wrap' data-category={props.label}>
            <img
            className='timeline_item_img'
            alt='Travel Image'
            src={props.src}
            />
            </figure>
            <div className='timeline_item_info'>
                <h5 className='timeline_item_text'>{props.text}</h5>
            </div>
        </Link>
    </li>
    </>
    )
}
export default TimeItem;