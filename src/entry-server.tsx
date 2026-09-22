import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import App from './App';

export function render() {
    return renderToString(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
