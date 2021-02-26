export default {
  apis: {
    list_case: {
      url: 'GET pytest/case/allcase',
    },
    run_case: {
      url: 'GET pytest/case/runcase/$fid',
      onSuccess: (source) => {
        const {
          code,
          msg,
          data
        } = source
        if (code === 1) {
          source.msg = msg || '运行异常，请联系QA。'
        } else {
          source.msg = '已经加入异步运行队列，请到结果页查看。'
        }
        return source
      },
    },
    run_module_case: {
      url: 'GET pytest/case/runmodulecase/$fid',
      onSuccess: (source) => {
        const {
          code,
          msg,
          data
        } = source
        if (code === 1) {
          source.msg = msg || '运行异常，请联系QA。'
        } else {
          source.msg = '已经加入异步运行队列，请到结果页查看。'
        }
        return source
      },
    },
  }


}
