import { ReactNode, createContext, useContext, useState } from "react";
import Cart from "../components/Cart"
import useLocalStorage from "../hooks/useLocalStorage";
interface CartProviderProps {
    children : ReactNode
}

interface CartContext {
    openCart : () => void
    closeCart : () => void
    cartQuantity : number
    getQuantity : (id: number) => number
    increaseQuantity : (id: number) => void
    decreaseQuantity : (id: number) => void
    removeFromCart: (id: number) => void
    cartItems : CartItem[]
}

interface CartItem{
    id: number
    quantity: number
}

const CartContext = createContext({} as CartContext)

export function useCart() {
    return useContext(CartContext)
}


export function CartProvider({ children } : CartProviderProps){
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart",[])
    const [isOpen, setIsOpen] = useState(false)
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    function getQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
            } else {
            return currItems.map(item => {
                if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
                } else {
                return item
                }
            })
            }
        })
    }
    function decreaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
            } else {
            return currItems.map(item => {
                if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
                } else {
                return item
                }
            })
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return (

        <CartContext.Provider value={{getQuantity, increaseQuantity, decreaseQuantity, removeFromCart, openCart, closeCart, cartQuantity, cartItems}}>
             {children} 
             <Cart  isOpen={isOpen}/>
        </CartContext.Provider>

    )
}