import React from 'react';
import RoomProvider from "./context/Provider";
import Router from "./Router";
import FlashMessage from "react-native-flash-message";

export default () => {
    return (
        <RoomProvider>
            <Router />
            <FlashMessage position="top" />
        </RoomProvider>    
    );
};
