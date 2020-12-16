export const schema = {
  "type": "page",
  "body": {
    "type": "crud",
    "api": "$preset.apis.list_case",
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
        "name": "fid",
        "label": "ID"
      },
      {
        "name": "package_path",
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
        "name": "remark",
        "label": "备注"
      },
      {
        "type": "operation",
        "label": "运行用例",
        "buttons": [{
            "label": "单个用例",
            "type": "button",
            "actionType": "ajax",
            "level": "info",
            "api": "$preset.apis.run_case"
          },
          {
            "label": "单个模块",
            "type": "button",
            "actionType": "ajax",
            "level": "info",
            "api": "$preset.apis.run_module_case"
          }
        ]
      }
    ]
  }
}
