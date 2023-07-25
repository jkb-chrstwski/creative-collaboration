import { DashboardItemType } from "../models";

export const DefaultDashboardConfig = [

    {
        id: '1', cols: 4, rows: 20, y: 0, x: 0, 
        backgroundColor: '#fbfcfc',
        config: {
            type: DashboardItemType.WEB_VIEW,        
            src: 'https://jika.io/embed/area-chart?symbol=AAPL&selection=one_month&closeKey=close'
        }
    },
    {

        id: '2', cols: 4, rows: 10, y: 0, x: 4,
        backgroundColor: '#14222d',
        config: {
            type: DashboardItemType.WEB_VIEW,            
            src: 'https://api.wo-cloud.com/content/widget/?geoObjectKey=3091675&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=celsius'
        },
        layerIndex: 0,

    },
    {
        id: '3',
        cols: 4,
        rows: 10,
        y: 2,
        x: 4,
        backgroundColor: '#fbfcfc',
        config: {
            type: DashboardItemType.WEB_VIEW,            
            src: 'https://flocus.io/aesthetic-quotes/'
        },
    }
];
