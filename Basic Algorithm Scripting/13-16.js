function bouncer(arr) {
    return arr.filter((value) => ![false, null, 0, "", undefined, NaN].includes(value))
  }
  bouncer([7, "ate", "", false, 9]);