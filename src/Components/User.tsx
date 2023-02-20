import React from 'react';

// string, number, boolean, void, null 

type UserProps = {name: string; age: number; isRegistered: boolean};

const User = ({name, age, isRegistered}: UserProps) => {
    return (
        <>
        <h1>{name}</h1>
        <p>{age}</p>
        {
            isRegistered? <p>Registered User</p> : <p>Not Registered</p>
        }




            
        </>
    );
};

export default User;