import styled from "styled-components";
import WhiteImg from "../assets/images/whiteLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons';
import {useNavigate} from "react-router-dom";

const Box = styled.div`
  background: #262626;
  color: #fff;
  padding: 60px 0 40px;
`

const FooterContainer = styled.div`
  display: flex;
  gap: 80px;
`

const LeftPanel = styled.div`
  flex: 0 0 calc(33.333% - 53px);
  display: flex;
  flex-direction: column;

  img{
    height: 40px;
    width: auto;
    margin-bottom: 20px;
    object-fit: contain;
    align-self: flex-start;
  }

  .desc{
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .social-icons{
    display: flex;
    gap: 20px;
    margin-bottom: 30px;

    a{
      color: #fff;
      opacity: 0.8;
      transition: opacity 0.3s ease;

      &:hover{
        opacity: 1;
      }
    }
  }

  .copy{
    font-size: 12px;
    opacity: 0.6;
    margin-top: auto;
  }
`

const RightPanel = styled.div`
  flex: 0 0 calc(66.667% - 27px);
  display: flex;
  justify-content: flex-end;
  gap: 80px;
`

const ColumnList = styled.div`
  .column-title{
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;

    li{
      margin-bottom: 12px;

      a{
        color: #fff;
        opacity: 0.7;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover{
          opacity: 1;
        }
      }

      span{
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;

        &:hover{
          opacity: 1;
        }
      }
    }
  }
`
export default function Footer(){
    const navigate = useNavigate();
    const toGo = (selector) =>{
        navigate(selector)
    }

    return <Box>
        <div className="mainContent">
            <FooterContainer>
                <LeftPanel>
                    <img src={WhiteImg} alt="Web3Camp Logo"/>
                    <div className="desc">
                        Web3Camp.us is a platform that provides tools and resources for Web3 enthusiasts.
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} style={{fontSize:"24px"}} />
                        </a>
                        <a href="https://twitter.com/Web3Camp" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{fontSize:"24px"}} />
                        </a>
                    </div>
                    <div className="copy">© 2024 Web3Camp Labs</div>
                </LeftPanel>

                <RightPanel>
                    <ColumnList>
                        <div className="column-title">Friends</div>
                        <ul>
                            <li><a href="https://rebase.network/" target="_blank" rel="noreferrer">Rebase</a></li>
                            <li><a href="https://xdag.io/" target="_blank" rel="noreferrer">XDAG</a></li>
                            <li><a href="https://learnblockchain.cn/" target="_blank" rel="noreferrer">登链社区</a></li>
                            <li><a href="https://openbuild.xyz" target="_blank" rel="noreferrer">OpenBuild</a></li>
                        </ul>
                    </ColumnList>

                    <ColumnList>
                        <div className="column-title">Resources</div>
                        <ul>
                            <li><span onClick={()=>toGo("/tools")}>Tools</span></li>
                            <li><span onClick={()=>toGo("/tutorial")}>Tutorial</span></li>
                            <li><span onClick={()=>toGo("/tasks")}>Tasks</span></li>
                            <li><span onClick={()=>toGo("/news")}>News</span></li>
                        </ul>
                    </ColumnList>
                </RightPanel>
            </FooterContainer>
        </div>
    </Box>
}
