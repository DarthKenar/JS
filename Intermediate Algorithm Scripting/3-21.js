function destroyer(...args) {
    let filters = args.slice(1,args.length)
    return args[0].filter((e) => !filters.includes(e))
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);