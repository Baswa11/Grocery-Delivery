import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([])

    const dummyProducts = [
        {
            id: 1,
            name: "Casual Shoes",
            category: "Sports",
            price: 100,
            offerPrice: 80,
            rating: 4,
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png"
        },
        {
            id: 2,
            name: "Running Shoes",
            category: "Sports",
            price: 120,
            offerPrice: 90,
            rating: 5,
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png"
        }
    ];

    const fetchProducts = async () => {
        try {
            // In a real app, this would be an API call
            // const response = await fetch('/api/products');
            // const data = await response.json();
            // setProducts(data);
            
            // For now, using dummy data
            setProducts(dummyProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        navigate,
        products
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppContextProvider;
