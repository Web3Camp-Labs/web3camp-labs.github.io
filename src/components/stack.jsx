import styled from "styled-components";
import TutorialJson from "../json/tutorial.json";

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
  a{
    display: inline-block;
    width:48%;
    margin-bottom: 30px;
  }
    dl{
      width: 100%;
      height: 100%;
      background: #fff;
      box-shadow: 0 5px 10px rgba(0,0,0,0.1);
      border-radius: 10px;
      padding: 40px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      dt{
        color: #8a8fa3;
        padding-top: 10px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      img{
        max-height: 60px;
        margin-right: 40px;
      }
      
    }
`
export default function Stack(){
    return <Box id="tutorial" className="wow animate__animated animate__bounceInLeft" data-wow-offset="500">
        <div className="mainContent">
            <div className="titleBold">
                Tutorial
            </div>
            <UlBox>
                {
                    TutorialJson.map((item,index)=>( <a href={item.link} target="_blank" rel="noreferrer" key={index}>
                        <dl>
                            <img src={item.image} alt=""/>
                            <div>
                                <dt>{item.name}</dt>
                                <dd>
                                    {item.desc}
                                </dd>
                            </div>
                        </dl>
                    </a>))
                }
            </UlBox>
        </div>
    </Box>
}
