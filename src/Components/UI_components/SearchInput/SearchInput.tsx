import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import searchIcon from '../../../Images/Icons/white_search.png'
import {NEUTRAL_DARKSNOW, NEUTRAL_SNOWWHITE, PRIMARY_BLUE} from "../../../Constants/Colors/Colors";
import {TEXT_STYLES} from "../../../Constants/Typography/Typography";

interface SearchInputProps {
    onChange: (value: string) => void;
}

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;  
  border: 2px solid ${NEUTRAL_DARKSNOW};
  border-radius: 12px;
  width: 312px;
  height: 40px;
  background-color: ${NEUTRAL_SNOWWHITE};
  
`;

const SearchIcon = styled.div`
  background-color: ${PRIMARY_BLUE};
  margin-right: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  margin-left: 16px;  
  ${Object.entries(TEXT_STYLES.TEXT_CAPTION).map(([key, value]) => `${key}: ${value};`).join('\n')}
`;

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Search up')
    }
    return (
        <SearchInputContainer>
            <SearchInputField type="text" onChange={handleChange} placeholder={"Search everything"} />
            <SearchIcon>
                <img src={searchIcon} alt={'icon'}/>
            </SearchIcon>
        </SearchInputContainer>
    );
};

export default SearchInput;