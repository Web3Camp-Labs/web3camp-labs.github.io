import styled from "styled-components";
import ResourceList from "../json/resourceList.json";

const Box = styled.div`
  padding: 60px 0 150px;
  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const UlBox = styled.ul`
    display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 80px;
  width: 100%;
  border-radius: 10px;
  li{
    box-shadow: 0 2px 10px rgba(45,56,68,.1);
    width: 23%;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 10px;
    background: #fff;
  }
  .title{
    font-family: "Jost-SemiBold";
    font-size: 18px;
    color: #000;
  }
  .subTitle{
    margin-bottom: 20px;
    opacity: 0.8;
  }
  .logo{
    min-height: 50px;
    display: flex;
    align-items: center;
    
  }
`

export default function Other(){
    return <Box id="other" className="wow animate__animated animate__pulse" data-wow-offset="550">
        <div className="mainContent">
            <div className="titleBold">
              Other Resources
            </div>
            <UlBox>
                {
                    ResourceList.map((item,index)=>(  <li key={index}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <div className="title">{item.title}</div>
                            <div className="subTitle">{item.subtitle}</div>
                            <div className="logo">
                                <img src={item.logo} alt=""/>
                            </div>
                        </a>
                    </li>))
                }
            </UlBox>
        </div>
    </Box>
}
