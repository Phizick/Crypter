import React, { useState } from "react";
import styled from "styled-components";
import {NEUTRAL_LIGHTGRAY, NEUTRAL_SHADOW} from '../../../Constants/Colors/Colors'
import {TEXT_STYLES} from "../../../Constants/Typography/Typography";

type TabProps = {
    active: boolean
}

const Tab = styled.button<TabProps>`
  background-color: ${props => props.active ? `${NEUTRAL_SHADOW}` : 'transparent'};
  border-radius: 100px;
  color: ${props => props.active ? 'white' : `${NEUTRAL_LIGHTGRAY}`};
  border: none;
  padding: 6px 12px;
  margin: 0 5px;
  cursor: pointer;
  align-items: center;
  ${Object.entries(TEXT_STYLES.TEXT_BUTTON_SMALL).map(([key, value]) => `${key}: ${value};`).join('\n')}


&:hover {
    opacity: 0.7;
}
`;

type TabSwitcherProps = {
    tabs: string[];
};

const TabSwitcher: React.FC<TabSwitcherProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    active={tab === activeTab}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </Tab>
            ))}
        </div>
    );
};

export default TabSwitcher;
