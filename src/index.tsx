import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './pages';
import {apolloClient} from "./config";
import {ApolloProvider} from "@apollo/client/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
        <Root />
    </ApolloProvider>
  </React.StrictMode>
);
