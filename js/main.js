let switchItem = document.querySelectorAll('.switch_item')
let switchCurrent = document.querySelector('.switch_current')
let moduls = document.querySelector('.moduls')
let tabItem = document.querySelectorAll('.tabs>.item')
let currrentItem = document.querySelector('.tabs>.current')
let itemContent = document.querySelectorAll('.content>.item_content')

switchCurrent.style.width = switchItem[0].offsetWidth + 'px'
currrentItem.style.width = tabItem[0].offsetWidth + 'px'
itemContent[0].style.display = 'block'


function switchTab() {
  tabItem.forEach((item, i) => {
    currrentItem.style.height = item.offsetHeight + 'px'
    item.addEventListener('click', () => {
      tabItem.forEach(item2 => {
        if (item != item2) {
          item2.classList.remove('active')
          itemContent.forEach(content => { content.style.display = 'none' })
        }
      })
      tabItem[i].classList.add('active')
      itemContent[i].style.display = 'block'

      currrentItem.style.left = '0';
      currrentItem.style.top = '0';

      if (moduls.classList.contains('vertical')) {
        currrentItem.style.width = '98%'
        currrentItem.style.top = item.offsetTop + 'px';
      } else {
        currrentItem.style.left = item.offsetLeft + 'px';
        currrentItem.style.width = item.offsetWidth + 'px'
      }
    })
  })
}
switchTab()
// Switcher
switchItem.forEach((item, i) => {
  item.addEventListener('click', () => {
    switchTab()
    switchCurrent.style.width = item.offsetWidth + 'px'
    switchCurrent.style.left = item.offsetLeft + 'px';
    tabItem.forEach(tab => { tab.classList.remove('active') })
    tabItem[0].classList.add('active')
    itemContent.forEach(content => { content.style.display = 'none' })
    itemContent[0].style.display = 'block'
    switchItem.forEach(item => { item.classList.remove('active') })
    item.classList.add('active')
    if (i == 0) {
      currrentItem.style.left = 'auto';
      currrentItem.style.top = 'auto';
      currrentItem.style.width = '98px'
      moduls.classList.remove('vertical')
      // tabItem = document.querySelectorAll('.tabs>.item')
    } else {
      currrentItem.style.left = 'auto';
      currrentItem.style.top = 'auto';
      currrentItem.style.width = '98%'
      moduls.classList.add('vertical')
      // tabItem = document.querySelectorAll('.tabs>.item')
    }
  })
})