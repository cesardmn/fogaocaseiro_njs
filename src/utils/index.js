export function __getGroupNames(data) {
  const names = new Set()

  for (let item of data) {
    names.add(item.group.name)
  }
  return [...names]
}

export function __getTypes(items) {
  let types = new Set()
  for (let item of items) {
    types.add(item.type.name)
  }
  return [...types]
}

export function getGroups(data) {
  const names = __getGroupNames(data)
  const groups = []
  for (let name of names) {

    let items = data.filter(item => item.group.name === name)
    let types = __getTypes(items)

    const group = {
      name: items[0].group.name,
      min_order: items[0].group.min_order,
      types: [...types],
      items,
      image: items[0].group.image,
      description: items[0].group.description,
    }

    groups.push(group)
  }
  return groups
}

export function fMoney(value) {
  return value.toLocaleString(
    'pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  })
}

export function CapStrFirst(text){
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export function __getPagesNumbers(data) {
  const numbers = new Set()

  for (let item of data) {
    numbers.add(item.type.menu_page)
  }
  return [...numbers].sort()
}


export function getPages(data) {
  const numbers = __getPagesNumbers(data)
  const pages = []
  for (let number of numbers) {
    let items = data.filter(item => item.type.menu_page === number)
    let types = __getTypes(items)

    let page = {
      group: items[0].group.name,
      min_order: items[0].group.min_order,
      items,
      types,
    }
    pages.push(page)
  }
  return pages
}
