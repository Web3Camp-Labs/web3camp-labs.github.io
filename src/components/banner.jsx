import styled from "styled-components";
import BgImg from "../assets/images/banner.png";
import Animation from "./animation";


const Box = styled.div`
    background: url(${BgImg}) no-repeat;
  background-size: 100%;
  box-sizing: border-box;
  padding-bottom: 60px;
`

const FirstLine = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
  gap: 60px;
  .lft{
    flex: 0 0 60%;
    max-width: 60%;
  }
  .titleBanner{
    font-family: "Jost-ExtraBold";
    font-size: 70px;
    line-height: 1.2em;
  }
  .Welcome{
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #f3801f;
    margin-bottom: 10px;
  }
  .tips{
    color: #8a8fa3;
    margin-top: 20px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 40px;
`

const PrimaryBtn = styled.a`
  background: #f3801f;
  display: inline-block;
  padding: 16px 40px;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(243, 128, 31, 0.3);

  &:hover {
    background: #e67316;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(243, 128, 31, 0.4);
    color: #fff;
  }
`

const SecondaryBtn = styled.a`
  background: transparent;
  display: inline-block;
  padding: 16px 40px;
  color: #2d3748;
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid #e2e8f0;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: #f3801f;
    color: #f3801f;
    transform: translateY(-2px);
  }
`

const RhtBanner = styled.div`
  flex: 0 0 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(243, 128, 31, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`

const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px 48px;
  box-shadow: 0 8px 24px rgba(45, 56, 68, 0.08);
  margin-top: 60px;
`

const StatItem = styled.div`
  text-align: center;

  .stat-number {
    font-family: "Jost-ExtraBold";
    font-size: 36px;
    color: #f3801f;
    line-height: 1.2;
  }

  .stat-label {
    color: #718096;
    font-size: 14px;
    margin-top: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`

export default function Banner(){
    const ISSUE_LINK = 'https://github.com/Web3Camp-Labs/Web3Camp-Labs.github.io/issues/new?assignees=xrdavies%2Cwendychaung&labels=NEW&template=new.yml&title=%5BNEW%5D%3A+';

    return <Box>
        <Animation>
        <div className="mainContent">
                <FirstLine>
                    <div className="lft">
                        <div className="Welcome">
                            Welcome to Web3Camp.us
                        </div>
                        <div className="titleBanner">
                            Tools and resources for all Web 3.0 enthusiasts
                        </div>
                        <div className="tips">
                            Sharpen your weapon and get started with Web 3.0 from here.
                        </div>
                        <ButtonGroup>
                            <PrimaryBtn href="#tools">Explore Tools</PrimaryBtn>
                            <SecondaryBtn href={ISSUE_LINK} target="_blank" rel="noreferrer">Submit Your Tool</SecondaryBtn>
                        </ButtonGroup>
                    </div>
                    <RhtBanner />
                </FirstLine>

                <StatsBar>
                    <StatItem>
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Tools</div>
                    </StatItem>
                    <StatItem>
                        <div className="stat-number">1000+</div>
                        <div className="stat-label">Users</div>
                    </StatItem>
                    <StatItem>
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Tutorials</div>
                    </StatItem>
                    <StatItem>
                        <div className="stat-number">Open Source</div>
                        <div className="stat-label">Community Driven</div>
                    </StatItem>
                </StatsBar>
        </div>
        </Animation>
    </Box>
}
