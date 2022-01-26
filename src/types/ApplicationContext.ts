import IApplication from './Application';

interface IApplicationContext {
    applicationData: Array<IApplication>
    setApplicationData: (payload: any) => void
    filteredData: Array<IApplication>
    setFilteredData: (payload: any) => void
    filterTheData: () => void
    minimumSpend: number
    setMinimumSpend: (payload: any) => void
    selectedBizCapability: string
    setSelectedBizCapability: (payload: any) => void
}

export default IApplicationContext;