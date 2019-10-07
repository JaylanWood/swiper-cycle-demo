//获取所有元素
let $buttons = $('.buttons>button')
let $images = $('#images')
let $arrows = $('.arrows')
let current = 0
let target = 0
//1.点击按钮跳转页面
//1-1.绑定按钮点击事件
//第一到第四张都是
$buttons.eq(0).on('click', function () {
    if (current == 3) {
        console.log('从最后一张到第一张')
        $images.css({
            transform: 'translateX(-1500px)'
        }).one('transitionend', function () {
            $images.hide().css({
                transform: 'translateX(-300px)'
            }).offset()
            $images.show()
        })
    } else {
        $images.css({
            transform: 'translateX(-300px)'
        })
    }

    current = 0
})
$buttons.eq(1).on('click', function () {
    console.log(current)
    $images.css({
        transform: 'translateX(-600px)'
    })
    current = 1
})
$buttons.eq(2).on('click', function () {
    console.log(current)
    $images.css({
        transform: 'translateX(-900px)'
    })
    current = 2
})
$buttons.eq(3).on('click', function () {
    if (current == 0) {
        console.log('从第一张到最后一张')
        $images.css({
            transform: 'translateX(0px)'
        }).one('transitionend', function () {
            $images.hide().css({
                transform: 'translateX(-1200px)'
            }).offset()
            $images.show()
        })
    } else {
        $images.css({
            transform: 'translateX(-1200px)'
        })
    }

    current = 3
})

//2.自动跳转页面
// setInterval(function(){
// console.log('1')
// },2000)
//3.点击箭头跳转页面
$arrows.on('click', function (e) {
    // console.log($(e.target))
    $(e.target).css({
        'background': 'green'
    })
});