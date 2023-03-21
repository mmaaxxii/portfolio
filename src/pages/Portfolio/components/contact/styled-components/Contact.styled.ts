import styled from "styled-components";



export const ContactSection = styled.section`
    width: 100%;
    overflow: hidden;
    background-color: var(--bg);
    .container {
        height: 100vh;
        min-height: 700px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        &>div {
            grid-column: 1/2;
            grid-row: 1/2;
        }
    }
    .left {
        width: 100%;
        max-width: 80rem;
        margin: 0 auto;
        padding: 65px 1.5rem 0 ;
        display: grid ;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        position: relative;
        z-index: 3;
        
    }
    .contact-heading h1 {
        font-weight: 600;
        color: var(--color);
        font-size: 3.5rem;
        line-height: 0.9;
        white-space: nowrap;
        margin-bottom: 1.2rem ;
    }

    .contact-heading span {
        color: var(--main-color);
    }
    
    .text {
        color: var(--color);
        line-height: 1.1;
        font-size: 1rem;
        & a {
            color: var(--main-color);
            transition: 0.3s;
            &:hover {
                color: var(--color);
            }
        }
    }

    .form-wrapper { 
        max-width: 32rem;
    }
    .contact-form {
        display: grid;
        margin-top: 2.55rem;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        row-gap: 1rem;
    }
    .input-wrap {
        position: relative;
        &.w-100 {
            grid-column: span 2;
        }
        & label {
            position: absolute;
            top: 50%;
            left: calc(1.35rem + 2px);
            transform: translateY(-50%);
            color: var(--color);
            pointer-events: none;
            transition: .25s;
        }
        & svg {
            position: absolute;
            right: calc(1.35rem + 2px);
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: var(--color);
            font-size: 1.25rem;
            transition: 0.3s;
        }
        
        
    }

    
    
    .contact-input {
        width: 100%;
        background-color: var(--input-bg);
        padding: 1.5rem 1.35rem calc(0.75rem - 2px) 1.35rem;
        border: none;
        outline: none;
        font-family: inherit;
        border-radius: 15px;
        color: var(--color);
        font-weight: 600;
        font-size: 0.95rem;
        border: 2px solid transparent;
        box-shadow: 0 0 0 1px var(--main-color);
        transition: 0.3s;
        &:hover {
            background-color: var(--input-bg-hover);
        }
    }
    
    textarea {
        &.contact-input {
            resize: none;
            width: 100%;
            min-height: 150px;
            &~label {
                top: 1.2rem;
                transform: none;
            }
            &~svg {
                top: 1.3rem;
                transform: none;
            }
        }
    } 

    .input-wrap.focus .contact-input {
        background-color: var(--bg);
        border: 2px solid  var(--main-color);
        box-shadow: 0 0 0 2px var(--input-bg-hover);  
    }

    .input-wrap.focus label {
        color: var(--main-color);
    }

    .input-wrap.focus svg {
        color: var(--main-color);
    }

    .input-wrap.not-empty label {
        font-size: .66rem;
        top: 0.75rem;
        transform: translateY(0);
    }
    .contact-buttons {
        display: grid;
        grid-template-columns: 1fr ;
        column-gap: 1rem;
        margin-top: 1rem;
        width: 100%;
        grid-column: span 2;
    }

    .btn {
        
        display: inline-block;
        padding: 1.1rem 2rem;
        background-color: var(--bg);    
        color: var(--main-color);
        border-radius: 15px;
        border: solid 1px var(--main-color);
        font-family: inherit;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            background-color: var(--main-color);
            color: var(--color);
        }
    }
    .btn.upload input {
        display: none;
    }

    .right { 
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        overflow: hidden;
        pointer-events: none;
    }
    .image-wrapper {
        position: relative;
        grid-column: 2;
        .img {
        position: absolute;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        }
        .wave-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 100%;
        background-color: var(--bg);
        & svg {
            position: absolute;
            height: calc(100% + 10px);
            top: 50%;
            transform: translateY(-50%);
            left: calc(100% - 2px);

        }
        }
    }
    
    
    #wave {
        fill: var(--bg);
        height: 100%;
    }

    .dashed-wave {
        position: absolute;
        z-index: 3;
        height: 130%;
        bottom: 60%;
        left: -28px;
        transform: translateY(50%);
    }
    #dashed-wave {
        fill: none;
        stroke: var(--main-color);
        stroke-width: 1px;
        stroke-dasharray: 6.5;
        opacity: 0.8;
    }

`