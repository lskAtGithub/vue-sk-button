# vue-sk-input

## 使用


> npm install vue-sk-input

##示例
```
<sk-input v-model="test" placeholder="placeholder" :validate="validate: { reg: /^1$/, errorMsg: 'error' }" clearable />

import skInput from 'vue-sk-input'
```

##### Input Attributes
|  参数   | 说明  |  类型   | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  | ----  |
| disabled | 是否禁用 | boolean | —— | false |
| loading | 是否等待再次可用 | boolean | —— | false |
| size | 按钮尺寸 | string | large / default / small / | default |
| type | 按钮类型 | string | success / default / warning / danger | default |
| styleType | 3d按钮 or 普通按钮 | string | 3d / default | default |


##### Input Events
|  事件名   | 说明  |  回调参数  |
|  ----  | ----  | ---- |
| click | 在点击按钮时触发 | —— |

