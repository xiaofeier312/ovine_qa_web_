export const schema = {
  "type": "page",
  "body": {
    "type": "crud",
    "api": "$preset.apis.tasks",
    "defaultParams": {
      "perPage": 20
    },
    "filter": {
      "title": "输入用例路径搜索",
      "controls": [{
        "type": "text",
        "name": "keywords",
        "placeholder": "请输入项目名"
      }]
    },
    "headerToolbar": [{
      "type": "action",
      "actionType": "dialog",
      "label": "手动触发JOB",
      "dialog": {
        "title": "动触发JOB",
        "type": "panel",
        "body": "1. 提交代码后，server自动更新用例<br/>2. 每天凌晨JOB自动运行所有用例",
        "actions": [{
            "type": "button",
            "label": "手动更新最新用例",
            "actionType": "url",
            "url": "http://localhost:8081/case/gentree"

          },
          {
            "type": "button",
            "label": "手动执行定时任务",
            "actionType": "url",
            "url": "http://localhost:8081/case/runmodulecase/0"
          }
        ]


      }
    }],
    "syncLocation": false,
    "columns": [{
        "name": "id",
        "label": "ID"
      },
      {
        "name": "chinese_name",
        "label": "项目名"
      },
      {
        "name": "module_name",
        "label": "模块名"
      },
      {
        "name": "func_name",
        "label": "用例名"
      },
      {
        "name": "run_type",
        "label": "运行方式",
        "type": "mapping",
        "map": {
          "0": "用例",
          "1": "模块",
          "2": "每日任务",
        }

      },
      {
        "name": "status",
        "label": "状态",
        "type": "mapping",
        "map": {
          "0": "创建中",
          "1": "运行中",
          "2": "完成",
        }
      },
      {
        "name": "summary",
        "label": "Summary"
      },
      {
        "name": "time",
        "label": "time"
      },
      {
        "type": "operation",
        "label": "操作",
        "buttons": [{
            "label": "查看报告",
            "type": "button",
            "level": "info",
            "actionType": "url",
            // "url": "/case/report?file=$file_name",
            "url": "http://localhost:8081/case/report?file=$file_name",
            "blank": true,

            // "actionType": "ajax",
            // "level": "info",
            // "api": "$preset.apis.report"
          },
          // {
          //   // 以后再做，因为重新运行涉及到用例新老版本，不容易向用户解释清楚
          //   "label": "重新运行",
          //   "type": "button",
          //   "level": "info",
          //   "actionType": "url",
          //   "url": "",
          // }
        ]
      }
    ]
  }
}
