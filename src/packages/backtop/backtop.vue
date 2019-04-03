<!--
  created: mahui, on 2019/03,
  desc: 回到顶部组件
-->
<template>
  <transition name="fade">
    <div v-show="showBackTop" @click="backTop">
      <slot>
        <div class="backtop" :style="styleObj" >
        </div>
      </slot>
  </div>
  </transition>
</template>
<script>
export default {
  name: 'm-backtop',
  props: {
    // 出现返回顶部组件的最低滚动高度
    minHeight: {
      type: Number,
      default: 100
    },
    // 距离底部距离
    bottom: {
      type: Number,
      default: 60
    },
    // 距离右部距离
    right: {
      type: Number,
      default: 10
    },
    // 动画持续时间
    duration: {
      type: Number,
      default: 350
    },
    // 返回顶部图标链接
    iconImgUrl: {
      type: String,
      default: 'https://img.aixuedai.com/null/2017622/180319528/20170622180319_78x78.png?height=78&width=78'
    },
    // 滚动的父级盒子Id或类名
    scrollParentIdOrClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showBackTop: false
    }
  },
  computed: {
    styleObj() {
      return {
        'background': `url(${this.iconImgUrl}) 0 center no-repeat`,
        'background-size': '100%',
        'bottom': `${this.bottom}px`,
        'right': `${this.right}px`
      }
    },
    scrollParent() {
      if (!this.scrollParentIdOrClass) {
        return null
      } else {
        return document.querySelector('#' + this.scrollParentIdOrClass) ? document.querySelector('#' + this.scrollParentIdOrClass) : document.querySelector('.' + this.scrollParentIdOrClass)
      }
    }
  },
  mounted() {
    this.eventHandler()
  },
  methods: {
    eventHandler() {
      let me = this
      let scrollParent = me.scrollParent ? me.scrollParent : window
      scrollParent.addEventListener('scroll', function(e) {
        me.handleScroll(e)
      }, false)
    },
    handleScroll(e) {
      let me = this
      if (e.target.scrollTop >= me.minHeight) {
        me.showBackTop = true
      } else {
        me.showBackTop = false
      }
    },
    backTop() {
      let nowScrollTop
      if (!this.scrollParent) {
        nowScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      } else {
        nowScrollTop = this.scrollParent.scrollTop
      }
      this.scrollToFunc(this.scrollParent, 0, nowScrollTop, this.duration)

      // 触发点击事件
      this.$emit('goBackTop')
    },
    scrollToFunc(scrollBox, to = 0, from, duration) {
      // console.log('滚动盒子为：', scrollBox)
      console.log('从' + from + 'px滚动到' + to + 'px')

      // 兼容不同浏览器下的requestAnimationFrame
      let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || ((callBackFunc) => { return setTimeout(callBackFunc, 1000 / 60) })

      // 移动总距离
      let distance = from - to
      // requestAnimationFrame总次数
      let count = duration / (1000 / 60)
      // 每次requestAnimation移动单位距离
      let step = distance / count

      // 执行缓动函数
      let animateFunc = (start, end, step) => {
        let dist = (start - step > end) ? start - step : end

        if (!scrollBox) {
          // 默认是window滚动
          document.documentElement.scrollTop = dist
        } else {
          scrollBox.scrollTop = dist
        }

        if (dist > end) {
          requestAnimationFrame(() => { animateFunc(dist, end, step) })
        }
      }

      requestAnimationFrame(() => { animateFunc(from, to, step) })
    }
  }
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.backtop {
  width: 39px;
  height: 39px;
  position: fixed;
}
</style>
