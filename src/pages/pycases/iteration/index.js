export const schema = {
  "type": "page",
  "body": {
    "type": "crud",
    "api": "$preset.apis.tasks",
    "filter": {
      "title": "条件搜索",
      "controls": [{
        "type": "text",
        "name": "keywords",
        "placeholder": "请输入项目名"
      }]
    },
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
          "url": "http://localhost:8081/case/report?file=$file_name",
          "blank": true,

          // "actionType": "ajax",
          // "level": "info",
          // "api": "$preset.apis.report"
        }, {
          "label": "重新运行",
          "type": "button",
          "level": "info",
          "actionType": "url",
          "url": "",
        }]
      }
    ]
  }
}
