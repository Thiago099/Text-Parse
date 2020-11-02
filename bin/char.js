const get_appearence=(current)=>
{
  var ret=0;
         if(current < 'A')
         if(current < '!') ret = 0;
    else if(current < '0') ret = 1;
    else if(current < ':') ret = 2;
    else                   ret = 1;
    else if(current < 'a')
         if(current < '[') ret = 3;
    else                   ret = 1;
    else if(current < '{') ret = 4;
    else if(current < 'À') ret = 1;
    else if(current < 'à') ret = 3;
    else                   ret = 4;
    if(ret!=1)return ret;
    switch (current) {
      case "{":
      case "}":
      case "[":
      case "]":
      case "(":
      case ")":
      case "\"":
      case "'":
      return 5;

    }
    return 1;

}
const apearence_char=[" ", "#", "0", "A", "a","{"];
const apearence_color=["#FF00FF","#94D9FF","#D9DA8C","#A5DFA5","#FFFFFF","#DE6D6D"];

const evaluate=(text)=>
{
  let ret=[];
  let c=text.charAt(0);
  let cur=[c];
  let apearence=get_appearence(c);
  for (var i = 1; i < text.length; i++) {
    c=text.charAt(i);
    a=get_appearence(c);
    if(a!=apearence)
    {
      ret.push({value:cur.join(""),type:apearence});
      cur=[c];
      apearence=a;
    }
    else
    cur.push(c)
  }
  ret.push({value:cur.join(""),type:apearence});
  return ret;
}
const write_color=(text)=>{
  write("<p>");
  evaluate(text).forEach((i) => {
    write(i.value,apearence_color[i.type]);
  });
  write("<p>");
}
const get_color=(text)=>{
  ret="";
  evaluate(text).forEach((i) => {
    ret+=`<span style="color:${apearence_color[i.type]}">${i.value}</span>`;
  });
  return ret;
}
const parse=(str)=>{
  let ret=[];
  let obj=evaluate(str);
  let con=[];
  let commit=()=>
  {
    ret.push({value:con.join(""),type:3})
    con=[];
  }
  obj.forEach((i) => {
    switch (i.type) {
      case 3:
      con.push(i.value.toLowerCase());
      break;
      case 4:
      con.push(i.value);
        break;
      default:
      commit();
      ret.push({value:i.value,type:i.type})
      break;
    }
  });
  commit();
  return ret;
}
