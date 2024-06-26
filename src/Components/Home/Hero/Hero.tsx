import React from 'react';
import { StyledHero } from '../../../Styles/Home/Hero/Hero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Button from '../../Reusable/Button';
import AppStore from '../../../assets/svg/appstore.svg?react';
import PlayStore from '../../../assets/svg/playstore.svg?react';
import IconCard from '../../../assets/svg/icon-card.svg?react';
import IconMobile from '../../../assets/svg/icon-mobile.svg?react';
import IconContactless from '../../../assets/svg/icon-contactless.svg?react';
import Card from './Card';
import { ContentHero } from '../../../Contents';
import { NavLink } from 'react-router-dom';

interface HeroProps {
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  loginState: boolean;
}

const Hero = ({
  mobileBx,
  setAccountState,
  loginState
}: HeroProps) => {
  const accountHandleClick = () => {
    setAccountState(2);
  };

  return (
    <StyledHero
      className={`container ${
        mobileBx ? 'hero-active-bx' : ''
      }`}
    >
      <div className='flex-item-1-hero'>
        <StyledHeadings as='h1'>{ContentHero.title}</StyledHeadings>
        <StyledTexts $size='p1'>{ContentHero.paragraph}</StyledTexts>

        <div
          className={`flex-interact`}
        >
          {loginState ? <></> : <NavLink to='/account' onClick={accountHandleClick}>
            <Button>Join Supreme Bank</Button>
          </NavLink>}
          <a
            href='https://www.apple.com/br/app-store'
            target='_blank'
            aria-label='apple button'
          >
            <AppStore className='appstore-icon' />
          </a>
          <a
            href='https://play.google.com/'
            target='_blank'
            aria-label='playstore button'
          >
            <PlayStore className='playstore-icon' />
          </a>
        </div>
      </div>

      <div className='flex-item-3-hero div-card'>
        <IconCard className='icon-card-hero dropshadow' />
        <IconMobile className='icon-mobile-hero dropshadow' />
        <IconContactless className='icon-contactless-hero dropshadow' />
        <Card />
      </div>
    </StyledHero>
  );
};

export default Hero;
