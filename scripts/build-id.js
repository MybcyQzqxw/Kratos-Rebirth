// 每次 hexo 进程启动（generate / server）生成一个构建标识，用于让浏览器发现页面已过期
const BUILD_ID = String(Date.now());

hexo.extend.helper.register("build_id", () => BUILD_ID);

hexo.extend.generator.register("build-id", () => ({
  path: "build-id.json",
  data: JSON.stringify({ id: BUILD_ID }),
}));
