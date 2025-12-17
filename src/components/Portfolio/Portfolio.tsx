import React from 'react';
import type { PortfolioItem } from '../../types';
import ContentSection from '../ui/ContentSection/ContentSection';

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Ученики — победители',
      description: 'Наши ученики принимают участие в различных конкурсах и занимают призовые места',
      image: '/images/portfolio_1.jpg'
    },
    {
      id: 2,
      title: 'Концертные выступления',
      description: 'Ежегодные концерты и участие в музыкальных мероприятиях',
      image: '/images/portfolio_2.jpg'
    },
    {
      id: 3,
      title: 'Учебный процесс',
      description: 'Современные методики и индивидуальный подход к каждому ученику',
      image: '/images/portfolio_3.jpg'
    }
  ];

 return (
    <ContentSection
      items={portfolioItems}
      sectionId="portfolio"
      sectionTitle="Наши успехи"
    />
  );
};

export default Portfolio;