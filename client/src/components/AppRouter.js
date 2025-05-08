import React, {useContext} from "react";
import {Routes, Navigate, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routers";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Component}) =>
                <Route path={path} Component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} Component={Component} exact/>
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
    );
};

export default AppRouter;