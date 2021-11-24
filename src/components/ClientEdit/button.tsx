import React, {useState} from 'react';
import {Link} from "react-router-dom";

type Props = {
    client: any
};
export const ClientEditButton = ({client}: Props) => {

    const [onHover, setOnHover] = useState<boolean>(false)

    return (
        <Link onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} title='Edit Client' to={
            {
                pathname: '/client_edit',
                state: client
            }
        }
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke={onHover ? 'rgba(84,58,183,1)' : 'rgba(107, 114, 128)'}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
        </Link>
    );
};