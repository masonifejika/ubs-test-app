import React, { useState, useEffect, useContext } from 'react';
import ApplicationService from '../../services/ApplicationService';
import ApplicationContext from '../../context/ApplicationContext';
import IApplicationContext from '../../types/ApplicationContext';
import './ApplicationList.css';
import Application from '../Application';

const ApplicationList: React.FC = () => {

    const applicationStore: IApplicationContext = useContext(ApplicationContext);
    const [firstPageLoad, setFirstPageLoad] = useState<boolean>(true);

    useEffect(() => {
        const loadApplications = async () => {
            const applicationData = await ApplicationService.get();
            applicationStore.setApplicationData(applicationData);
            applicationStore.setFilteredData(applicationData);
        };
        if (firstPageLoad) { loadApplications(); setFirstPageLoad(false); }
    }, [firstPageLoad, applicationStore]);

    return (
        <div id="applicationList">
            <h2>Showing {applicationStore.selectedBizCapability} applications with a total spend of more than £{applicationStore.minimumSpend.toLocaleString('en')}</h2>
            <h3>Number of results: <b>{applicationStore.filteredData.length}</b></h3>
            {applicationStore.filteredData.map(application => (
                <Application key={application.id} id={application.id} name={application.name} spend={application.spend} BCAP1={application.BCAP1} BCAP2={application.BCAP2} BCAP3={application.BCAP3} />
            ))}
        </div>
    )
};

export default ApplicationList;