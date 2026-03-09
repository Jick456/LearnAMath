import React, { createContext, useContext, useEffect, useState } from 'react';

const RouterContext = createContext({
    path: '/',
    navigate: () => { }
});

export const BrowserRouter = ({ children }) => {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => setPath(window.location.pathname);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigate = (newPath) => {
        window.history.pushState({}, '', newPath);
        setPath(newPath);
    };

    return (
        <RouterContext.Provider value={{ path, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

export const useNavigate = () => {
    const { navigate } = useContext(RouterContext);
    return navigate;
};

export const useLocation = () => {
    const { path } = useContext(RouterContext);
    return { pathname: path };
};

export const Routes = ({ children }) => {
    const { path } = useContext(RouterContext);
    let match = null;

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;
        if (child.props.path === path) {
            match = child;
        }
    });

    return match;
};

export const Route = ({ path, element }) => {
    return element;
};
