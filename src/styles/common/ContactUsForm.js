import styled from 'styled-components';

export const ContactUsForm = styled.form`
    justify-content: space-around;
    margin-bottom: 40px;

    .left-inputs {
        flex-direction: column;
    }

    .right-input {
        display: flex;

        textarea {
            width: 80%;
        }
    }

    input,
    textarea {
        border: none;
        border-bottom: solid 1px #d2d2d2;
        resize: none;
        padding-left: 10px;
        padding-bottom: 5px;
        margin-bottom: 30px;
        position: relative;
    }

    input::placeholder,
    textarea::placeholder {
        color: #495057;
        opacity: .5;
    }

    button {
        padding: 12px 50px;
        border: none;
        outline: none;
        background: #c91f25;
        border-radius: 4px;
        color: white;
        margin-top: 30px;
    }

    .required-alert {
        position: absolute;
        right: 25px;

        svg {
            font-size: 7px;
            color: #c91f25;
        }

        &-email {
            top: 0px;
        }

        &-name {
            top: 50px;
        }

        &-title {
            top: 100px;
        }

        &-description {
            top: 0px;
            right: 130px;

            @media(max-width: 991px) {
                right: 100px;
            }

            @media(max-width: 767px) {
                right: 25px;
            }
        }
    }

    .custom-alert {
        position: absolute;
        display: flex;
        align-items: center;
        color: #c91f25;
        opacity: .8;
        left: 25px;

        svg {
            font-size: 10px;
            margin-right: 3px;
        }

        span {
            font-size: 13px;
        }

        &-email {
            top: 30px;
        }
        
        &-name {
            top: 91px;
        }

        &-title {
            top: 151px;
        }

        &-description {
            top: 153px;
        }
    }

    @media(max-width: 768px) {
        .right-input textarea {
            width: 100%;
            height: 100px;
        }
    }
`;