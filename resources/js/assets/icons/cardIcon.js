import React from "react";

const cardIcon = (props) => {
    return (
        <div>
            <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.2501 9.0001C1.2501 6.37675 3.37675 4.2501 6.0001 4.2501H18.0001C20.6234 4.2501 22.7501 6.37675 22.7501 9.0001V15.0001C22.7501 17.6235 20.6234 19.7501 18.0001 19.7501H6.0001C3.37674 19.7501 1.2501 17.6235 1.2501 15.0001V9.0001ZM2.83706 8.2501H21.1631C20.8246 6.81675 19.5369 5.7501 18.0001 5.7501H6.0001C4.46331 5.7501 3.17565 6.81675 2.83706 8.2501ZM21.2501 9.7501H2.7501V15.0001C2.7501 16.795 4.20517 18.2501 6.0001 18.2501H18.0001C19.795 18.2501 21.2501 16.795 21.2501 15.0001V9.7501ZM13.2501 15.0001C13.2501 14.5859 13.5859 14.2501 14.0001 14.2501H18.0001C18.4143 14.2501 18.7501 14.5859 18.7501 15.0001C18.7501 15.4143 18.4143 15.7501 18.0001 15.7501H14.0001C13.5859 15.7501 13.2501 15.4143 13.2501 15.0001Z"/>
            </svg>
        </div>
    )
}

export default cardIcon
