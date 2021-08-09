import React from 'react';
import './Timeline.css';
import TimeItem from './TimeItem'




function Timeline(){
    return(
        <div className='timeline'>
            
            <div className='timeline_container'>
            <h1>Who is Ultimate Dragfting? </h1>
                
                <div className='timeline__wrapper'> 
                    <ul className='timeline_items'>
                        <TimeItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'/>
                        <TimeItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'/>   
                    </ul>
                </div>
                <div className='timeline__wrapper'> 
                    <ul className='timeline_items'>
                        <TimeItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'/>
                        <TimeItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'/>  
                        <TimeItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'/>    
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Timeline;