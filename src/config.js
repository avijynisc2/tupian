export const defaultConfig = {
    // 默认文本配置
    text: '默认标题',       
    watermark: '@水印文本', 

    // 字体配置
    fontFamily: import.meta.env.VITE_APP_FONT_FAMILY,
    
    // 可用字体样式列表
    fontStyles: [
        'https://font-cdn.com/font1.css',
        'https://font-cdn.com/font2.css',
        // ...
    ],
    
    // 字体选项
    fontOptions: [
        { value: 'default', label: '默认全局' },
        { value: 'Microsoft YaHei', label: '微软雅黑' },
        // ...
    ]
};
