import React, {useState} from 'react';
import {Link} from "react-router-dom";

type Props = {
    client: any
};
export const AddTemplateButton = ({client}: Props) => {

    const [onHover, setOnHover] = useState<boolean>(false)

    return (
        <Link onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} title='Create invoice' to={
            {
                pathname: '/client_template',
                state: client
            }
        }
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke={onHover ? 'rgba(84,58,183,1)' : 'rgba(107, 114, 128)'}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
        </Link>
    );
};