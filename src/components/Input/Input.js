// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';

// Styles
import styled from 'styled-components';

const InputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputStyle = styled.input`
    display: block;
    padding: 8px 12px;
    border-radius: ${props => props.withButton ? `${props.theme.rounded[props.rounded]} 0 0 ${props.theme.rounded[props.rounded]}` : `${props.theme.rounded[props.rounded]}`};
    width: 100%;
    border: 1px solid ${props => props.theme.colors.greyMedium};
    outline: none;
    border-right: ${props => props.withButton ? 'none' : `1px solid ${props.theme.colors.greyMedium}`};
    transition: all 0.5s;
    & + button {
        border-radius: ${props => props.withButton ? `0 ${props.theme.rounded[props.rounded]} ${props.theme.rounded[props.rounded]} 0` : `${props.theme.rounded[props.rounded]}`};
    }
    &:focus {
        border-color: ${props => props.theme.colors[props.color]};
    }
`;

const handleChange = (e) => {
    console.log(e.target.value)

    return e;
};

const Input = ({ type, placeholder, color, rounded, withButton, buttonIcon, buttonIconSize, buttonIconColor, onClickButton, extraProps }) => (
    <InputWrap>
        <InputStyle
            type={type}
            placeholder={placeholder}
            color={color}
            rounded={rounded}
            onChange={(e) => handleChange(e)}
            withButton={withButton}
            {...extraProps}
        />
        {withButton
            ?
            <Button
                color={color}
                icon={buttonIcon}
                iconSize={buttonIconSize}
                iconColor={buttonIconColor}
                rounded={rounded}
                onClick={onClickButton}
            >
                Click here
            </Button>
            :
            ""
        }
    </InputWrap>
);

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    color: PropTypes.string,
    rounded: PropTypes.string,
    withButton: PropTypes.bool,
    buttonIcon: PropTypes.string,
    buttonIconSize: PropTypes.string,
    buttonIconColor: PropTypes.string,
    onClickButton: PropTypes.func
};

Input.defaultProps = {
    type: "text",
    placeholder: "Your text here",
    color: "primary",
    rounded: "md",
    withButton: false
};

export default Input;