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
    }

    @media(max-width: 768px) {
        .right-input textarea {
            width: 100%;
            height: 100px;
        }
    }
`;