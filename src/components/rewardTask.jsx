import styled from "styled-components";
import Bg1 from "../assets/images/prize/1.png";
import Bg2 from "../assets/images/prize/2.png";
import Bg3 from "../assets/images/prize/3.png";

const Box = styled.div`
    padding: 80px 0;
  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const UlBox = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  li{
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    width: 48%;
    margin-bottom:100px;
    border-radius: 10px;
    padding: 50px 20px 20px;
    box-sizing: border-box;
    position: relative;
    background: #fff;

    .symbol{
      position: absolute;
      top: -50px;
      left: calc( 50% - 50px);
      z-index: 99;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 120px;

    }
    &:nth-child(3n+1){
      .symbol{
        background:#fff url(${Bg1}) center;
        background-size:  50px;
        background-repeat: no-repeat;
      }
    }
    &:nth-child(3n+2){
      .symbol{
        background:#fff  url(${Bg2}) center;
        background-size:  50px;
        background-repeat: no-repeat;
      }
    }
    &:nth-child(3n){
      .symbol{
        background:#fff  url(${Bg3}) center;
        background-size:  50px;
        background-repeat: no-repeat;
      }
    }
   
  }
  dl{
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  dt{
    background: #f1f1f1;
    padding:5px 20px;
    font-weight: bold;
    min-width: 90px;
    margin-right: 20px;
    line-height: 20px;
  }
  dd{
    line-height:30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
  }
`
const BtnBox = styled.div`
    margin: 20px auto;
    border:2px solid #f3801f;
    width: 60%;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    color: #f3801f;
    cursor: pointer;
`

export default function Tasks(){
    return <Box id="tutorial" className="wow animate__animated animate__bounceInLeft" data-wow-offset="500">
        <div className="mainContent">
            <div className="titleBold">
                Reward Tasks
            </div>
            <UlBox>
                {
                    [...Array(12)].map((item,index)=>(
                        <li>
                            <div className="symbol" />
                            <dl>
                                <dt>Rewards</dt>
                                <dd>1000 USDT</dd>
                            </dl>
                            <dl>
                                <dt>Required</dt>
                                <dd>None</dd>
                            </dl>
                            <dl>
                                <dt>Deadline</dt>
                                <dd>2023/08/31</dd>
                            </dl>
                            <dl>
                                <dt>Description</dt>
                                <dd>
                                    This website is open source with a lot of contributors. You can propose edits to any of the content on this site, suggest awesome new features, or help us squash bugs. Whether you are a developer, investor, researcher, or just a casual user who wants to learn about Web3 technologies, Web3Camp can provide you with useful resources, knowledge, and support to help you better explore and apply Web3 technologies.</dd>
                            </dl>
                            <BtnBox>Apply Now</BtnBox>
                        </li>
                    ))
                }
            </UlBox>
        </div>
    </Box>
}
