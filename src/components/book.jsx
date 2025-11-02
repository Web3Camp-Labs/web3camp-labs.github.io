import styled from "styled-components";
import JsonList from "../json/books.json";
import {useEffect, useState} from "react";

const Box = styled.div`
    padding: 80px 0;
  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const UlBox = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
    li{
      width:23%;
      background: #fff;
      box-shadow: 0 2px 10px rgba(45,56,68,.1);
      border-radius: 10px;
      box-sizing: border-box;
      transition: all ease 0.5s;
      position: relative;
      overflow: hidden;
      padding: 40px;
      margin-bottom: 40px;
      &:hover {
        border-color: #f0f;
      }

      &:hover .projects-image,
      &:focus .projects-image {
        transform: rotate(0) translateY(0);
      }

      .popup-image {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

  .projects-image {
    display: block;
    width: 200px;
    transform: rotate(10deg) translateY(80px);
    transition: all ease 0.5s;
    box-shadow:  0 5px 5px rgba(0,0,0,0.3);
  }

  .projects-title {
    margin-bottom: 20px;
    font-family: "Jost-Bold";
    line-height: 24px;
    font-size: 16px;
    display: flex;
    align-items: center;
    height: 48px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  
`

// const ButtonBox = styled.div`
//     margin-top: 60px;
//
//   background: #f3801f;
//   display: inline-block;
//   padding: 16px 48px;
//   color: #fff;
//   border-radius: 10px;
//   margin-bottom: 50px;
// `
export default function BooksCom(){

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(JsonList.items)

    },[])

    return <Box id="books" className="wow animate__animated animate__pulse" data-wow-offset="500">
        <div className="mainContent">
            <div>
                <div className="titleBold">
                    Recommended
                </div>
            </div>
            <UlBox>
                {
                    list.map((item,index)=>( <li key={index} >

                        <div className="projects-thumb">
                            <div className="projects-title">{item.title}</div>

                            <a href={item.url} className="popup-image" target="_blank" rel="noreferrer">
                                <img src={require(`../assets/images/books/${item.id}.jpg`)}
                                     className="projects-image img-fluid" alt="" />
                            </a>
                        </div>
                    </li>))
                }
            </UlBox>
            <div>
                {/*<ButtonBox>Explore More</ButtonBox>*/}
            </div>
        </div>
    </Box>
}
