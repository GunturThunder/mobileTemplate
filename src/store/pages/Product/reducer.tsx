/* eslint-disable prettier/prettier */
import { ADD_TOO_CART, GET_DETAIL, GET_DETAIL_FULLFILED, REMOVE_FROM_CART, SEARCH_TITLE, TEST } from './actionTypes'
import { Product } from './types';
export interface ProductState {
    http_code_account: string;
    status_code_account: string;
    description_account: string;
    products: Product[];
    cart: Product[];
}
const INIT_STATE: any = {
    http_code_account: '',
    status_code_account: '',
    description_account: '',
    products: [
        {
            id: '1',
            name: 'Smartphone',
            price: '$299',
            image: 'https://via.placeholder.com/100x100/4A90E2/FFFFFF?text=Phone',
            stock: 15,
        },
        {
            id: '2',
            name: 'Laptop',
            price: '$899',
            image: 'https://via.placeholder.com/100x100/7ED321/FFFFFF?text=Laptop',
            stock: 8,
        },
        {
            id: '3',
            name: 'Headphones',
            price: '$149',
            image: 'https://via.placeholder.com/100x100/F5A623/FFFFFF?text=Audio',
            stock: 23,
        },
        {
            id: '4',
            name: 'Smart Watch',
            price: '$199',
            image: 'https://via.placeholder.com/100x100/D0021B/FFFFFF?text=Watch',
            stock: 12,
        },
        {
            id: '5',
            name: 'Tablet',
            price: '$449',
            image: 'https://via.placeholder.com/100x100/9013FE/FFFFFF?text=Tablet',
            stock: 6,
        },
    ],
    cart: [],
    data: {}

}
const ProductReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                http_code_account: '',
                status_code_account: '',
                description_account: '',
            };
        case ADD_TOO_CART:
            let cartTemp = [...state.cart, action.payload]
            return {
                ...state,
                cart: cartTemp
            };
        case REMOVE_FROM_CART:
        // const productIndex = state.cart.findIndex(item => item.id === action.payload.id);
        // if (productIndex !== -1) {
        //     const newCart = [...state.cart];
        //     newCart.splice(productIndex, 1);
        //     return {
        //         ...state,
        //         cart: newCart
        //     };
        // }
        // else {
        //     return {
        //         ...state,
        //     }
        // }
        // case ADD_TOO_CART:
        // return {
        //     ...state,
        // };  
        case GET_DETAIL:
            console.log('GET_DETAIL reducer')
            return {
                ...state,
                // data: cartTemp
            };
        case GET_DETAIL_FULLFILED:
            return {
                ...state,
                data: action.payload.data
            };
        case SEARCH_TITLE:
            let dataTemp = (state.data).filter((x:any)=>(x.title).includes(action.payload))
            return {
                ...state,
                data: dataTemp
            };
        default:
            return state;
    }
};

export default ProductReducer;
