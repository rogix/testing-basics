import { App } from './app';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('App', () => {
    test('renders without crashing', () => {
        render(<App />);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    test('renders hello world', () => {
        render(<App />);
        const linkElement = screen.getByText(/hello world/i);
        expect(linkElement).toBeInTheDocument();
    });
});