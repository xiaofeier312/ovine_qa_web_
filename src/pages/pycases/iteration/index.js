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
        "name": "summary",
        "label": "Summary"
      },
      {
        "type": "operation",
        "label": "结果报告",
        "buttons": [{
          "label": "查看报告",
          "type": "button",
          "actionType": "ajax",
          "level": "info",
          "api": "$preset.apis.run_case"
        }, ]
      }
    ]
  }
}
