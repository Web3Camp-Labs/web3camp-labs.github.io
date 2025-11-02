import styled from "styled-components";
import BgImg from "../assets/images/bg2.jpeg";
import EarthImg from "../assets/images/btmEarth.png";

const Box = styled.div`
  color: #000;
  box-sizing: border-box;
  padding-bottom: 60px;
  background: #f8f8f8;
  .mainContent{
    background:url(${BgImg}) no-repeat right center;
    background-size: 100%;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  .inner{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    backdrop-filter: blur(4px);
    padding:50px;
    height: 100%;
    box-sizing: border-box;
    background: url(${EarthImg}) no-repeat 100% center;
    background-size: auto 140%;
  }
  a{
    color: #000;
  }
`
const LftBox = styled.div`
  .titleJoin{
    font-family: "Jost-Bold";
    font-size: 22px;
    padding-bottom: 20px;
  }
  .tips{
    font-size: 16px;
    width: 60%;
    line-height: 1.5em;
  }
`

const RhtBox = styled.div`
    flex-shrink: 0;
  border-radius: 10px;
  padding: 10px 20px;
  font-family: "Jost-SemiBold";
  margin-top: 40px;
  background: #f3801f;
  color: #fff;
  min-width: 150px;
  text-align: center;
`
export default function Line(){
    return <Box>

        <div className="mainContent wow animate__animated animate__backInRight" data-wow-offset="450">
            <div className="inner">
                <LftBox>
                    <div className="titleJoin">Contribute to  Us</div>
                    <div className="tips">This website is open source with a lot of contributors. You can propose edits to any of the content on this site, suggest awesome new features, or help us squash bugs.

                        Whether you are a developer, investor, researcher, or just a casual user who wants to learn about Web3 technologies, Web3Camp can provide you with useful resources, knowledge, and support to help you better explore and apply Web3 technologies.</div>
                </LftBox>
            <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer">
                <RhtBox>Join Us</RhtBox>
            </a>

            </div>

        </div>
    </Box>
}
