import * as appInfo from '../store'

export const subNavList = [
    {
        name: 'vac',
        activeRule: '/vac',
        container: '#micro-container',
        entry: '//localhost:9004/',
        appInfo
    },
    {
        name: 'mac',
        activeRule: '/mac',
        container: '#micro-container',
        entry: '//localhost:9005/',
        appInfo
    },
    {
        name: 'mad',
        activeRule: '/mad',
        container: '#micro-container',
        entry: '//localhost:9006/',
        appInfo
    }
]
