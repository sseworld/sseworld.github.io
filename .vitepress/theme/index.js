import DefaultTheme from 'vitepress/theme'
import Block from '../../components/Block.vue'
import PackageList from "../../components/PackageList.vue"
import PackageListItem from "../../components/PackageListItem.vue"
import Card from "../../components/base/Card.vue"
import CardGrid from "../../components/base/CardGrid.vue"
import GridSection from "../../components/base/GridSection.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Block', Block)
    app.component('PackageList', PackageList)
    app.component('PackageListItem', PackageListItem)
    app.component('Card', Card)
    app.component('CardGrid', CardGrid)
    app.component('GridSection', GridSection)
  }
}
