import React from "react";
import styled from 'styled-components';
import {
    PRIMARY_BLUE,
    NEUTRAL_GRAY,
   NEUTRAL_SNOWWHITE, PRIMARY_GREEN, PRIMARY_PINK, PRIMARY_VIOLET
} from '../../../Constants/Colors/Colors';
import {TEXT_STYLES} from "../../../Constants/Typography/Typography";

interface ILabelProps {
    color: 'black' | 'green' | 'red' | 'blue' | 'purple';
    state: "solid" | "ghost";
    payload: string;
}

const Rectangle = styled.div<ILabelProps>`
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

const Label: React.FC<ILabelProps> = ({
    color,
    state,
    payload
                                                }) => {
    const labelClasses = `${color} ${state}`;

    return (
        <div>
                <Rectangle className={labelClasses} color={color} state={state} payload={payload}>
                    {payload}
                </Rectangle>


        </div>
    );
};

export default Label;