const unhash=(n)=>
  {
        let c = 0;
        let p = 26;
        for (let j = 1; ; j++)
        {
            for (let i = 0; i < Math.pow(p, j); i++)
            {
                if (c == n)
                {
                    var sb = [];
                    for (let k = 1; k < j + 1; k++)
                        sb.push(String.fromCharCode(((i / Math.pow(p, k - 1) % p) + 97)));
                    return sb.join("");
                }
                c++;
            }
        }
    }
const hash=(str)=>
{
   // if (str.Length > 12) throw new Exception("string is too long");
    let hash =-1;
    let m = 1;
    for (var i = 0; i < str.length; i++) {
        hash += (str.charCodeAt(i) - 96) * m;
        m *= 26;
    }
    return hash;
}
