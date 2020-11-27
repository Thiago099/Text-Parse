let name_sex=["male","female"]
let color_sex=["#8AA6E9","#E196B3"]

let dic= new dictionary(
  [
    "joao",
    "maria",
    "paulo",
    "bruna",
  ],
  [0,1,0,1]
)

let sex=(name)=>{
  let m=dic.find(name);
  write_line(name,m.found?color_sex[m.value]:"magenta")
}

sex("joao");
sex("bruna");
sex("pedro");


text="Joao tem 2 amigos, Maria e Paulo.";
write_color(text);

parse(text).forEach((item) => {
  write(item.value,apearence_color[item.type]);

});
