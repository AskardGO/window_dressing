import React from 'react';
import {ToastMessage} from "./message";
import {NotificationContext} from "./NotificationContext";

type Props = {

};
export const Notification = (props: Props) => {

    const ctx = React.useContext(NotificationContext)
    const ref = React.useRef(null)

    return (

            <div style={{zIndex: 99999}} className='absolute flex flex-col w-72 right-2 bottom-0 opacity-100' ref={ref}>
                {
                    ctx && ctx.messages.map((el: { type: 'fail' | 'success'; message: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>; duration: number; }) => <ToastMessage type={el.type} message={el.message} duration={el.duration} element={ref}/>)
                }
            </div>


    );
};