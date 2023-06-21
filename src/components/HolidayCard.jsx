import React from "react";

function HolidayCard(props){
    return( 
    <>
        <div className="box">
            
            <h3 className="holiday-name">
                {props.name}
            </h3>

            <div className="holiday-details">
                <div className="detail date">
                    Date : {props.date}
                </div>
                <div className="detail country">
                    Country : {props.country}
                </div>
                
                <div className="detail day">
                    Day : {props.day}
                </div>
            </div>
        </div>
    </>);
}

export default HolidayCard;