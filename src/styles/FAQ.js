import styled from 'styled-components';

export const FAQWrapper = styled.section`
    .breadcrumb {
        justify-content: flex-end;
        background: none;
        width: 95%;

        .breadcrumb-item {
            cursor: pointer;
            font-size: 17px;

            &::before {
                font-weight: normal;
            }

            &:last-of-type {
                font-weight: 600;
            }

            a {
                color: gray;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
`;