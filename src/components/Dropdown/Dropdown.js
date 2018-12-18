// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Icon from '../Icon/Icon';

// Styles
import styled from "styled-components";

const DropdownStyle = styled.div`
    display: block;
    border: 1px solid ${props => props.theme.colors.greyMedium};
    overflow: hidden;
    border-radius: 5px;
`

const Trigger = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 10px 15px;
    outline: none;
    cursor: pointer;
`

const Options = styled.div`
    display: block;
    transition: all 0.5s;
    font-size: ${props => props.showOptions ? props.theme.fontSize.md : "0"};
    padding: ${props => props.showOptions ? "5px 0" : "0"};
    max-height: ${props => props.showOptions ? "180px" : "0"};
    overflow: auto;
    border-top: ${props => props.showOptions ? `1px solid ${props.theme.colors.greyLight}` : "0"};
`

const Option = styled.div`
    padding: 0 15px;
    &:hover {
        background: ${props => props.theme.colors.greyLight};
        cursor: pointer;
    }
`

class Dropdown extends Component {
    state = {
        open: false
    }

    constructor(props) {
        super(props);

        this.triggerButton = React.createRef();
        this.closeOptions = this.closeOptions.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.closeOptions);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeOptions);
    }

    closeOptions() {
        this.setState({
            open: false
        });
    }

    handleClick = () => {
        const { state } = this;

        this.setState({
            open: !state.open
        });
    }

    optionSelected = (value) => {
        console.log(value)

        return value;
    }

    render() {
        const { state, props: { title, data, } } = this;

        return (
            <DropdownStyle>
                <Trigger onClick={() => this.handleClick()} rel={this.triggerButton}>
                    {title}
                    <Icon tag="angle-down" iconSize="lg" iconColor="greyDark" />
                </Trigger>
                <Options showOptions={state.open}>
                    {data
                        ?
                        data.map((item, index) => {
                            return (
                                <Option key={index} value={item} onClick={() => this.optionSelected(item)}>
                                    {item}
                                </Option>
                            )
                        })
                        :
                        ""
                    }
                </Options>
            </DropdownStyle>
        )
    }
}

Dropdown.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
}

Dropdown.defaultProps = {
    data: [],
    title: "Título"
}

export default Dropdown;

// Type = array or object