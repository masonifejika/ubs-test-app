import React, { useContext } from 'react';
import ApplicationContext from '../../context/ApplicationContext';
import IApplicationContext from '../../types/ApplicationContext';
import './SliderFilter.css';

const SliderFilter: React.FC = () => {

    const applicationStore: IApplicationContext = useContext(ApplicationContext);

    const changeSliderValue: any = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let sliderValue: number = parseInt(e.target.value);
        e.target.style.backgroundSize = (sliderValue * 100) / 100000 + '% 100%'
        applicationStore.setMinimumSpend(sliderValue);
        applicationStore.filterTheData();
    };

    return (
        <div id="sliderFilter">
            <h4>Filter applications by minimum spend</h4>
            <input type="range" min="0" max="100000" step="1" onChange={changeSliderValue} />
            <span className="min-value">£0</span>
            <span className="max-value">£10,000</span>
        </div>
    )

};

export default SliderFilter;