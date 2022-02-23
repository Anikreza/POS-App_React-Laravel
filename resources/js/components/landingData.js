import React, {useCallback, useEffect, useState} from "react";
import TopSection from "./topSection";
import SelectOption from "./forms/selectOption";
import {BeatLoader} from "react-spinners";
import CentralData from "../views/home/partial/centralData";
import {useStateValue} from "../states/StateProvider";
import Api from "../api/api";
import PropTypes from "prop-types";

const LandingData = (props) => {

    const [{ category}] = useStateValue();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getProducts = useCallback(
        async () => {
            await Api().get(`/products/` + category.title)
                .then((response) => {
                    setData(response.data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        [category.title],
    );


    useEffect(() => {
        getProducts().then(r => r)
    }, [getProducts]);


    return (
            <div>
                <TopSection admin={props.admin}/>
                <hr/>
                {
                    (!props.admin) &&
                    <div className='flex-split'>
                        <h2>Choose Dishes</h2>
                        <li><SelectOption admin={props.admin}/></li>
                    </div>
                }

                {
                    (loading) ?
                        <div style={{marginTop:'20%'}}>
                            <BeatLoader size={40} color={'#EA7C69'}/>
                        </div>
                        :
                        <CentralData data={data} admin={props.admin}/>
                }
            </div>
    )
}

export default LandingData

LandingData.prototype={
    admin:PropTypes.bool
}
