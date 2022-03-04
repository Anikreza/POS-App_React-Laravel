import React, {useEffect, useState} from "react";
import '../../../style/products/items.scss';
import '../../../style/forms.scss';
import DeleteIcon from '../../../assets/icons/Delete.png';
import PropTypes from "prop-types";
import {useStateValue} from "../../../states/StateProvider";
import {toast} from "react-toastify";

const CartItem = (props) => {

    const [{basket, deliveryMethod, quantity}, dispatch] = useStateValue();
    const [Q, setQ] = useState(props.quantity)

    function RemoveItem() {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            quantity: quantity,
            id: props.productId
        });
    }

    async function updateCart() {
        dispatch({
            type: "updateCart",
            id: props.productId,
            method: deliveryMethod.deliveryMethod,
        });
    }

    useEffect(() => {
        updateCart().then(r => r)
    }, [deliveryMethod]);

    async function update() {
        dispatch({
            type: "INCREMENT_QUANTITY",
            id: props.productId,
            value: Q
        });
    }

    function Increase() {
        if (props.stock > props.quantity) {
            setQ(Q + 1)
            update().then(r => r)

        } else {
            toast.warning('Out Of Stock!!!')
        }
    }


    function Decrease() {
        if (props.stock > 0 && props.quantity > 1) {
            setQ(Q - 1)
            update().then(r => r)
        }
    }

    return (
        <div className='cartItems'>
            <div className='cartItemsContainer'>

                <div className='left'>
                    <div style={{display: 'flex'}}>
                        <img src={props.image}/>
                        <div>
                            <p>{props.title}</p>
                            <h1>${props.price.toFixed(2)}</h1>
                        </div>
                    </div>
                </div>

                <div className='flex-sum-row-right'>
                    <div style={{display: 'flex'}}>
                        <h5>
                            <span className='minus' onClick={Decrease}>-</span>
                            {props.quantity}
                            <span className='plus' onClick={Increase}>+</span>
                        </h5>
                        <h2>${(props.quantity * props.price).toFixed(2)}</h2>
                    </div>
                </div>
            </div>

            <div className='flex-row-form'>
                <input
                    type="text"
                    value={props.orderNote}
                    placeholder='Order Note...'
                    onChange={(e) =>
                        dispatch(
                            {
                                type: "setOrderNote",
                                id: props.productId,
                                note: e.target.value
                            })}
                />
                <img onClick={() => RemoveItem()} src={DeleteIcon} alt='DeleteIcon'/>
            </div>
        </div>
    )
}

export default CartItem

CartItem.propTypes = {
    data: PropTypes.object,
}
