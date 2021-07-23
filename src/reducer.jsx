export const initialState = {
    basket: []
};

export const getBasketTotal = (basket) =>  basket?.reduce((amount, item) => (item.price * item.count) + amount, 0);
export const getTotalItem = (basket) => basket?.reduce((amount, item) => item.count + amount, 0);

const reducer = (state, action) => {
console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!!!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'CHANGE_ITEM_COUNT':
            const itemindex = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            )
            let newBasket2 = [...state.basket];
            if(itemindex >= 0){
                newBasket2[itemindex].count= action.count;
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!!!`
                )
            }
            return {
                ...state,
                basket: newBasket2
               
            }
        
        case "UPDATE_COUNT_ON_ADD":
            let newBasket3 = [...state.basket]
            newBasket3[action.item.index] = action.item;
            return {
                ...state,
                basket: newBasket3
            };

        default:
            return state;
        }
};

export default reducer;