import styled, { css } from 'styled-components';

interface HeroProps {
  
}

export const StyledHero = styled.section<HeroProps>`
  ${({ theme}) => css`
    && {
      .flex-item-1-hero {
        ${theme.boxProps.flex_items.flex_item_1};

        padding: ${theme.spacing.gap_3} 0;
        p {
          margin: ${theme.spacing.gap_2} 0;
        }
      }

      .flex-interact {
        ${theme.boxProps.flex.flex_start};
        gap: ${theme.spacing.gap_2};

        .playstore-icon {
          margin-top: 5px;

          
        }

        .playstore-icon, .appstore-icon {
          transition: ease 0.5s;
          &:hover {
            opacity: 0.8;
            transition: ease 0.5s;
          }
        }
      }

      .flex-item-3-hero {
        ${theme.boxProps.flex_items.flex_item_3};
        ${theme.boxProps.flex.flex_center};
        justify-content: center;
        align-items: center;

        align-self: center;

        padding: ${theme.spacing.gap_5} 0;
      }

      .div-card {
        ${theme.animations.card.div_card};
      }

      .dropshadow {
        ${theme.colors.drop_shadow};
      }

      .icon-card-hero {
        position: absolute;
        top: calc(50% - 160px);
        left: 50%;
        z-index: 998;
        animation: icons-hero 5s ease 0.5s infinite alternate;
      }

      .icon-contactless-hero {
        position: absolute;
        top: calc(50% + 120px);
        left: calc(50% + 50px);

        z-index: 998;
        animation: icons-hero 5s ease 1s infinite alternate;
      }

      .icon-mobile-hero {
        position: absolute;
        top: 50%;
        left: calc(50% - 250px);
        z-index: 998;
        animation: icons-hero 5s ease 2.5s infinite alternate;
      }

      @keyframes icons-hero {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(10px, -40px, 0);
        }
      }

      

      ${theme.media_query.small`
      flex-direction: column;
      height: auto;
      `}//query-small

      ${theme.media_query.xsmall`
        padding: ${theme.spacing.gap_3} 2.4rem;

        .icon-mobile-hero,
        .icon-contactless-hero,
        .icon-card-hero {
          width: 56px;
          height: 56px;
        }

        .icon-mobile-hero {
          left: calc(50% - 170px);
        }

        .icon-card-hero {
          top: calc(50% - 120px);
        }

        .icon-contactless-hero {
          top: calc(50% + 100px);
        }

        .flex-interact {
          .appstore-icon,
          .playstore-icon {
            width: 40px;
            height: 40px;
          }
        }

        .flex-item-3-hero {
          padding: 0px;
          align-items: center;
        }
      `};//query-extra-small

      

      ${theme.media_query.xlarge`
        display: grid;
        grid-template-columns: 1fr 1fr;

        .flex-item-3-hero {
          padding: ${theme.spacing.gap_3} 0;
          align-self: auto;
          flex-basis: auto;
        }
      `}//query-extra-large

      &.hero-active-bx {
        overflow-y: hidden;
      }
    }
  `}
`;
