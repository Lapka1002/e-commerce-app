import { useState, useContext, createContext, useEffect } from "react";


const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {

    const [favoriteItems, setFavoriteItems] = useState(() => {
        const storedFavorites = localStorage.getItem("favoriteItems");
        const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        return Array.isArray(parsedFavorites) ? parsedFavorites : [];
    });

    useEffect(() => {
        localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    }, [favoriteItems]);


    //delete product
    const removeItemFromFavorites = (id) => {
        setFavoriteItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        )
    }
    const addItemToFavorites = (item) => {
        setFavoriteItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return removeItemFromFavoritesById(prevItems, item.id);
            } else {
                return [...prevItems, { ...item }];
            }
        });
    }

    const removeItemFromFavoritesById = (items, id) => {
        return items.filter((item) => item.id !== id);
    }

    //Calculate the total number of products
    const totalItems = favoriteItems.length;

    return (
        <FavoritesContext.Provider
            value={{
                addItemToFavorites,
                removeItemFromFavoritesById,
                totalItems,
                removeItemFromFavorites,
                favoriteItems
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )

}

export default FavoritesContext;