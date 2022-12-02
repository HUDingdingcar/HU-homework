//way 1
/*function Sumto(n) {
    let i, result = 0;
    for (i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
}
console.log(Sumto(5));*/
//way 2
function Sumto(n)
{
    let i=n,result=0;
    if(i>1)
    {
       return i+Sumto(n-1);
    }
    if(i==1)
    {
        return i;
    }
}
console.log(Sumto(5));