import React from "react";

export default function typeMessageSwitcher(type: 'fail' | 'success'): {
    icon: React.ClassicElement<any>
    color: 'yellow' | 'green'
} {
    switch (type) {
        case 'fail':
            return {
                icon:
                    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-exclamation"
                         fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>,
                color: 'yellow'
            }

        case 'success':
            return {
                icon:
                    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-check"
                         fill="green"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                    </svg>,
                color: 'green'
            }
    }
}