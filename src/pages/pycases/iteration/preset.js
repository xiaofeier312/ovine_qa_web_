export default {
  apis: {
    tasks: {
      url: 'GET pytest/case/tasks',
    },
    report: {
      url: 'GET pytest/case/report',
      onSuccess: (source) => {
        const {
          code,
          msg,
          data
        } = source
        if (code === 1) {
          source.msg = msg || '运行异常，请联系QA。'
        } else {
          source.msg = '结果页。'
        }
        return source
      },
    },
  }


}
