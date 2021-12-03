it("palindrome('Callac') doit retourner un booléen", function() {
  expect(typeof palindrome('Callac')).toBe('boolean')
})

it("palindrome('Callac') doit retourner true", function() {
  expect(palindrome('Callac')).toBe(true)
})

it("palindrome('Castaldi') doit retourner false", function() {
  expect(palindrome('Castaldi')).toBe(false)
})

it("palindrome('kayak') doit retourner true", function() {
  expect(palindrome('kayak')).toBe(true)
})

it("palindrome('Leon Noel') doit retourner true", function() {
  expect(palindrome('Leon Noel')).toBe(true)
})

it("palindrome('Allo Lola') doit retourner false", function() {
  expect(palindrome('Allo Lola')).toBe(false)
})

it("plaindrome('La mariee ira mal')", function() {
  expect(palindrome('La mariee ira mal')).toBe(true)
})
