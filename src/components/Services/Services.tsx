import React from 'react';
import type { Service } from '../../types';
import ContentSection from '../ui/ContentSection/ContentSection';

const Services: React.FC = () => {
  const servicesItems : Service[] = [
    {
      id: 1,
      title: 'Фортепиано для детей',
      description: 'Развиваем слух, моторику и любовь к искусству: от первой ноты до первых аплодисментов. Доступны онлайн и офлайн занятия',
      ageGroup: '3+ лет',
      image: '/images/photo_serv_1.jpg'
    },
    {
      id: 2,
      title: 'Фортепиано для взрослых',
      description: 'Обучение с нуля или продолжение занятий. Освоение нотной грамоты и исполнение любимых произведений. Онлайн и офлайн формат',
      ageGroup: '18+ лет',
      image: '/images/photo_serv_2.jpg'
    },
    {
      id: 3,
      title: 'Сольфеджио',
      description: 'Подготовка к экзаменам без нервов. Восполним пробелы, отшлифуем программу. Проводим онлайн и очно',
      ageGroup: '7+ лет',
      image: '/images/photo_serv_3.jpg'
    },
  ];

 return (
    <ContentSection
      items={servicesItems}
      sectionId="services"
      sectionTitle="Направления обучения"
      additionalInfo="Все занятия доступны в офлайн и онлайн форматах!"
    />
);
};

export default Services;