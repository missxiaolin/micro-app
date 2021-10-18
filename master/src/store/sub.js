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
    },
    {
        name: 'sad',
        activeRule: '/sad',
        container: '#micro-container',
        entry: '//localhost:9002/',
        appInfo
    },
    {
        name: 'acc',
        activeRule: '/acc',
        container: '#micro-container',
        entry: '//localhost:9003/',
        appInfo
    }
]
