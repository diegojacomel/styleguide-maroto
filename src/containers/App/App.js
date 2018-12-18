// Modules
import React, { Component } from 'react';

// Theme Provider
import { ThemeProvider } from 'styled-components';

// Theme
import { theme } from '../../styles/themes';

// Components
import Button from '../../components/Button/Button';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Button type="button" color="primary" size="md" rounded="md" onClick={() => {}} block iconLeft outline disabled>
                        Click here
                    </Button>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
