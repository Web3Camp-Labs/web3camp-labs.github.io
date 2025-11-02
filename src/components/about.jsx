import styled from "styled-components";
import AboutImg from "../assets/images/about.jpg";

const Box = styled.div`
    padding: 80px 0;
  .mainContent{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const LftBox = styled.div`
    width: 450px;
  flex-shrink: 0;
  img{
    border-radius: 20px;
    width: 100%;
    
  }
`
const RhtBox = styled.div`
    flex-grow: 1;
  padding: 0 0 0 40px;
  .content{
    padding-top: 30px;
    color: #555;
    p{
      padding-bottom: 20px;
    }
  }
`
export default function About(){
    return <Box id="about" className="wow animate__animated animate__bounceInLeft" data-wow-offset="300">
        <div className="mainContent">
            <LftBox>
                <img src={AboutImg} alt=""/>
            </LftBox>
            <RhtBox>
                <div className="titleBold">
                    About Us
                </div>
                <div className="content">
                    <p>
                        Web3Camp is a community designed to help beginners understand and learn about Web3 technologies. This community brings together a group of like-minded people who are exploring and learning Web3 technologies together, sharing their experiences and knowledge, and helping beginners better understand and apply Web3 technologies.
                    </p>
                    <p>
                        In Web3Camp, people can find a variety of useful resources and tools, such as tutorials, videos, and blog posts, that can help beginners understand the basics and concepts of Web3 technologies. Community members also share their projects and experiences to help beginners gain a deeper understanding of Web3 technology applications and practices, and encourage people to learn and interact with each other.
                    </p>
                </div>
            </RhtBox>
        </div>
    </Box>
}