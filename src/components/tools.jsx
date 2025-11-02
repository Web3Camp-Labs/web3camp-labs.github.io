import styled from "styled-components";
import ListJson from "../json/list.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink} from '@fortawesome/free-solid-svg-icons'

const Box = styled.div`
  padding: 80px 0;
  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .tools{
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #f3801f;
    background: #fff;
    //color: #8a8fa3;
    margin-bottom: 10px;
  }
`

const ListUl = styled.ul`
    width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  li{
    width: 30%;
    box-sizing: border-box;
    margin-right: 5%;
    margin-bottom: 100px;
    position: relative;
    cursor: pointer;
    &:nth-child(3n){
      margin-right: 0;
    }
    
    &:hover{
      .inner{
        box-shadow: 0 12px 30px rgba(45,56,68,.12);
      }
      .innerLine{
        background: #f3801f;
        border: 1px solid #f3801f;
      }
      .itemTitle{
        color: #fff;
      }
      .mask{
        display: flex;
      }
    }
    .mask{
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(255,255,255,0.5);
      backdrop-filter: blur(2px);
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .innerLine{
      border-radius: 10px;
      border: 1px solid #eee;
      height: 170px;
      display: flex;
      align-items: flex-end;
      margin:0 20px;
      box-sizing: border-box;
      padding: 5px 20px;
      background: #fff;
    }
  
    .inner{
      width:100%;
      height: 140px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      //box-shadow: 0 12px 30px rgba(45,56,68,.06);
      box-shadow: 0 2px 10px rgba(45,56,68,.1);
      left: 0;
      top: -20px;
      position: absolute;
    }
    .itemTitle{
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }
    img{
      width: 30%;
      margin-right: 20px;
    }
    .desc{
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }
  }
`
export default function ToolsCom(){
    return <Box id="tools" className="wow animate__animated animate__bounceInLeft" data-wow-offset="450">
        <div className="mainContent">
            <div className="tools">Our tools</div>
            <div className="titleBold">
                We Have Completed Latest Tools
            </div>
            <ListUl>
                {
                    ListJson.map((item,index)=>(<li key={index}>
                        <a href={item.href} target="_blank" rel="noreferrer" >
                        <div className="innerLine">

                            <div className="inner">
                                <div className="mask">
                                    <FontAwesomeIcon icon={faLink} size="3x" style={{color: "#f3801f"}} />
                                </div>
                                <img src={item.logo} alt=""/>
                                <div className="desc">
                                    {item.description}
                                </div>
                            </div>
                            <div className="itemTitle">{item.name}</div>
                        </div>
                        </a>

                    </li>))
                }

            </ListUl>
        </div>
    </Box>
}
