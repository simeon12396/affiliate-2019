import styled from 'styled-components';

export const AboutUsWrapper = styled.section`
    padding: 20px 0 50px;

    .breadcrumb {
        justify-content: flex-end;
        background: none;

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

    .about-text {
        margin-bottom: 1rem;
        font-family: "Open Sans", sans-serif;
        font-size: 15px;
        line-height: 1.45;
        color: rgb(134, 135, 139);
    }
`;

export const SubTitle = styled.h5`
    font-weight: 500;
`;

export const Options = styled.ul`
    padding-left: 20px;

    li {
        list-style: disc;
        ont-family: "Open Sans", sans-serif;
        font-size: 15px;
        line-height: 1.45;
        color: rgb(134, 135, 139);
        margin-bottom: 3px;
    }
`;