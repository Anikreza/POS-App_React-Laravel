export const initialState = {
    basket: [],
    user: {},
    deliveryMethod: [],
    category: {},
    modal: false,
    payMethod:0
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [action.item, ...state.basket],
            };

        case "INCREMENT_QUANTITY":
            return {
                ...state,
                basket: state.basket.map(item => item.productId === action.id ? {
                    ...item,
                    quantity: action.value
                } : item),
                cart: state.cart.map(item => item.productId === action.id ? {...item, quantity: action.value} : item)
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            };

        case "REMOVE_FROM_BASKET":
            let newBasket = state.basket.filter(
                (basketItem) => basketItem.productId !== action.id
            );
            return {
                ...state,

                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.item
            }
        case "setCategory":
            return {
                ...state,
                category: action.item
            }
        case "SetDeliveryMethod":
            return {
                ...state,
                deliveryMethod: action.item
            }
        case "SetModal":
            return {
                ...state,
                modal: action.item
            }
            case "SetPayMethod":
            return {
                ...state,
                payMethod: action.item
            }
        default:
            return state;
    }
};

export default reducer;
