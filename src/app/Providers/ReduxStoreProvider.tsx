'use client';

import store from "@/app/store/store";
import React from "react";
import { Provider } from "react-redux";

const ReduxStoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxStoreProvider