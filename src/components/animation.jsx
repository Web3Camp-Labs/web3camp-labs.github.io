import styled from "styled-components";
import Img1 from "../assets/images/banner/faucet.png";
import Img2 from "../assets/images/banner/ethers-tools.png";
import Img3 from "../assets/images/banner/multisender.png";
import Img4 from "../assets/images/banner/eth-diamond-black-white.jpeg";
import Img5 from "../assets/images/banner/signator.png";
import Img6 from "../assets/images/banner/chainlist.png";
import Img7 from "../assets/images/banner/web3logo.png"
import Img8 from "../assets/images/banner/web3logo2.png";
import "./ani.css";
// import Img7 from "../assets/images/banner/web3logo_out.png"
// import Img8 from "../assets/images/banner/web3logo_out2.png"


const Box  = styled.div`
  padding: 80px 0;
  position: relative;
`
const InnerBox = styled.div`

  .box {
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    position: absolute;
    top: 20%;
    right:20%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotateX(13deg);
    transform: rotateX(13deg);
    -webkit-animation: moveTop 5s linear infinite;
    animation: moveTop 5s linear infinite;
    cursor: pointer;
  }
  .minbox {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50px;
    top: 30px;
    -webkit-transform-style: preserve-3d;
  }
  .minbox li {
    width: 100px;
    height: 100px;
    position: absolute;
    border: 0.5px solid #eee;
    left: 0;
    top: 0;
  }
  .minbox li:nth-child(1) {
    background: url(${Img1}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: translateZ(50px);
  }
  .minbox li:nth-child(2) {
    background: url(${Img3}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(180deg) translateZ(50px);
  }
  .minbox li:nth-child(3) {
    background: url(${Img6}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(-90deg) translateZ(50px);
  }
  .minbox li:nth-child(4) {
    background: url(${Img4}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(90deg) translateZ(50px);
  }
  .minbox li:nth-child(5) {
    background: url(${Img5}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(-90deg) translateZ(50px);
  }
  .minbox li:nth-child(6) {
    background: url(${Img2}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(90deg) translateZ(50px);
  }



  .maxbox li:nth-child(1) {
    background: url(${Img7}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: translateZ(50px);
  }
  .maxbox li:nth-child(2) {
    background: url(${Img8}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: translateZ(50px);
  }
  .maxbox li:nth-child(3) {
    background: url(${Img7}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(-90deg) translateZ(50px);
  }
  .maxbox li:nth-child(4) {
    background: url(${Img7}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(90deg) translateZ(50px);
  }
  .maxbox li:nth-child(5) {
    background: url(${Img7}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(-90deg) translateZ(50px);
  }
  .maxbox li:nth-child(6) {
    background: url(${Img7}) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(90deg) translateZ(50px);
  }
  .maxbox {
    width: 800px;
    height: 400px;
    position: absolute;
    left: 0;
    top: -20px;
    -webkit-transform-style: preserve-3d;
  }
  .maxbox li {
    width: 200px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.4;
    -webkit-transition: all 1s ease;
  }
  .maxbox li:nth-child(1) {
    -webkit-transform: translateZ(100px);
  }
  .maxbox li:nth-child(2) {
    -webkit-transform: rotateX(180deg) translateZ(100px);
  }
  .maxbox li:nth-child(3) {
    -webkit-transform: rotateX(-90deg) translateZ(100px);
  }
  .maxbox li:nth-child(4) {
    -webkit-transform: rotateX(90deg) translateZ(100px);
  }
  .maxbox li:nth-child(5) {
    -webkit-transform: rotateY(-90deg) translateZ(100px);
  }
  .maxbox li:nth-child(6) {
    -webkit-transform: rotateY(90deg) translateZ(100px);
  }
  .box:hover ol li:nth-child(1) {
    -webkit-transform: translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(2) {
    -webkit-transform: rotateX(180deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(3) {
    -webkit-transform: rotateX(-90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(4) {
    -webkit-transform: rotateX(90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(5) {
    -webkit-transform: rotateY(-90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(6) {
    -webkit-transform: rotateY(90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }

`
export default function Animation(props){
    return <Box>
        <InnerBox >
            <div className="box">
                <ul className="minbox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ol className="maxbox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>

        </InnerBox>
        <>{props.children}</>
    </Box>
}
