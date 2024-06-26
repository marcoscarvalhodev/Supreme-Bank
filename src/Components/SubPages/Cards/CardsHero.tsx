import React from 'react';
import { StyledCardsHero } from '../../../Styles/SubPages/Cards/CardsHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import Button from '../../Reusable/Button';
import { ContentCards } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Card1 from '../../../assets/svg/cards/card-1.svg?react';
import Card2 from '../../../assets/svg/cards/card-2.svg?react';

const CardsHero = () => {
  return (
    <StyledCardsHero className='container'>
      <div className='flex-hero'>
        <StyledHeadings as='h5'>
          {ContentCards.Cards.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title-hero'>
          {ContentCards.Cards.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1'>{ContentCards.Cards.p_description}</StyledTexts>

        <div className='buttons-flex-hero'>
          <Button>{ContentCards.Cards.link_button_1}</Button>
          <Button light={true}>{ContentCards.Cards.link_button_2}</Button>
        </div>
      </div>

      <div className='flex-hero flex-hero-2'>
        <div className='circle'>
          <Card1 className='card card-1' />
          <Card2 className='card card-2' />
        </div>
      </div>
    </StyledCardsHero>
  );
};

export default CardsHero;
