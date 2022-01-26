import IApplication from "../types/Application";

const ApplicationService = {

    get: async () => {
        let ApplicationData: IApplication[];
        const requestData = await fetch('/data'); 
        ApplicationData = await requestData.json();
        return ApplicationData;
    }
};

export default ApplicationService;