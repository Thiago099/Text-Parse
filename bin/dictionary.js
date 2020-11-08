const find=(array,value)=>{
  let l = 0;
  let r = array.length-1;
  let c = 0;
  let com = 0;
  while (l <= r)
  {
    c = Math.floor((l + r) / 2);
    com = array[c].index-value;
    if (com > 0) r = c - 1;
    else if (com < 0) l = c + 1;
    else return {value:array[c].value,found:true};
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
    com = array[c].index-value;
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
  let ret=[]
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let h=hash(item);
    match(ret,mind(ret,h),{index:h,value:value[i]})
  };
  return ret;
}
const dictate=(dictionary,name)=>
{
  let v=find(dictionary,hash(name));
  if(v.found)
  return {
    value:v.value,
    found:true
  };
  return {found:false};
}
