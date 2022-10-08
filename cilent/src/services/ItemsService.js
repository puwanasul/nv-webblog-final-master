import Api from '@/services/Api'

export default {
  index () {
    return Api().get('items')
  },
  show (itemId) {
    return Api().get('item/'+itemId)
  },
  post (item) {
    return Api().post('item',item)
  },
  put (item) {
    return Api().put('item/'+blog.id, item)
  },
  delete (item) {
    return Api().delete('item/'+item.id, item)
  }
}