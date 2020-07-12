import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import ErrorBoundary from 'Util/ErrorBoundary';

const HomePage = lazy(() => import('./HomePage/HomePage'));

const Pages = () => {
    return(
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path={routes.HOME} exact component={HomePage} />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
    )   
}

export default Pages;