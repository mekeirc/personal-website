import styled, { css } from 'styled-components';

const Button = styled.a(({ theme }) => css`
    background: ${theme.colors.burntOrange};
    border: 0;
    padding: 10px;
    color: ${theme.colors.white};
    font-size: 20px;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;

    &:hover {
        color: ${theme.colors.white};
    }
`);

export default Button;