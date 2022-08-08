const allDeviceList = document.querySelectorAll('.deviceList')
const allDeviceCont = document.querySelectorAll('.device-container .device-content')
allDeviceList.forEach(item => {
    item.addEventListener('click', () => {
        let currentId = item.getAttribute('data-trader')
        let currentContent = document.querySelector(`#${currentId}`)
        allDeviceList.forEach(item => {
            item.classList.remove('active')
        })
        allDeviceCont.forEach(benefit => {
            benefit.classList.remove('active')
        })
        item.classList.add('active')
        currentContent.classList.add('active')
    })
});

const allaccList = document.querySelectorAll('.acc-item')
const allaccCont = document.querySelectorAll('.account-container .course-content')
allaccList.forEach(item => {
    item.addEventListener('click', () => {
        let currentId = item.getAttribute('data-course')
        let currentContent = document.querySelector(`#${currentId}`)
        allaccList.forEach(item => {
            item.classList.remove('active')
        })
        allaccCont.forEach(benefit => {
            benefit.classList.remove('active')
        })
        item.classList.add('active')
        currentContent.classList.add('active')
    })
});
