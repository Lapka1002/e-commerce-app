import { ShoppingCartProvider } from "./CartContext";
import { FavoritesProvider } from "./FavoritesContext";
import { AuthProvider } from "./AuthContext";

const AppProviders = ({ children }) => {
    return (
        <AuthProvider>
            <ShoppingCartProvider>
                <FavoritesProvider>
                    {children}
                </FavoritesProvider>
            </ShoppingCartProvider>
        </AuthProvider>
    );
};

export default AppProviders;