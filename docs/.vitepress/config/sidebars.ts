import logic from '../i18n/pages/logic.json'
import math from '../i18n/pages/math.json'
import english from '../i18n/pages/english.json'
import japanese from '../i18n/pages/japanese.json'
import write from '../i18n/pages/write.json'
import resource from '../i18n/pages/resource.json'
import logic25 from '../i18n/pages/logic25.json'
import math25 from '../i18n/pages/math25.json'
import english25 from '../i18n/pages/english25.json'
import write25 from '../i18n/pages/write25.json'

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

// 日语笔记
function getJapaneseSideBar() {
  return Object.fromEntries(
    Object.entries(japanese).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/japanese')),
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


function getLogic25Sidebar() {
  return Object.fromEntries(
    Object.entries(logic25).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, "/logic25")),
    ])
  )
}

function getMath25SideBar() {
  return Object.fromEntries(
    Object.entries(math25).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/math25')),
    ])
  )
}

function getEnglish25SideBar() {
  return Object.fromEntries(
    Object.entries(english25).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/english25')),
    ])
  )
}

function getWrite25SideBar() {
  return Object.fromEntries(
    Object.entries(write25).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/write25')),
    ])
  )
}


// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/logic/': getLogicSidebar(),
    '/math/': getMathSideBar(),
    '/english/': getEnglishSideBar(),
    '/japanese/': getJapaneseSideBar(),
    '/write/': getWriteSideBar(),
    '/resource/': getResourceSideBar(),
    '/logic25/': getLogic25Sidebar(),
    '/math25/': getMath25SideBar(),
    '/english25/': getEnglish25SideBar(),
    '/write25/': getWrite25SideBar(),
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
