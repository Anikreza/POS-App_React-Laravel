import React, {useEffect, useState} from "react";
import '../../style/userPages/home.scss';
import {useStateValue} from "../../states/StateProvider";
import ModalContent from "../../components/modal";
import FullCart from "../../components/cart/fullCart";
import '../../style/rowColumnStyle.scss';
import PropTypes from "prop-types";
import LandingData from "../../components/landingData";
import Api from "../../api/api";
import {toast} from "react-toastify";

const Home = () => {

    const [State, setState] = useState(false)
    const [{basket, quantity}] = useStateValue();

    useEffect(() => {
        setState(!State)
    }, [basket, quantity]);

    const [{category, state, query}] = useStateValue();
    const [loading, setLoading] = useState(false)
    const [discount, setDiscount] = useState(0)
    const [landingData, setLandingData] = useState([])
    let key = 'all'

    if (query) {
        key = query
    }
    if (!/\S/.test(query)) {
        key = 'all'
    }

    useEffect(() => {
        const delayQuery = setTimeout(async () => {
            setLoading(true)
            if (key.match(/^ *$/) === null) {
                await Api().get(`/products/${category.title}/${key}`)
                    .then((response) => {
                        setLandingData(response.data.products)
                        setDiscount(response.data.discount)
                        setLoading(false)
                    })
                    .catch((error) => {
                        toast.error('OOPS! something went wrong')
                    })
            }
        }, (query !== 'all' && category.title === 0) ? 400 : 0)

        return () => clearTimeout(delayQuery)

    }, [query, category.title, state])


    return (
        <div className='home-Container'>
            <div className='home'>
                <LandingData data={landingData} loading={loading} admin={false}/>
            </div>
            <FullCart isThisForConfirmPayment={false}/>
            <ModalContent/>
        </div>
    )
}

export default Home

Home.propTypes = {
    page: PropTypes.string
}
