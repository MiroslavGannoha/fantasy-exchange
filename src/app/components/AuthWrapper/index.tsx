import * as React from 'react';
import {authStore} from 'app/stores/AuthStore';

const { useState, useEffect, useContext } = React;

const DEFAULT_REDIRECT_CALLBACK = (options) =>
    window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext(null);
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
    children,
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    ...initOptions
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [user, setUser] = useState();
    const [auth0Client, setAuth0] = useState();
    const [loading, setLoading] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        const initAuth0 = async () => {
            const auth0FromHook = await authStore.createAuthClient(initOptions);
            setAuth0(auth0FromHook);

            if (window.location.search.includes('code=')) {
                const { appState } = await auth0FromHook.handleRedirectCallback();
                onRedirectCallback(appState);
            }

            const isAuthed = await auth0FromHook.isAuthenticated();

            setIsAuthenticated(isAuthed);

            if (isAuthed) {
                const userData = await auth0FromHook.getUser();
                setUser(userData);
            }

            setLoading(false);
        };
        initAuth0();
    }, []);

    const loginWithPopup = async (params = {}) => {
        setPopupOpen(true);
        try {
            await auth0Client.loginWithPopup(params);
        } catch (error) {
            console.error(error);
        } finally {
            setPopupOpen(false);
        }
        const userData = await auth0Client.getUser();
        setUser(userData);
        setIsAuthenticated(true);
    };

    const handleRedirectCallback = async () => {
        setLoading(true);
        await auth0Client.handleRedirectCallback();
        const userData = await auth0Client.getUser();
        setLoading(false);
        setIsAuthenticated(true);
        setUser(userData);
    };

    const value = {
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client && auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client && auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
    };

    return (
        <Auth0Context.Provider value={value} >
            {children}
        </Auth0Context.Provider>
    );
};
