import React from 'react';
import { StyledPeople } from '../../../Styles/Home/People/People.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentPeople } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import SVGPeople from './SVGPeople';

import People1 from '../../../assets/img/elderly-holding-phone.jpg';
import People2 from '../../../assets/img/woman-looking-phone-drinking-coffe.jpg';
import People3 from '../../../assets/img/man-holding-bank-pig.jpg';
import People4 from '../../../assets/img/woman-holding-card.jpg';
import People5 from '../../../assets/img/woman-looking-phone-surprised.jpg';
import People6 from '../../../assets/img/woman-looking-laptop.jpg';
import IconCheck from '../../../assets/svg/icon-check.svg';
import Icons from '../../Reusable/Icons';

import ContainerSizes from '../../../ContainerSizes';

interface PeopleProps {
  smallState: 'desktop' | 'mobile';
}

const People = ({smallState} : PeopleProps) => {
  const {small, xsmall, xlarge, large, medium} = ContainerSizes()
  return (
    <StyledPeople
      
      $small={small}
      $xsmall={xsmall}
      className='container container-people'
    >
      <div className='flex-item-4-people'>
        <StyledHeadings className='subtitle' as='h5' $device={smallState}>
          {ContentPeople.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings className='title' as='h2' $device={smallState}>
          {ContentPeople.h2_title}
        </StyledHeadings>
        <StyledTexts as='p' $size='p1' $device={smallState}>
          {ContentPeople.p_description}
        </StyledTexts>

        <ul className='people-list'>
          {ContentPeople.list_bulets.map(
            ({ bullet_id, bullet_title, bullet_description, bullet_icon }) => {
              return (
                <li key={bullet_id} className='list-wrapper'>
                  <Icons inheritedClass='bullet-icons'>{bullet_icon}</Icons>
                  <div className={`people-list-item bg-icon-check`}>
                    <StyledHeadings
                      className='bullet-title'
                      as='h5'
                      $device={smallState}
                    >
                      {bullet_title}
                    </StyledHeadings>

                    <StyledTexts as='p' $size='p4' $device={smallState} >
                      {bullet_description}
                    </StyledTexts>
                  </div>
                </li>
              );
            }
          )}
        </ul>
        <StyledTexts as='a' href='' $size='p1' $device={smallState} $link={true}>
          {ContentPeople.link_advantages}
        </StyledTexts>
        
      </div>
      
      <div className='flex-pics'>
      {!xsmall ? <div className='flex-item-3-people'>
        <SVGPeople
          class1='people-1'
          class2='people-2'
          width={`${small ? '276' : '345'}`}
          height={`${small ? '400' : '500'}`}
          svg1={People1}
          svg2={People2}
        />
      </div> : <></>}
      <div className='flex-item-1-people'>
        <SVGPeople
          class1='people-3'
          class2='people-4'
          width='235'
          height='340'
          svg1={People3}
          svg2={People4}
        />
        <SVGPeople
          class1='people-5'
          class2='people-6'
          width='235'
          height='235'
          svg1={People6}
          svg2={People5}
        />
      </div>

      </div>
      
    </StyledPeople>
  );
};

export default People;
