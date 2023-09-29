import styled, { css } from "styled-components";

interface headingProps {
  $device: "desktop" | "mobile";
  as: "h1" | "h2" | "h3" | "h4" | "h5";
}

export const StyledHeadings = styled.h1<headingProps>`
  ${({ theme, as, $device }) => css`
    font-family: "Sora", sans-serif;

    //H1

    ${as === "h1" &&
    `
    color: ${theme.colors.black_auxiliary.black_dark};

    ${
      ($device === "desktop" &&
        `
    font-size: 6.4rem;
    line-height: 100%;
    `) ||
      ($device === "mobile" &&
        `
    font-size: 3.6rem;
      line-height: 120%;
    `)
    }
  `}

    //H2

    ${as === "h2" &&
    `

    ${
      ($device === "desktop" &&
        `
        font-size: 5.2rem;
        line-height: 110%;
    `) ||
      ($device === "mobile" &&
        `
        font-size: 3.6rem;
        line-height: 120%;
    `)
    }
  `}


//H3

${as === "h3" &&
    `

    ${
      ($device === "desktop" &&
        `
        font-size: 3.6rem;
        line-height: 120%;
    `) ||
      ($device === "mobile" &&
        `
        font-size: 2.4rem;
        line-height: 120%;
    `)
    }
  `}


//H4

${as === "h4" &&
    `

    ${
      ($device === "desktop" &&
        `
        font-size: 2.4rem;
        line-height: 130%;
    `) ||
      ($device === "mobile" &&
        `
        font-size: 1.8rem;
        line-height: 130%;
    `)
    }
  `}


//H5

${as === "h5" &&
    `
    text-transform: uppercase;
    background: linear-gradient(220.94deg, ${theme.colors.blue_main.primary_normal} 14.43%, ${theme.colors.blue_main.secondary_dark} 85.28%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    
    ${
      ($device === "desktop" &&
        `
        font-size: 1.8rem;
        line-height: 140%;
    `) ||
      ($device === "mobile" &&
        `
        font-size: 1.6rem;
        line-height: 150%;
    `)
    }
  `}
  `}
`;
