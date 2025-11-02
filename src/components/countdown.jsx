import styled from "styled-components";
import BgImg from "../assets/images/book-bg.png";
import CountUp from 'react-countup';

const Box = styled.div`
    background: url(${BgImg}) center;
  background-size: 100%;
  background-attachment: fixed;
  .inner{
    width: 100%;
    height: 100%;
  }
  .mainContent{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px 0;
  }
`

const UlBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
    li{
      color: #fff;
      width: 25%;
      display: flex;
      align-content: center;
      justify-content: center;
    }
  .lft{
  display:flex;
    align-items: flex-start;
    margin-right: 10px;
    font-size: 18px;
    span{
      font-family: "Jost-SemiBold";
      font-size: 40px;
    }
  }
  .rht{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .tit{
    font-size: 20px;
  }
  .tips{
    font-size: 14px;
    opacity: 0.6;
  }
`
export default function Countdown(){


    return <Box >
        <div className="inner">
            <div className="mainContent">
                <UlBox>
                    <li>
                        <div className="lft">
                            <span><CountUp end={182} enableScrollSpy /></span>
                        </div>
                        <div className="rht">
                            <div className="tit">DAO</div>
                            <div className="tips">collected</div>
                        </div>
                    </li>
                    <li>
                        <div className="lft">
                            <span> <span><CountUp end={552} enableScrollSpy /></span></span>
                        </div>
                        <div className="rht">
                            <div className="tit">Tokens Logo</div>
                            <div className="tips">Provide</div>
                        </div>
                    </li>
                    <li>
                        <div className="lft">
                            <span><span><CountUp end={266} enableScrollSpy /></span></span>+
                        </div>
                        <div className="rht">
                            <div className="tit">Chains' Faucet</div>
                            <div className="tips">Provide</div>
                        </div>
                    </li>
                    <li>
                        <div className="lft">
                            <span>    <span><CountUp end={843} enableScrollSpy /></span></span>+
                        </div>
                        <div className="rht">
                            <div className="tit">Chains' RPC</div>
                            <div className="tips">Provide</div>
                        </div>
                    </li>
                </UlBox>
            </div>
        </div>
    </Box>
}