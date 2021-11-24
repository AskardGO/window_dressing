import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../Header';
import ThirdComp from "../../pages/Third page";
import SignIn from "../../pages/SignIn";
import InvoiceSwitcher from "../InvoiceSwitcher/InvoiceSwitcher";
import Background from "../Background/Background";

import {AuthContext} from "../Auth/AuthContext";
import {User} from "../../pages/User";
import InvoiceInfo from "../../pages/Invoice Info/InvoiceInfo";
import Edit from "../../pages/Invoice Info/Edit";
import {LandingPage} from "../../pages/LandingPage";
import {ClientTemplate} from "../AddTemplate/createClientTemplate";
import {ClientEdit} from "../ClientEdit";

const Navigation = () => {

    const [token, setToken] = React.useState(undefined);

    const mainPageSwitcher = ():React.ComponentType<any> => {
        if(token !== undefined) {
            return InvoiceSwitcher
        }
        return LandingPage
    }

    return (

            <AuthContext.Provider value={{token, setToken}}>
                <div className='content'>
                    <Header key='header'/>
                    <Background key='background' mode="ocean"/>
                    <Route key='landing-page' path='/welcome' component={LandingPage}/>
                    <Route key='main-page' exact path='/' component={mainPageSwitcher()}/>
                    <Route key='invoice-id' path='/invoices/:id' component={InvoiceInfo}/>
                    <Route key='third' path='/third' component={ThirdComp}/>
                    <Route key='signin-page' path='/signin' component={SignIn}/>
                    <Route key='user-page' path='/user' component={User}/>
                    <Route key='edit-page' path='/edit' component={Edit}/>
                    <Route key='client-template' path='/client_template' component={ClientTemplate}/>
                    <Route key='client-edit' path='/client_edit' component={ClientEdit}/>
                </div>
            </AuthContext.Provider>

    );
}

export default Navigation
