import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faPeopleArrows,faSpaceShuttle,faHandPeace,faComments } from '@fortawesome/free-solid-svg-icons'

const Box = styled.div`
background: #f8f8f8;
  padding: 80px 0;
  .mainContent{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  
`

const LftBox = styled.div`
  width: 25%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  .tools{
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #f3801f;
    //color: #8a8fa3;
    margin-bottom: 10px;
  }
  .tips{
    margin-top: 20px;
  }
`

const RhtBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  .line{
    width: 32%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
     dl{
    //border: 1px solid #eee;
       background: #fff;
       box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    width: 100%;
    padding: 30px;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 40px;
       .bt10{
         margin-bottom: 20px;
         color: #f3801f;
       }
       &:last-child{
         margin-bottom: 0;
       }
       &:hover{
         background: #f3801f;
         color: #fff;
         .bt10{
           color: #fff;
         }
       }
  }
  dt{
    font-family: "Jost-Bold";
    font-size: 24px;
    line-height: 1.2em;
    margin-bottom: 10px;
  }
  dd{
    opacity: 0.8;
  }
  
`

const BtnBox = styled.div`
    background: #f3801f;
  display: inline-block;
  margin-top: 40px;
  padding: 16px 48px;
  color: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
`
export default function Advantage(){
    return <Box id="join">
        <div className="mainContent">
            <LftBox className="wow animate__animated animate__bounceInLeft" data-wow-offset="400">
                <div>
                    <div className="titleBold">
                        Few Reasons Why People
                        Join Us!
                    </div>
                    <div className="tips">Web3Camp can provide help for beginners to better enter the Web3 industry and develop their careers.</div>
                </div>
                <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer">
                <BtnBox>
                    Explore More
                </BtnBox>
               </a>
            </LftBox>
            <RhtBox>
                <div className="line wow animate__animated animate__fadeInLeft" data-wow-offset="400">
                    <dl>

                        <FontAwesomeIcon icon={faCode} size="2x" className="bt10" />
                        <dt>Provide learning resources</dt>
                        <dd>Web3Camp provides comprehensive learning resources, including courses, tutorials, articles, sample code, and hands-on projects</dd>
                    </dl>
                    <dl>
                        <FontAwesomeIcon icon={faHandPeace} size="2x" className="bt10" />
                        <dt>Foster community values</dt>
                        <dd>Web3Camp has a strong community culture and values, including openness, inclusiveness, collaboration, innovation, and sustainability</dd>
                    </dl>
                </div>
                <div className="line wow animate__animated animate__fadeInLeft" data-wow-offset="400" data-wow-delay="0.2s">
                    <dl>
                        <FontAwesomeIcon icon={faPeopleArrows} size="2x" className="bt10" />
                        <dt>Encourage collaboration</dt>
                        <dd>Web3Camp encourages interaction and collaboration among members, shares problems and solutions, and promotes mutual support and encouragement among members.</dd>
                    </dl>

                </div>
                <div className="line wow animate__animated animate__fadeInLeft" data-wow-offset="400" data-wow-delay="0.4s">
                    <dl>
                        <FontAwesomeIcon icon={faComments} size="2x" className="bt10" />
                        <dt>Host events and competitions</dt>
                        <dd>Web3Camp usually hosts events and competitions such as hackathons, programming challenges, webinars, and offline meetups.</dd>
                    </dl>
                    <dl>
                        <FontAwesomeIcon icon={faSpaceShuttle} size="2x" rotation={270} className="bt10" />
                        <dt>Help beginners get into Web3</dt>
                        <dd>Web3Camp community members can share their practical experience and career advice to help beginners get into web3</dd>
                    </dl>
                </div>
            </RhtBox>
        </div>
    </Box>
}
