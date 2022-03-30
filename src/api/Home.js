import request from '@/utils/request'

export const recommendMusic =params =>request({
    url:'/personalized',
    // params:{limit:30}
    params
    
})
export const newMusic =params =>request({
    url:'/personalized/newsong',
    // params:{limit:30}
    params
})