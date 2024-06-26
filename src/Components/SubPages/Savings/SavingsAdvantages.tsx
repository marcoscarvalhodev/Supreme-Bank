import React from 'react';
import { StyledSavingsAdvantages } from '../../../Styles/SubPages/Savings/SavingsAdvantages.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Icons from '../../Reusable/Icons';
import IconCheck from '../../../assets/svg/icon-check.svg?react';
import LookingPhone from '../../../assets/img/savings/man-looking-bank.webp';

const SavingsAdvantages = () => {
  return (
    <StyledSavingsAdvantages className='container'>
      <div className='advantages-flex'>
        <StyledHeadings as='h5'>
          {ContentAccountTypes.Savings.savings_advantages.h5_subtitle}
        </StyledHeadings>

        <StyledHeadings as='h2' className='title-advantages'>
          {ContentAccountTypes.Savings.savings_advantages.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' className='description-advantages'>
          {ContentAccountTypes.Savings.savings_advantages.p_description}
        </StyledTexts>

        <ul>
          {ContentAccountTypes.Savings.savings_advantages.bullets.map(
            ({ id, bullet_description }) => {
              return (
                <li key={id} className='bullet-wrapper-advantages'>
                  <div className='bullet-advantages bullet-1'>
                    <Icons>
                      <IconCheck />
                    </Icons>
                  </div>
                  <div className='bullet-advantages bullet-2'>
                    <StyledTexts $size='p4'>{bullet_description}</StyledTexts>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>

      <div className='advantages-flex flex-2'>
        <img src={LookingPhone} alt='' className='advantages-image' />
      </div>
    </StyledSavingsAdvantages>
  );
};

export default SavingsAdvantages;
