import styled from 'styled-components';

export const AboutMeSocialButtonsDiv = styled.div`
    & ul {
        padding: 0;
        margin: 0;
        margin-left: 10px;
        margin-top: 60px;
        //transform: translate(-50%, -50%);
        display: flex;

        & li {
            list-style: none;
            margin: 0 10px;
        
            & .fa {
                font-size: 30px;
                line-height: 60px;
                transition: .6s;
                color: var(--color);
            }

            & .fa:hover {
                color: var(--bg);
            }


            & a { 
                position: relative;
                display: block;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: var(--bg);
                text-align: center;
                transition: .6s;
                box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
            }

            & a:hover {
                
                color: var(--bg);
                transform: translate(0, -10px);
            }

            

    } 
    & li:nth-child(1) a:hover {
        color: var(--bg);
        background-color: #0d559e;
    }
    & li:nth-child(2) a:hover {
        color: var(--bg);
        background-color: #1877F2;
    }
    & li:nth-child(3) a:hover {
        color: var(--bg);
        background-color: #E4405F;
    }
    & li:nth-child(4) a:hover {
        color: var(--bg);
        background-color: #6cc644;
    }

}

`