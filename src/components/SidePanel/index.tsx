import React from 'react';
import TreeNavigation from '../TreeNavigation';
import SliderFilter from '../SliderFilter';
import './SidePanel.css';

const SidePanel: React.FC = () => {


    return (
        <aside>
            <TreeNavigation />
            <SliderFilter />
        </aside>
    )

};

export default SidePanel;