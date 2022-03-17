import {ApolloProvider} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {client} from './apollo';
import {App} from './components/app';
import reportWebVitals from './reportWebVitals';
import "./styles/styles.css";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {STRIPE_PUBLIC_KEY} from "./constants";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Elements stripe={stripePromise}>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </Elements>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
