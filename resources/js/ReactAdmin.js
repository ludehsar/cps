import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./shared/components/Pace";
import { SnackbarProvider } from 'notistack';

const AdminComponent = lazy(() => import("./admin/components/Main"));

function ReactAdmin() {
    return (
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <GlobalStyles />
                    <Pace color={theme.palette.primary.light} />
                    <Suspense fallback={<Fragment />}>
                        <Switch>
                            <Route>
                                <AdminComponent />
                            </Route>
                        </Switch>
                    </Suspense>
                </MuiThemeProvider>
            </BrowserRouter>
        </SnackbarProvider>
    );
}

serviceWorker.register();

export default ReactAdmin;
