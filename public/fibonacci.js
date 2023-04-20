function fibonacci(num) {
  if (num === 1 || num === 2) {
    return num
  }

  return fibonacci(num - 2) + fibonacci(num - 1)
}
