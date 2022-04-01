import React, {useCallback, useEffect, useState} from "react";
import '../../../style/adminPages/settings.scss';
import '../../../style/rowColumnStyle.scss';
import ModalContent from "../../../components/modal";
import SettingsOptions from "./partial/settingsOptions";
import {useStateValue} from "../../../states/StateProvider";
import Inventory from "../inventory";
import LandingData from "../../../components/landingData";
import Api from "../../../api/api";
import {toast} from "react-toastify";


const Settings = (props) => {
    const [{settingsAdminRoute},] = useStateValue();
    const [loading2, setLoading2] = useState(false)
    const [data, setData] = useState([])

    const getData = useCallback(
        async () => {
            setLoading2(true)
            await Api().get('/productsWithInventory')
                .then(res => {
                    setData(res.data)
                    setLoading2(false)
                })
        },
        [],
    );

    useEffect(async () => {
        getData().then(r => r)
    }, [getData]);


    const [{category, state, query}] = useStateValue();
    const [loading, setLoading] = useState(false)
    const [landingData, setLandingData] = useState([])


    useEffect(async () => {
        setLoading(true)
        await Api().get(`/products/${category.title}/all`)
            .then((response) => {
                setLandingData(response.data.products)
                setLoading(false)
            })
            .catch((error) => {
                toast.error('OOPS! something went wrong')
            })
    }, [query, category.title, state])


    return (
        <div className='settingsContainer'>
            <h2>Settings</h2>
            <div className='settings'>
                <div style={{background: '#1F1D2BFF', borderRadius: '10px'}}>
                    <SettingsOptions/>
                </div>
                <div className='settingsRightSide'>
                    {
                        (settingsAdminRoute === 'inventory') ?
                            <Inventory data={data} loading2={loading2}/>
                            : (settingsAdminRoute === 'about') ?
                                <div><h1>About Page</h1></div>
                                : (settingsAdminRoute === 'notifications') ?
                                    <div><h1>Notification Page</h1></div>
                                    : (settingsAdminRoute === 'appearance') ?
                                        <div><h1>Notification Page</h1></div>
                                        :
                                        <LandingData data={landingData} loading={loading} admin={true}/>
                    }
                </div>
                <ModalContent addProducts={true}/>
            </div>
        </div>
    )
}

export default Settings
