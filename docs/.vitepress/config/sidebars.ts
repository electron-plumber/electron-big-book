import logic from '../i18n/pages/logic.json'
import math from '../i18n/pages/math.json'
import english from '../i18n/pages/english.json'
import write from '../i18n/pages/write.json'
import resource from '../i18n/pages/resource.json'
import jvm from '../i18n/pages/java/jvm.json'

function getLogicSidebar() {
  return Object.fromEntries(
    Object.entries(logic).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, "/logic")),
    ])
  )
}

function getMathSideBar() {
  return Object.fromEntries(
    Object.entries(math).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/math')),
    ])
  )
}

function getEnglishSideBar() {
  return Object.fromEntries(
    Object.entries(english).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/english')),
    ])
  )
}

function getWriteSideBar() {
  return Object.fromEntries(
    Object.entries(write).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/write')),
    ])
  )
}

function getResourceSideBar() {
  return Object.fromEntries(
    Object.entries(resource).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/resource')),
    ])
  )
}


function getJvmSideBar() {
  return Object.fromEntries(
    Object.entries(jvm).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/java/1.jvm')),
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
    '/write/': getWriteSideBar(),
    '/resource/': getResourceSideBar(),
    '/java/1.jvm/': getJvmSideBar(),
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
