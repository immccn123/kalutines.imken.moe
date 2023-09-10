# 下载

最新版本：{{ version === "" ? "正在获取……" : version }}

你可以从官方的 [GitHub Release](https://github.com/immccn123/Kalutines/releases/latest) 下载。

<div v-if="version !== ''">

如果你访问 GitHub 有困难的话，可以在 <a :href="`https://static.imken.moe/Kalutines-Releases/${version}/kalutines-${version}.apk`">Imken 的 CDN</a> 下载。（这个是最新版链接）

</div>

截至上次手动更新文档之前，这是最新的镜像下载地址：

- https://static.imken.moe/Kalutines-Releases/v1.0.1/kalutines-v1.0.1.apk

有帮助的话，还是麻烦点个星星⭐，谢谢喵～

<script setup>
import { ref } from 'vue'
const version = ref("");

fetch("https://api.github.com/repos/immccn123/Kalutines/releases/latest").then(async (response) => {
  const resp = await response.json();
  version.value = resp.tag_name
})
</script>
