//获取所有元素
let $buttons = $('#buttonWrapper>button')
let $slides = $('#imgWrapper')
let $imgs = $('#imgWrapper>img')
let current = 0
bindEvents()

//绑定按钮点击事件
function bindEvents() {
    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        gotToSlides(index)
    })
}
//上下一张
$('#right').on('click', function () {
    gotToSlides(current + 1)
})
$('#left').on('click', function () {
    gotToSlides(current - 1)
})
//自动下一张
let timer = setInterval(function () {
    gotToSlides(current + 1)
}, 2000)
//鼠标移入移出暂停继续自动播放
$('#slides').on('mouseenter', function () {
    window.clearInterval(timer)
}).on('mouseleave', function () {
    timer = setInterval(function () {
        gotToSlides(current + 1)
    }, 2000)
})

//私有函数封装
function gotToSlides(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && index === 0) {
        //从最后到第一张
        $slides.css({
                transform: `translateX(${-($buttons.length+1)*300}px)`
            })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({
                    transform: `translateX(${-(index+1)*300}px)`
                }).show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        //从第一张到最后
        $slides.css({
                transform: `translateX(0px)`
            })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({
                    transform: `translateX(${-(index+1)*300}px)`
                }).show()
            })
    } else {
        $slides.css({
            transform: `translateX(${-(index+1)*300}px)`
        })
    }
    current = index
}