import styled from "styled-components";
import OrangeImg from "../assets/images/bg_banner.jpg";
import InnerBg from "../assets/images/innerLogo.png"

const Box = styled.div`
    background: url(${OrangeImg});
  background-size: 100%;
  background-attachment: fixed;
  color: #fff;
  box-sizing: border-box;

  .inner{
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
  }
  .mainContent{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a{
    color: #fff;
  }
`

const InnerCenter = styled.div`
  width: 100%;
  height: 300px;
  background: url(${InnerBg}) center;
  background-repeat: no-repeat;
  background-size: 300px 300px;
`

const TipsBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  padding-top: 50px;
  span{
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 20px;
  }
`
export default function SubTit(){
    return <Box>
        <div className="inner">
            <div className="mainContent">
                <InnerCenter>
                    <TipsBox>
                        <span>Web3</span>
                        <span>·</span>
                        <span>Tutorials</span>
                        <span>·</span>
                        <span>Practices</span>
                        <span>·</span>
                        <span>Experience</span>
                    </TipsBox>
                </InnerCenter>
            </div>
        </div>
    </Box>
}
