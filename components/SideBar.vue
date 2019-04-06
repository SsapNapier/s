<template>
<div class="sidebar">
  <a class="active main">Войти&nbsp;&nbsp;&nbsp;&#8594;</a>
  <div class="bar">
    <a>{{ greeting }}</a>
    <a>Ж/Д билеты</a>
    <a>Гостиницы</a>
    <a>Страхование</a>
    <a>Трансфер</a>
  </div>
  </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                greeting: 'Авиабилеты'
            }
        }
    }
</script>

<style lang="sass?indentedSyntax=true">
.sidebar
  display: flex
  font-family: SegoeUI
  font-size: 12px
  min-width: 224px
  min-height: 966px
  border-left: 1px solid #c5c5c5

@media screen and (max-width: 1280px)
  .sidebar
    font-size: 11px
    min-width: 175px

a
  position: relative
  top: 254px
  left: -16px
  color: #c5c5c5
  display: flex
  flex-direction: column
  padding:
    top: 35%
    bottom: 35%

.main
  position: relative
  top: 14px
  left: 45px
  padding: none

@media screen and (max-width: 1280px)
  .main
    top: 32px

.bar a:before
  position: absolute
  top: 0
  width: 10px
  border-top: 1px solid #c5c5c5
  content: ""

.bar a:nth-child(1):before
  border: none

.active
  color: #00aeef
  padding-bottom: 14px
  text-decoration: none
  cursor: pointer
</style>
