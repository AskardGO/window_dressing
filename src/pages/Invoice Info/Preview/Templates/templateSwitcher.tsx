// @flow
import * as React from 'react';
import {TemplateSecond} from "./template-2/Template-Second";
import {Invoice} from "../../../Invoices/InvoiceType";
import {TemplateFirst} from "./template-1/Template-First";

type Props = {
    template: 'DH' | 'T-2',
    invoice: Invoice
};
export const TemplateSwitcher = ({template, invoice}: Props) => {

    const templateSwitcher = () => {
        switch (template) {
            case ('DH'): return <TemplateSecond props={invoice}/>
            case ('T-2'): return <TemplateFirst props={invoice}/>
        }
    }

    return (
        <>
            {templateSwitcher()}
        </>
    );
};
