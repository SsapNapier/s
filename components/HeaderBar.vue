<template>
<div class="header-bar" id="menu">
  <nuxt-link class="header-bar link active">Главная</nuxt-link>
  <nuxt-link class="header-bar link">О компании</nuxt-link>
  <nuxt-link class="header-bar link">Стать субагентом</nuxt-link>
  <nuxt-link class="header-bar link">Услуги</nuxt-link>
  <nuxt-link class="header-bar link">Контакты</nuxt-link>
  <img src="3.png" alt="">
 <div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        img : '3.png'
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
body
  box-sizing: border-box
  margin: 0 auto
  background: #1a1a1a

.container
  display: flex

#menu
  position: relative
  top: 89px
  flex-basis: 100%

  &:before
    content: ""
    display: inline-block
    vertical-align: middle
    width: 42%
    height: 1px
    background: #c5c5c5
    margin-right: 5px

@media screen and (max-width: 1280px)
  #menu:before
    width: 44%
    margin-right: 14px

nuxt-link
  font-family: SegoeUI
  font-size: 12px
  color: #c5c5c5
  cursor: pointer
  margin-left: 3%

  &:hover
    color: #00aeef
    border-bottom: 1px solid #00aeef
    padding-bottom: 14px
    text-decoration: none

  &.active
    color: #00aeef
    border-bottom: 1px solid #00aeef
    padding-bottom: 14px
    text-decoration: none
@media screen and (max-width: 1280px)
  nuxt-link
    margin-left: 40px
    font-size: 64%
</style>
