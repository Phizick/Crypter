import React from "react";
import styled from "styled-components";
import {
    PRIMARY_BLUE,
    NEUTRAL_GRAY,
    NEUTRAL_SNOWWHITE, PRIMARY_GREEN, PRIMARY_PINK, PRIMARY_VIOLET
} from '../Constants/Colors/Colors';
import { TEXT_STYLES } from '../Constants/Typography/Typography';
import {render} from "@testing-library/react";


const Label = styled.div`
display: flex;
justify-content: center;
align-items: center;  
 border-radius: 4px;
padding: 8px 8px 6px 8px;
color: ${NEUTRAL_SNOWWHITE};
${Object.entries(TEXT_STYLES.TEXT_HAIRLINE_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')}
width: fit-content;


&.black {
    background-color: ${NEUTRAL_GRAY};    
    
    &.ghost {
      color: ${NEUTRAL_GRAY};
      border: 2px solid ${NEUTRAL_GRAY};
      background-color: transparent;
    }
}

&.green {
    background-color: ${PRIMARY_GREEN};

    &.ghost {
      color: ${PRIMARY_GREEN};
      border: 2px solid ${PRIMARY_GREEN};
      background-color: transparent;
    }   
  }
  
  &.red {
    background-color: ${PRIMARY_PINK};

    &.ghost {
      color: ${PRIMARY_PINK};
      border: 2px solid ${PRIMARY_PINK};
      background-color: transparent;
    }    
  }

  &.blue {
    background-color: ${PRIMARY_BLUE};

    &.ghost {
      color: ${PRIMARY_BLUE};
      border: 2px solid ${PRIMARY_BLUE};
      background-color: transparent;
    }   
  }

  &.purple {
    background-color: ${PRIMARY_VIOLET};

    &.ghost {
      color: ${NEUTRAL_GRAY};
      border: 2px solid ${NEUTRAL_GRAY};
      background-color: transparent;
    }   
  }
`;

it("should render the label properly", () => {
    const { getByText } = render(<Label color="primary" state="solid" payload={'hello'}/>);
    const label = getByText("hello");

    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("primary");
    expect(label).not.toContainText(".ghost");
    expect(label).not.toContainText(".red");
    expect(label).not.toContainText(".blue");
    expect(label).not.toContainText(".purple");
});