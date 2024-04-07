// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
       "My Dearest Daniel - Nguyen Hoang Tung",
"Happy Birthday! Today, I want to say I'm sorry for the moments I've made you sad",
"and thank you for the lessons of love and patience you've taught me.",
"Your presence in my life has filled it with joy",
"and taught me the true depth of love.",
"I'm blessed to have you",
"and promise to cherish, respect, and grow with you through all the days ahead.",
"Together, we can face anything the future brings.",
"With all my heart, I look forward to celebrating many more birthdays with you, each one better than the last.",
"With all my love,"

    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bắt đầu",
        play: "Âm nhạc",
        bannar_coming: "Màu sắc",
        balloons_flying: "Có vẻ như thiếu gì đó",
        cake_fadein: "Bánh ngọt?",
        light_candle: "Nến？",
        wish_message: "Happy birthday Daniel.",
        story: "Daniel à, chúc mừng sinh nhật em nhé.",
    }
};
