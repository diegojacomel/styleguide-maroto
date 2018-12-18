// Modules
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/themes';

// Components
import Icon from './Icon';

// Unmount and cleanup DOM after the test is finished
afterEach(cleanup)

describe("Test Icon component", () => {
    // Tests

    test("It's present in the document", () => {
        const { getByTestId, } = render(
            <ThemeProvider theme={theme}>
                <Icon />
            </ThemeProvider>
        );
        
        const element = getByTestId('icon');

        expect(element).toBeInTheDocument();
    })

    test("Generate snapshots", () => {
        const { container, } = render(
            <ThemeProvider theme={theme}>
                <Icon tag="home" iconSize="md" iconColor="white" />
            </ThemeProvider>
        );

        expect(container.firstChild).toMatchSnapshot();
    })
})