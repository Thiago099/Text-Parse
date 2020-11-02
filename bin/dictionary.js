const find=(array,value)=>{
  let l = 0;
  let r = array.length-1;
  let c = 0;
  let com = 0;
  while (l <= r)
  {
    c = Math.floor((l + r) / 2);
    com = array[c]-value;
    if (com > 0) r = c - 1;
    else if (com < 0) l = c + 1;
    else return {id:c,found:true};
  }
  return {id:c,found:false};
}

const mind=(array,value)=>{
  let l = 0;
  let r = array.length-1;
  let c = 0;
  let com = 0;
  while (l <= r)
  {
    c = Math.floor((l + r) / 2);
    com = array[c]-value;
    if (com > 0) r = c - 1;
    else if (com < 0) l = c + 1;
    else return c;
  }
  if (c >= array.length)
      return array.length;
  if (com < 0) c++;
      return c;
}
const match=(array,index,value)=>
{
       if(index>=array.length) array.push(value);
  else                         array.splice(index,0, value);
}

const append=(array,value)=>
{
  match(array,mind(array,value),value);
}
const dictionary=(array,value)=>
{
  let ret={
    index:[],
    value:[]
  }
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let h=hash(item);
    let c=mind(ret.index,h);
    match(ret.index,c,h)
    match(ret.value,c,value[i])
  };
  return ret;
}
const dictate=(dictionary,name)=>
{
  let v=find(dictionary.index,hash(name));
  if(v.found)
  return {
    value:dictionary.value[v.id],
    found:true
  };
  return {found:false};
}
const dictionary_add=(dic,index,value)=>{
  let h=hash(index);
  let c=mind(dic.index,h);
  match(dic.index,c,h)
  match(dic.value,c,value)
}
