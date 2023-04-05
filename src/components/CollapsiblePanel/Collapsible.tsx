import React from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import Accordion from './Accordion';
import { Wrapper } from './styles';


const Collapsible = (): JSX.Element => {
    return (
        <Wrapper>
            <div className='accordion'>
                <Accordion />
            </div>
        </Wrapper>
    );
};

export default Collapsible;