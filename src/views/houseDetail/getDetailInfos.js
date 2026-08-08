import { service } from '@/utils/request'
export const getDetailInfos = (houseId) => {
  return service({
    url: '/detail/infos',
    method: 'get',
    params: {
      houseId,
    },
  })
}
