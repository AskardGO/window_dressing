import React from 'react';
import {Route, Switch} from "react-router-dom";
import Invoices from "../../pages/Invoices";
import InvoiceInfo from "../../pages/Invoice Info/InvoiceInfo";


function InvoiceSwitcher() {
    return (
            <Switch>
                <Route exact path='/' component={Invoices}/>
                <Route path='/invoices/:id' component={InvoiceInfo}/>
            </Switch>
    );
}

export default InvoiceSwitcher;
