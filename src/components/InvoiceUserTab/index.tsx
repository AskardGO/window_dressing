// @flow
import * as React from 'react';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import './style.css'
import {Invoice} from "../../pages/Invoices/InvoiceType";
import {UserTabComponent} from "../UserTabComponent";
import dateConverter from "../dateConverter";

type Props = {
    array: any
};

export const InvoiceUserTab = ({array}: Props) => {

    return (
        <>
            {
                array && array.length ? array.map((el: any, index: number) => {
                return <UserTabComponent array={el} isTabOpen={!index} _id={el._id}/>
            }) : <div> No data </div>
            }
        </>
    );
}
