import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionItemProps {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItemProps[];
}

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionItem = styled.div<{ isOpen: boolean }>`
  background-color: #f0f0f0;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: height 1s ease;
`;

const AccordionTitle = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.isOpen ? '#ccc' : '#f0f0f0')};
  cursor: pointer;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  overflow: hidden;
  transition: max-height 1s ease;
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
`;

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex((prevIndex) => (index === prevIndex ? null : index));
    };

    return (
        <AccordionContainer>
            {items.map((item, index) => (
                <AccordionItem isOpen={index === openIndex} key={index}>
                    <AccordionTitle isOpen={index === openIndex} onClick={() => handleClick(index)}>
                        {item.title}
                    </AccordionTitle>
                    <AccordionContent isOpen={index === openIndex}>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </AccordionContainer>
    );
};

export default Accordion;