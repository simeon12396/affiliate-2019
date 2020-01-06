import styled from 'styled-components';

export const BreadcrumbWrapper = styled.div`
    .breadcrumb {
        justify-content: flex-end;
        background: none;
        width: 100%;
        padding-left: 0;
        padding-right: 0;

        @media(max-width: 576px) {
            justify-content: flex-start;
        }

        .breadcrumb-item {
            cursor: pointer;
            font-size: 17px;

            @media(max-width: 576px) {
                font-size: 15px;
            }

            &::before {
                font-weight: normal;
            }

            &:last-of-type {
                font-weight: 600;

                @media(max-width: 360px) {
                    width: 111px;
                }
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