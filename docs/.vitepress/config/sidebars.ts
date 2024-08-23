import logic from '../i18n/pages/logic.json'
import math from '../i18n/pages/math.json'
import english from '../i18n/pages/english.json'
import write from '../i18n/pages/write.json'
import resource from '../i18n/pages/resource.json'
import library2024 from '../i18n/pages/library-2024.json'

// 逻辑笔记
function getLogicSidebar() {
  return Object.fromEntries(
    Object.entries(logic).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, "/logic")),
    ])
  )
}

// 数学笔记
function getMathSideBar() {
  return Object.fromEntries(
    Object.entries(math).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/math')),
    ])
  )
}

// 英语笔记
function getEnglishSideBar() {
  return Object.fromEntries(
    Object.entries(english).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/english')),
    ])
  )
}

// 写作笔记
function getWriteSideBar() {
  return Object.fromEntries(
    Object.entries(write).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/write')),
    ])
  )
}

// 在线预览管综资源
function getResourceSideBar() {
  return Object.fromEntries(
    Object.entries(resource).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/resource')),
    ])
  )
}

// 题库2024
function getLibrary2024SideBar() {
  return Object.fromEntries(
    Object.entries(library2024).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/library2024')),
    ])
  )
}

// 题库2025
/*function getLibrary2025SideBar() {
  return Object.fromEntries(
    Object.entries(library2025).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/library2025')),
    ])
  )
}*/


// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/logic/': getLogicSidebar(),
    '/math/': getMathSideBar(),
    '/english/': getEnglishSideBar(),
    '/write/': getWriteSideBar(),
    '/resource/': getResourceSideBar(),
    '/library2024/': getLibrary2024SideBar()
  }
}

type Item = {
  text?: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, lang, prefix)),
    }
  }
  return {
    ...item,
    link: `${prefix}${item.link}`,
  }
}

export const sidebars = getSidebars()
