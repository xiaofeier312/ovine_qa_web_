export const schema = {

  "title": "创建订单",
  "body": [{
    "title": "UI模式创建订单（含保险和确认协议）",
    "type": "form",
    "mode": "horizontal",
    "messages": {
      "validateFailed": "请仔细检查表单规则，部分表单项没通过验证"
    },
    "api": "/order/create_order",
    "actions": [

    ],
    "controls": [{
        "label": "支付公司位置",
        "type": "radios",
        "name": "a",
        "inline": true,
        "value": 1,
        "size": "md",
        "required": true,
        "options": [{
            "label": "北京",
            "value": 1
          },
          {
            "label": "武汉",
            "value": 2
          }
        ]
      },
      {
        "label": "产品",
        "type": "select",
        "size": "lg",
        "name": "b",
        "required": true,
        "remark": "需要其它产品，请联系我添加",
        "source": {
          "method": "get",
          // "url": "https://houtai.baidu.com/api/mock2/options/level2?a=${a}",
          "url": "/order/items?a=${a}",
          // "sendOn": "data.a === 2"
        },
        // "description": "只有<code>选项1</code>选择<code>B</code>的时候，才触发<code>选项2</code>的<code>source</code>接口重新拉取"

      },
      {
        "type": "text",
        "name": "mobile",
        "label": "手机号",
        "size": "lg",
        "required": true,
        "validations": "isNumeric,minLength:11,maxLength:11"
      },
      {
        "type": "password",
        "name": "password",
        "label": "密码",
        "size": "lg",
        "required": true
      },
      {
        "type": "text",
        "name": "number",
        "label": "订单数量",
        "size": "lg",
        "required": true,
        "validations": "isInt,maximum:5,minimum:1",
        "value": 1
      },
      {
        "type": "submit",
        "btnClassName": "btn-default",
        "label": "创建订单",
        "description": "<br><span class=\"text-danger\">1. 不需要手动确认协议，部分下单过程采用UI方式，所以下单比较慢，需要耐心等待 <br>2. UI方式可以支持协议和保险，但是成功率相对接口方式会低一些 <br>3. 请确保用户名密码正确 <br>4. 若多次连续失败，请先手动下单确认各个服务本身是通的 </span>"
      },

      {
        "type": "service",
        "api": "/order/log",
        "interval": 150000,
        "body": [{
          "type": "table",
          "title": "Log(UI下单，时间较长，请注意log返回结果，log会返回订单号等)",
          "source": "$log_body",
          "columns": [{
              "name": "log",
              // "label": "Log"
            },
            // {
            //   "name": "create_time",
            //   // "label": "create_time"
            // }
          ]
        }]
      },

    ]
  }]




}
