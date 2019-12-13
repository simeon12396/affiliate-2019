import styled from 'styled-components';

export const TermsAndCondsWrapper = styled.section`
    padding: 20px 0 50px;

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

    h5 {
        font-size: 16px;
        font-weight: bold;
    }
`;