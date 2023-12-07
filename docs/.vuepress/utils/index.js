function isExternal(path) {
  return /^[a-z]+:/i.test(path)
}

function simplifySlugText(text) {
  // 移除方法后面的括号及里面的内容
  if (text.match(/^uni/) && text.match(/\)$/)) {
    text = text.replace(/^uni/, '').replace(/\(.*\)$/, '');
  }
  // 处理部分非uni开头方法的括号内容，主要是会出现多参数的情况。
  if (text.match(/\([\w+\s+\[\],]+\)$/)) {
    text = text.replace(/\([\w+\s+\[\],]+\)$/, '');
  }
  return text;
}

function getFormattedDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

  return formattedDate;
}

// 顺序有要求，会影响 for 循环匹配侧边栏
const tabs = [
  '/compiler/', '/dom/', '/uts/', '/collocation/', '/plugin/', '/worktile/', '/component/', '/api/', '/css/', '/'
]

module.exports = {
  isExternal,
  simplifySlugText,
  getFormattedDate,
  tabs: process.env.DOCS_LITE ? [] : tabs
}