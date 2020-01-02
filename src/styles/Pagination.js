import styled from 'styled-components';

export const PaginationWrapper = styled.section`
    margin: 30px 0;

    .news-line {
        height: 1px;
        width: 70%;
    }

    ul {
        display: flex;
        justify-content: center;

        li {
            margin-right: 10px;
            height: 28px;
            background: #d80015;
            width: 28px;
            justify-content: center;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            -webkit-transition: .3s;
            transition: .3s;
            display: flex;
            align-items: center;

            &:hover {
                background: #982016;
            }
        }
    }
`;