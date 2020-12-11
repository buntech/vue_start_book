var items = [
  {
    name: 'ペン',
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
    quantity: 1
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
        return this.totalPrice >= 1500  // 1500円以上で購入可能
      },
      // errorMessageClass: function () {
      //   return {
      //     error: !this.canBuy
      //   }
      // },
      errorMessageStyle: function () {
        return {
          border: this.canBuy ? '' : '1px solid red',
          color: this.canBuy ? '' : 'red'
        }
      }
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
