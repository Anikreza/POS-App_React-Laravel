import React from "react";
import PropTypes from "prop-types";
import {useStateValue} from "../../states/StateProvider";

const settingsOptionsCard = (props) => {
    const [{settingsAdminRoute}, dispatch] = useStateValue();

    return (
        <div style={{cursor:'pointer'}} className={(settingsAdminRoute===props.route)?'settingsOptionsActive':'settingsOptions'}>
            <div onClick={()=>{
                dispatch(
                    {
                        type: "setSettingsAdminRoute",
                        item: props.route
                    })
            }}>
                <div className='flex-settingsOptions'>
                    {props.icon}
                    <div className={(props.route==='inventory')? 'margin':''}>
                        <h3>{props.header}</h3>
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className='height'>
                </div>
            </div>
        </div>
    )
}

export default settingsOptionsCard

settingsOptionsCard.propTypes = {
    header: PropTypes.string,
    title: PropTypes.string
}
