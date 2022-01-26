import React, { useState } from 'react';
import ApplicationContext from './ApplicationContext';
import IApplication from '../types/Application';

const ApplicationProvider: React.FC = ({ children }) => {

    const [applicationData, setApplicationData] = useState<IApplication[]>([]);
    const [filteredData, setFilteredData] = useState<IApplication[]>([]);
    const [minimumSpend, setMinimumSpend] = useState<number>(0);
    const [selectedBizCapability, setSelectedBizCapability] = useState<string>('all')

    const filterTheData = (): void => {
        //console.log(`showing ${selectedBizCapability} applications with a total spend of more than £${minimumSpend}`);
        let filteredApplicationsAllBizCapability: IApplication[] = applicationData.filter(application => {
            return application.spend > minimumSpend;
        });
        let filteredApplications: IApplication[] = applicationData.filter(application => {
            return application.spend > minimumSpend && (application.BCAP1 === selectedBizCapability || application.BCAP2 === selectedBizCapability || application.BCAP3 === selectedBizCapability);
        });
        if (selectedBizCapability === 'all') { setFilteredData(filteredApplicationsAllBizCapability); }
        else { setFilteredData(filteredApplications); }
    };

    const applicationStore = {
        applicationData: applicationData,
        setApplicationData,
        filteredData: filteredData,
        setFilteredData,
        filterTheData,
        minimumSpend: minimumSpend,
        setMinimumSpend,
        selectedBizCapability: selectedBizCapability,
        setSelectedBizCapability
    };

    return (
        <ApplicationContext.Provider value={applicationStore}>
            {children}
        </ApplicationContext.Provider>
    )

};

export default ApplicationProvider;