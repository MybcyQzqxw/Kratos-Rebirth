// 生成404页面
hexo.extend.generator.register("page-notfound", (locals) => ({
  path: "404.html",
  data: {
    type: "404",
    title_i18n: "title.not_found",
  },
  layout: "_pages/404",
}));

// 生成 tags 页面
hexo.extend.generator.register("page-tags", (locals) => ({
  path: hexo.route.format(hexo.config.tag_dir + "/"),
  data: {
    title_i18n: "title.tag",
  },
  layout: "_pages/tags",
}));

// 合集页面由站点脚本 scripts/collections.js 生成（合集由文章的 collections 字段决定，取代原先的分类）
