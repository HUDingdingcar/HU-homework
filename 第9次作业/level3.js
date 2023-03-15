let func = function () {
    console.log(2);
}
Function.prototype.before = function (fn1) {
    fn1()
    return fn1
}
Function.prototype.after = function (fn2) {
    func()
    return fn2
}
func = func.before((a = 1) => {
    console.log(a)
}).after((b = 3) => {
    console.log(b);
})
func()

