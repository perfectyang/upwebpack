import request from '@/utils/fetch.js'
const apiLink = {
  getList: '/index.php/api/user/user_list'
}

const allMethods = {
  getList (params) {
    return request(apiLink.getList, params)
  }
}

export default {
  getList: allMethods.getList
}
