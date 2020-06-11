export const htmlToJson = (div, obj) => {
  if (!obj) {
    obj = []
  }
  const tag = {}
  tag.tagName = div.tagName
  tag.textContent = div.textContent
  tag.children = []
  for (let i = 0; i < div.children.length; i++) {
    tag.children.push(htmlToJson(div.children[i]))
  }
  for (let i = 0; i < div.attributes.length; i++) {
    const attr = div.attributes[i]
    tag['@' + attr.name] = attr.value
  }
  return tag
}
