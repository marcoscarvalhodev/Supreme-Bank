import React from 'react';

import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentAccountTypes } from '../../../Contents';
import Button from '../../Reusable/Button';
import Pig from './Pig';
import { StyledSavingsHero } from '../../../Styles/SubPages/Savings/SavingsHero.styled';
import CoinPile from '../../../assets/img/savings/coin-pile-wrapper.webp';
import MoneyBag from '../../../assets/img/savings/money-bag.webp';
import ShadowPig from '../../../assets/svg/savings/pig-coin/shadow.svg?react';

interface SavingsHeroProps {
  small: boolean;
}

const SavingsHero = ({ small }: SavingsHeroProps) => {
  return (
    <StyledSavingsHero className={`container`}>
      <div className='flex-hero flex-hero-1'>
        <StyledHeadings as='h5'>
          {ContentAccountTypes.Savings.h5_subtitle}
        </StyledHeadings>

        <StyledHeadings as='h2' className='title-hero'>
          {ContentAccountTypes.Savings.h2_title}
        </StyledHeadings>

        <StyledTexts $size='p1'>
          {ContentAccountTypes.Savings.p_description}
        </StyledTexts>

        <div className='buttons-flex-hero'>
          <Button>{ContentAccountTypes.Savings.link_button_1}</Button>
          <Button light={true}>
            {ContentAccountTypes.Savings.link_button_2}
          </Button>
        </div>
      </div>
      <div className='flex-hero flex-hero-2'>
        <Pig small={small} />

        <div className='coin-pile-wrapper'>
          <img src={CoinPile} alt='' className='coin-pile' />
        </div>

        <div className='money-bag-wrapper'>
          <img src={MoneyBag} alt='' className='money-bag' />
        </div>

        <ShadowPig className='shadow-pig' />
      </div>
    </StyledSavingsHero>
  );
};

export default SavingsHero;
