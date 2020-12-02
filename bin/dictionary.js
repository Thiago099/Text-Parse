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
const append=(dictionary,value)=>
{
  match(dictionary,mind(dictionary,value.index),value);
}
class dictionary {
  constructor(key,value) {
    this.data=[];
    for (let i = 0; i < key.length; i++) {
      let item = key[i];
      let h=hash(item);
      append(this.data,{index:h,value:value[i]})
    };
  }
  find(name){
    let v=find(this.data,hash(name));
    if(v.found)
    return {
      value:v.value,
      found:true
    };
    return {found:false};
  }
}
