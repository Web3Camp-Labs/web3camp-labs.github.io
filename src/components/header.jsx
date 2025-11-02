import styled from "styled-components";
import LogoImg from "../assets/images/web3logo.png";
import GithubImg from "../assets/images/github.png";
import TwitterImg from "../assets/images/Twitter.png";
import {useNavigate} from "react-router-dom";

const Box = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 12px 30px rgba(45,56,68,.05);
  padding: 20px 40px;
  .logo{
    height: 35px;
  }
`
const RhtBox = styled.div`
  display: flex;
  align-items: center;
    img{
      width: 20px;
      margin-left: 20px;
    }
`

const UlBox = styled.ul`
    display: flex;
  align-items: center;
  margin-right: 20px;
  li{
    margin-left: 40px;
    cursor: pointer;
  }
`
export default function Header(){
    const navigate = useNavigate();
    const toGo = (selector) =>{
        // document.querySelector(selector).scrollIntoView({
        //     behavior:"smooth"
        // });
        navigate(selector)

    }

    return <Box id="home">
        <div>
            <img src={LogoImg} alt="" className="logo" />
        </div>

        <RhtBox>
            <UlBox>
                <li onClick={()=>toGo("/Home")}>Home</li>
                {/*<li onClick={()=>toGo("/books")}>Books</li>*/}
                <li onClick={()=>toGo("/tools")}>Tools</li>
                <li onClick={()=>toGo("/tutorial")}>Tutorial</li>
                <li onClick={()=>toGo("/tasks")}>Tasks</li>
                <li onClick={()=>toGo("/news")}>News</li>
            </UlBox>
            <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer"> <img src={GithubImg} alt=""/></a>
            <a href="https://twitter.com/Web3Camp" target="_blank" rel="noreferrer"><img src={TwitterImg} alt=""/></a>

        </RhtBox>
    </Box>
}
