import React, {useCallback, useEffect, useState} from "react";
import TopSection from "./topSection";
import DeliveryMethod from "./deliveryMethod";
import {BeatLoader} from "react-spinners";
import CentralData from "../views/home/partial/centralData";
import {useStateValue} from "../states/StateProvider";
import Api from "../api/api";
import PropTypes from "prop-types";
import {toast} from "react-toastify";

const LandingData = (props) => {

    return (
        <div>
            <TopSection admin={props.admin}/>
            <hr/>
            {
                (!props.admin) &&
                <div className='flex-split'>
                    <h2>Choose Dishes</h2>
                    <li><DeliveryMethod admin={props.admin}/></li>
                </div>
            }

            {
                (props.loading) ?
                    <div style={{marginTop: '20%', width: '56vw'}}>
                        <BeatLoader size={30} color={'#a2a2a2'}/>
                    </div>
                    :
                    <CentralData data={props.data} admin={props.admin}/>
            }
        </div>
    )
}

export default LandingData

LandingData.prototype = {
    admin: PropTypes.bool
}
