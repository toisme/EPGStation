import * as apid from '../../../../../api';

export default interface IScheduleApiModel {
    getSchedule(option: apid.ScheduleOption): Promise<apid.Schedule[]>;
    getChannelSchedule(option: apid.ChannelScheduleOption): Promise<apid.Schedule[]>;
    getScheduleSearch(option: apid.ScheduleSearchOption): Promise<apid.ScheduleProgramItem[]>;
}