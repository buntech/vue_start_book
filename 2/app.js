var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 1
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 1
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  }
]

var vm = new Vue(
  {
    el: '#app',
    data: {
      message: 'おはよう',
      items: items,
    },
    filters: {
      numberWithDelimiter:function(value){
        if(!value) {
          return '0'
        }
        return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      }
    },
    computed: {
      totalPrice: function () {
        return this.items.reduce(function (sum, item) {
          return sum + (item.price * item.quantity)
        }, 0)
      },
      totalPriceWithTax: function () {
        return Math.floor(this.totalPrice * 1.08)
      },
      canBuy: function () {
        return this.totalPrice >= 1000
      },
    }
  },
  {
    el: '#b-button',
    data: {
      loggedInButton: 'ログイン済のため購入できます。',
      canBuy: false,
    }
  },
)

window.vm = vm