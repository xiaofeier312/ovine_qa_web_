export const schema = {
  "type": "page",
  "body": {
    "type": "service",
    "api": "$preset.apis.tasks",
    "body": {
      "type": "panel",
      "title": "title-$total",
      "body": "现在是：<code>$items.0.summary</code>",
      // "body": "现在是：<code>$items.0.summary</code>",
    }
  }
}



// "type": "service",
// "api": "$preset.apis.tasks",
// "interval": 5000,
// "body": [{
//   "body": {
//     "type": "html",
//     "html": "支持 <code>$data</code>"
//   }
// }]
