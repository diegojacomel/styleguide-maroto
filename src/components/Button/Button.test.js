// Modules
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/themes';

// Components
import Button from './Button';

// Unmount and cleanup DOM after the test is finished
afterEach(cleanup)

describe("Test Button component", () => {
    // Tests
    test("Clicked", () => {
        const { getByTestId, } = render(
            <ThemeProvider theme={theme}>
                <Button>Click here</Button>
            </ThemeProvider>
        );
        
        const element = getByTestId('button');

        fireEvent.click(element);
    });

    test("It's present in the document", () => {
        const { getByTestId, } = render(
            <ThemeProvider theme={theme}>
                <Button>Click here</Button>
            </ThemeProvider>
        );
        
        const element = getByTestId('button');

        expect(element).toBeInTheDocument();
    })

    test("It have attributes", () => {
        const { getByTestId, } = render(
            <ThemeProvider theme={theme}>
                <Button type="button" color="primary" size="md" rounded="md" onClick={() => {}} block iconLeft outline disabled>Click here</Button>
            </ThemeProvider>
        );
        
        const element = getByTestId('button');

        expect(element).toHaveAttribute('type');
        expect(element).toHaveAttribute('color');
        expect(element).toHaveAttribute('disabled');
    })

    test("Generate snapshots", () => {
        const { container, } = render(
            <ThemeProvider theme={theme}>
                <Button type="button" color="primary" size="md" rounded="md" onClick={() => {}} block>Click here</Button>
            </ThemeProvider>
        );

        expect(container.firstChild).toMatchSnapshot();
    })
})