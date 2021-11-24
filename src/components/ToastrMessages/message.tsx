import React from 'react';
import MessageComponent from "./MessageComponent";

type Props = {
    type: 'fail' | 'success'
    message: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    duration: number
    element: {
        current: any
    }
};

export const ToastMessage = ({type, message, duration, element}: Props) => {

    const [isAvailable, setIsAvailable] = React.useState<boolean>(true)
    const [opacity, setOpacity] = React.useState(1)
    const [onHover, setOnHover] = React.useState<boolean>(false)

    const closeMessage = () => {
        setOpacity(0)
        setTimeout(() => {
            setIsAvailable(false)
        }, 2000)
    }

    return (
        <>
            {
                isAvailable &&
                <div className='relative' onMouseEnter={() => setOnHover(true)}
                     onMouseLeave={() => setOnHover(false)}
                     style={{opacity: opacity, transition: '.3s'}}
                >
                    <MessageComponent type={type} message={message} close={closeMessage}
                                      duration={duration} element={element}/>
                    {
                        onHover && <div className='absolute right-0 top-0' onClick={() => setIsAvailable(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:stroke-indigo" fill="none"
                                 viewBox="0 0 24 24" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    }
                </div>
            }
        </>
    );
};