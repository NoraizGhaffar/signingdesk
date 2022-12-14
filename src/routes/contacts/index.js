/* eslint-disable */
import React from "react";
import { Route, Switch } from "react-router-dom";

import ContactsList from "Container/contacts/ContactsList";

const Contacts = ({ match }) => (
    <div className="content-wrapper">
        {console.log('ContactsList:', match)}
        <Switch>
            {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/`} /> */}
            <Route path={`${match.url}/`} component={ContactsList} />
        </Switch>
    </div>
);


export default Contacts;
