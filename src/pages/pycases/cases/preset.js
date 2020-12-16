export default {
  apis: {
    list_case: {
      url: 'GET pytest/case/allcase',
    },
    run_case: {
      url: 'GET pytest/case/runcase/$fid',
    },
    run_module_case: {
      url: 'GET pytest/case/runmodulecase/$fid',
    },
  }


}
