import React from 'react';
import styled from 'styled-components';
import DaoParkImg from './assets/images/news/daopark.png';
import RebaseImg from './assets/images/news/rebase.png';
import SeeDAOImg from './assets/images/news/seedao.png';

const NewsContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 40px 20px;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #2d3748;
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  color: #718096;
  margin-bottom: 60px;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.a`
  display: block;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 24px;
`;

const NewsTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 12px;
`;

const NewsDescription = styled.p`
  font-size: 15px;
  color: #718096;
  line-height: 1.6;
`;

const newsItems = [
  {
    title: 'DAO Montenegro Event',
    description: 'Join us for an exciting DAO event in Montenegro. Learn about decentralized governance and connect with the DAO community.',
    image: SeeDAOImg,
    link: 'https://www.eventbrite.hk/e/dao-montenegro-tickets-626996241637'
  },
  {
    title: 'Web3Camp x Rebase Collaboration',
    description: 'Web3Camp partners with Rebase Network to bring more Web3 education and tools to the community.',
    image: RebaseImg,
    link: 'https://rebase.network/posts/3227'
  },
  {
    title: 'DAO Park Launch',
    description: 'Explore DAO Park - a comprehensive collection of DAOs where you can discover and submit DAO information.',
    image: DaoParkImg,
    link: 'https://daopark.xyz/'
  }
];

export default function News() {
  return (
    <NewsContainer>
      <PageTitle>News & Events</PageTitle>
      <PageSubtitle>Stay updated with the latest from Web3Camp and our partners</PageSubtitle>

      <NewsGrid>
        {newsItems.map((item, index) => (
          <NewsCard key={index} href={item.link} target="_blank" rel="noreferrer">
            <NewsImage src={item.image} alt={item.title} />
            <NewsContent>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsDescription>{item.description}</NewsDescription>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
}
