var output=document.querySelector("div.output");

const valid = (obj) => typeof (obj) !== 'undefined';

const write_line=(text,color)=>
{
  if(!valid(text))text="";
  let c=valid(color)?` style="color:${color};"`:"";
  output.innerHTML+=`<p${c}>${text}</p>`;
}

const write=(text,color)=>
{
  if(!valid(text))text="";
  output.innerHTML+= valid(color)?`<span style="color:${color};">${text}</span>`:text;
}
