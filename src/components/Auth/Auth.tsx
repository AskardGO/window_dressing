import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom'

export default function Auth() {
    return (
        <ProvideAuth>
            <Router>
                <div>
                    <AuthButton />
                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>

                </div>
            </Router>
        </ProvideAuth>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    signin(cb: { (): void; (...args: any[]): void; }) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb: { (): void; (...args: any[]): void; }) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

// @ts-ignore
const authContext = createContext();

function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (cb: () => void) => {
        return fakeAuth.signin(() => {
            // @ts-ignore
            setUser("user");
            cb();
        });
    };

    const signout = (cb: () => void) => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}
//
function AuthButton() {
    let history = useHistory();
    let auth = useAuth();

    // @ts-ignore
    return auth.user ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    // @ts-ignore
                    auth.signout(() => history.push("/"));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest } : any) {
    let auth = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                // @ts-ignore
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
//
// function PublicPage() {
//     return <h3>Public</h3>;
// }
//
// function ProtectedPage() {
//     return <h3>Protected</h3>;
// }
//
// function LoginPage() {
//     let history = useHistory();
//     let location = useLocation();
//     let auth = useAuth();
//
//     // @ts-ignore
//     let { from } = location.state || { from: { pathname: "/" } };
//     let login = () => {
//         // @ts-ignore
//         auth.signin(() => {
//             history.replace(from);
//         });
//     };
//
//     return (
//         <div>
//             <p>You must log in to view the page at {from.pathname}</p>
//             <button onClick={login}>Log in</button>
//         </div>
//     );
// }
//

