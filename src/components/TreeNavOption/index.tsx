import React, { useState, useContext, useEffect } from 'react';
import ITreeNavOption from '../../types/TreeNavOption';
import ApplicationContext from '../../context/ApplicationContext';
import IApplicationContext from '../../types/ApplicationContext';

const TreeNavOption: React.FC<ITreeNavOption> = ({ id, name, hasChildren }: ITreeNavOption) => {

    const applicationStore: IApplicationContext = useContext(ApplicationContext);
    const [firstPageLoad, setFirstPageLoad] = useState<boolean>(true);
    const [toggleStatus, setToggleStatus] = useState<string>('collapsed');

    useEffect(() => {
        if (!firstPageLoad && applicationStore.selectedBizCapability === name) { applicationStore.filterTheData(); }
        else { setFirstPageLoad(false); }
    }, [applicationStore.selectedBizCapability]);

    const selectOption: any = (e: MouseEvent | KeyboardEvent): void => {
        e.preventDefault();
        applicationStore.setSelectedBizCapability(name);
    };

    const showOrHideOptions: any = (level: number): void => {
        let options = document.querySelectorAll(`ul[data-level="${level}"][data-root-id^="${id}"]`);
        options.forEach(option => {
            let currentVisibility = option.getAttribute('data-visibility');
            option.setAttribute('data-visibility', (currentVisibility === 'hidden') ? 'visible' : 'hidden');
        });
        // if clicking on a level 1 option, make sure that the level 3 options are hidden too!
        if (id.length === 1) {
            let level3Options = document.querySelectorAll(`ul[data-level="3"][data-root-id^="${id}"]`);
            level3Options.forEach(option => {
                option.setAttribute('data-visibility', 'hidden');
            });
        }
    };

    const toggleExpandButton: any = (e: MouseEvent | KeyboardEvent): void => {
        e.preventDefault();
        setToggleStatus((toggleStatus === 'collapsed') ? 'expanded' : 'collapsed');
        if (id.length === 1) { showOrHideOptions(2); }
        else if (id.length === 3) { showOrHideOptions(3); }
    };

    const getExpandButton = (): JSX.Element => {
        return (
            <a href={'#expand-' + id} className='expand' onClick={toggleExpandButton} data-status={toggleStatus}>Expand</a>
        )
    };

    return (
        <li>
            {(hasChildren) ? getExpandButton() : null}
            <a href={'#biz-cap-' + id} onClick={selectOption}>{(name === 'all') ? 'All Applications' : name}</a>
        </li>
    )

};

export default TreeNavOption;