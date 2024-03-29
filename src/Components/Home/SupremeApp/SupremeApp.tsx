import React from 'react';
import { StyledSupremeApp } from '../../../Styles/Home/SupremeApp/SupremeApp.styled';
import { ContentSupremeApp } from '../../../Contents';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Icons from '../../Reusable/Icons';
import PhoneMockup from '../../../assets/svg/figsb2.svg?react';


const SupremeApp = () => {
  return (
    <StyledSupremeApp
      className='container'
    >
      <div className='supremeapp-item-1 item-1'>
        <PhoneMockup className='phone-mockup' />
      </div>
      <div className='supremeapp-item-1'>
        {ContentSupremeApp.app_description.map(
          ({ h5_subtitle, h2_title, p_description, id }) => {
            return (
              <div key={id}>
                <StyledHeadings as='h5'>{h5_subtitle}</StyledHeadings>
                <StyledHeadings as='h2' className='title'>
                  {h2_title}
                </StyledHeadings>
                <StyledTexts $size='p1'>{p_description}</StyledTexts>
              </div>
            );
          }
        )}

        <ul className='supremeapp-list'>
          {ContentSupremeApp.app_bullets.map(
            ({ bullet_id, bullet_title, bullet_description, bullet_icon }) => {
              return (
                <li key={bullet_id} className='list-wrapper'>
                  <Icons inheritedClass='bullet-icons'>{bullet_icon}</Icons>
                  <div className='supremeapp-list-item'>
                    <StyledHeadings className='bullet-title' as='h5'>
                      {bullet_title}
                    </StyledHeadings>

                    <StyledTexts as='p' $size='p4'>
                      {bullet_description}
                    </StyledTexts>
                  </div>
                </li>
              );
            }
          )}
        </ul>

        <StyledTexts as='a' href='' $size='p1' $link={true} $arrow={true}>
          {ContentSupremeApp.link_supremeapp}
        </StyledTexts>
      </div>
    </StyledSupremeApp>
  );
};

export default SupremeApp;
