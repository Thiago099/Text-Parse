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


text=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nullam ut lorem sit amet ligula facilisis iaculis sed et
tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Pellentesque eros sem, rhoncus ut nunc eu, pretium 
pulvinar diam. Curabitur sit amet porta neque. Nulla condimentum 
sapien in mollis interdum. Aenean sed metus a mauris aliquam pulvinar. 
Aliquam a pulvinar nulla. Duis porta consectetur sem, ac gravida ligula 
condimentum vitae. Praesent placerat sodales eros, ac pharetra quam porttitor
vel. Proin eleifend imperdiet erat, id egestas nulla suscipit sed.`;

write_color(text);

parse(text).forEach((item) => {
  write(item.value,apearence_color[item.type]);

});
