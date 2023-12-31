import React from 'react';
import { StyledBank } from '../../../Styles/SubPages/Checking/bank.styled';
import BankSVG from '../../../assets/svg/checking/bank.svg?react';
import Money from '../../../assets/svg/checking/money.svg?react';

interface BankProps {
  small: boolean;
}

const Bank = ({ small }: BankProps) => {
  return (
    <StyledBank $small={small}>
      <div className='bank-wrapper'>
        <BankSVG className='bank' />
        <Money className='money-1' />
        <Money className='money-2' />
      </div>
    </StyledBank>
  );
};

export default Bank;
