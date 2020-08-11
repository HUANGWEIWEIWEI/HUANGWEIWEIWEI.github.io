# 7.CSS3

### CSS3=CSS2+新语法

#### 结构伪类选择器

- div：first-child 匹配第一个孩子
- div：last-child 匹配最后一个孩子
- div：nth-child（n） 匹配第 n 个孩子
- div：nth-child（2n） 匹配偶数孩子
- div：nth-child（even） 匹配偶数孩子
- div：nth-child（2n+1）匹配奇数孩子
- div：nth-child（odd） 匹配奇数孩子
- div：only-child 匹配有且只有一个的孩子
- :xxx-of-type限制类型eg：nth-last-of-type
- 可连续写多个:选择，除去用not()
- input:disabled、input:enabled、input:checked、input:require、input:optional、input:valid、input:invalid
- p::first-letter、p::first-line、span::after、

#### border-collapse 合并表格边框线

- 表格各边框相交处只留一个边框
- 轮廓线outline-style：double
- box-sizing：border-box盒子不会向外面撑开，固定大小

#### 伪元素（选择器）

- :first-letter 操作当前元素中第一个
- :first-line 操作当前元素中第一行
- ::before 在之前插入，在盒子内部的最前面插入
- ::after 在之后插入，在盒子内部的最后面插入

  ```js 插入
  .box::before{
    /*插入内容写在content中*/
    content:"哈哈";
  }
  ```

#### 文本阴影

- text-shadow 值可为多个，用逗号隔开
- 值 h-shadow 必须，水平阴影位置可负，正为右
- 值 v-shadow 必须，垂直阴影位置可负，正为下
- blur 可选，模糊距离
- color 可选，阴影的颜色
- text-shadow：3px 3px 3px red；分别为水平、垂直、距离颜色，可设置多组用逗号分隔shap

#### 盒子阴影

- box-shadow 值为多个顺序：水平方向、垂直方向、阴影清晰度、阴影大小、阴影颜色、阴影位置（inset outset 默认）
- h-shadow、v-shadow 必须
- blur 模糊距离、spread 阴影尺寸、color 阴影颜色、inset 内阴影（默认为外阴影）可选值