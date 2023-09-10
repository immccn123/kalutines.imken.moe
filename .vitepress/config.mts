import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Kalutines",
  description: "洋葱学园作业完成工具（安卓版本）",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/immccn123/Kalutines' }
    ],
    footer: {
      message: 'Licensed under the GPL version 3 or above.',
      copyright: 'Copyright © 2023-present <a href="https://imken.moe">Imken Luo</a>'
    },
  },
})
