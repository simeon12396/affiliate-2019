import styled from 'styled-components';

export const HorizontalLine = styled.div`
    width: 88px;
    height: 2px;
    background-color: ${ props => props.red  ? '#c91f25' : '#fff' };
    margin: 0 auto 25px;
`;