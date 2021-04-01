<template>
  <div>
    <main class="page page1">
      <div :class="`theme-vdoing-wrapper ${bgStyle}`">
        <div class="content-wrapper">
          <RightMenu v-if="showRightMenu" />
          <h1 v-if="showTitle">
            <img
              :src="currentBadge"
              v-if="$themeConfig.titleBadge === false ? false : true"
            />
            {{this.$page.title}}
          </h1>
          {{ page1Data.heroText }}
              <a-card size="small" title="真划算">
                <a-card-grid style="width:100%;">
                <a-descriptions size="small" :column="5">
                  <a-descriptions-item label="应用">
                    cheap-web
                  </a-descriptions-item>
                  <a-descriptions-item label="发版关键词">
                    gfe发版
                  </a-descriptions-item>
                  <a-descriptions-item label="后端">
                    张飞云（组）
                  </a-descriptions-item>
                  <a-descriptions-item label="产品">
                    无
                  </a-descriptions-item>
                  <a-descriptions-item label="前端">
                    段宁
                  </a-descriptions-item>
                  <a-descriptions-item label="svn" :span=5>
                    https://code.ds.gome.com.cn/svn/atg_poc/30_Coding/NewDevMode/trunk/gome-gfe/channel-web/newindex
                  </a-descriptions-item>
                  <a-descriptions-item label="地址" :span=3>
                    首页：http://tuan.gome.com.cn/cheap-web<br>
                    抢购专场：http://tuan.gome.com.cn/q<br>
                    搜索结果页面：http://tuan.gome.com.cn/groupon/searchKey/%E7%94%B5%E8%84%91<br>
                    分类列表页：http://tuan.gome.com.cn/groupon/cat32825718.html<br>
                    详情页：http://tuan.gome.com.cn/deal/T8800345762.html
                  </a-descriptions-item>
                  <a-descriptions-item label="备注">
                    暂无
                  </a-descriptions-item>
                </a-descriptions>
                </a-card-grid>
              </a-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import ArticleInfo from './ArticleInfo.vue'
import Catalogue from './Catalogue.vue'
import UpdateArticle from './UpdateArticle.vue'
import RightMenu from './RightMenu.vue'

import TitleBadgeMixin from '../mixins/titleBadge'

export default {
  mixins: [TitleBadgeMixin],
  data () {
    return {
      updateBarConfig: null
    }
  },
  props: ['sidebarItems'],
  components: { PageEdit, PageNav, ArticleInfo, Catalogue, UpdateArticle, RightMenu },
  created () {
    this.updateBarConfig = this.$themeConfig.updateBar
  },
  computed: {
    page1Data () {
      return {
        ...this.$page.frontmatter
      }
    },
    bgStyle () {
      const { contentBgStyle } = this.$themeConfig
      return contentBgStyle ? 'bg-style-' + contentBgStyle : ''
    },
    isShowUpdateBar () {
      return this.updateBarConfig && this.updateBarConfig.showToArticle === false ? false : true
    },
    showTitle () {
      return !this.$frontmatter.pageComponent
    },
    showRightMenu () {
      const { $frontmatter, $themeConfig, $page } = this
      const { sidebar } = $frontmatter
      return (
        $themeConfig.rightMenuBar !== false &&
        $page.headers &&
        ($frontmatter && sidebar && sidebar !== false) !== false
      )
    },
    pageComponent () {
      return this.$frontmatter.pageComponent ? this.$frontmatter.pageComponent.name : false
    },
    isShowSlotT() {
      return this.getShowStatus('pageTshowMode')
    },
    isShowSlotB() {
      return this.getShowStatus('pageBshowMode')
    }
  },
  methods: {
    getShowStatus(prop) {
      const { htmlModules } = this.$themeConfig
      if(!htmlModules) return false
      if (htmlModules[prop] === 'article') { // 仅文章页显示
        return this.isArticle()
      } else if (htmlModules[prop] === 'custom'){ // 仅自定义页显示
        return !(this.isArticle())
      } else { // 全部显示
        return true
      }
    },
    isArticle () {
      return this.$frontmatter.article !== false
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  @media (max-width $MQMobile)
    padding-top $navbarHeight
  @media (min-width $MQMobile)
    padding-top ($navbarHeight + 1.5rem)
  >*
    @extend $vdoing-wrapper
.theme-vdoing-wrapper
  .content-wrapper
    position relative
  h1 img
    margin-bottom -0.2rem
    max-width 2.2rem
    max-height 2.2rem
.theme-vdoing-wrapper
  --linesColor rgba(50, 0, 0, 0.05)
  &.bg-style-1 // 方格
    background-image linear-gradient(90deg, var(--linesColor) 3%, transparent 3%), linear-gradient(0deg, var(--linesColor) 3%, transparent 3%)
    background-position center center
    background-size 20px 20px
  &.bg-style-2 // 横线
    background-image repeating-linear-gradient(0, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 30px 30px
  &.bg-style-3 // 竖线
    background-image repeating-linear-gradient(90deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 30px 30px
  &.bg-style-4 // 左斜线
    background-image repeating-linear-gradient(-45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 20px 20px
  &.bg-style-5 // 右斜线
    background-image repeating-linear-gradient(45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 20px 20px
  &.bg-style-6 // 点状
    background-image radial-gradient(var(--linesColor) 1px, transparent 1px)
    background-size 10px 10px
// 背景纹适应深色模式
.theme-mode-dark
  .theme-vdoing-wrapper
    --linesColor rgba(125, 125, 125, 0.05)
/**
 * 右侧菜单的自适应
 */
@media (min-width 720px) and (max-width 1279px)
  .have-rightmenu
    .page
      padding-right 0.2rem !important
@media (max-width 1279px)
  .have-rightmenu
    .right-menu-wrapper
      display none
@media (min-width 1280px)
  .have-rightmenu
    .sidebar .sidebar-sub-headers
      display none


.page1 >* {
    max-width: 90%;
    margin: 0 auto;
    padding: 1rem 2.5rem 2rem 2.5rem;
}
.page1 .theme-vdoing-content {
    max-width: 90%;
}
.page1 .page-edit {
    max-width: 90%;
}
.ant-descriptions-view table{
    margin:0; 
  }
</style>
