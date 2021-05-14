# vue-sk-button

## 使用


> npm install vue-sk-button

##示例
```
<sk-button :loading="loading" style-type="3d" type="warning" size="default" />

import skButton from 'vue-sk-button'
```

##### Button Attributes
|  参数   | 说明  |  类型   | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  | ----  |
| disabled | 是否禁用 | boolean | —— | false |
| loading | 是否等待再次可用 | boolean | —— | false |
| size | 按钮尺寸 | string | large / default / small / | default |
| type | 按钮类型 | string | success / default / warning / danger | default |
| styleType | 3d按钮 or 普通按钮 | string | 3d / default | default |


##### Button Events
|  事件名   | 说明  |  回调参数  |
|  ----  | ----  | ---- |
| click | 在点击按钮时触发 | —— |

