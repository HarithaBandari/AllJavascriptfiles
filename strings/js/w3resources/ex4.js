function abbrev_name(str){
    var split_names=str.split(" ");
    if(split_names.length>1){
        return (split_names[0]+" "+split_names[1].charAt(0));
    }
else return split_names[0];
}
console.log(abbrev_name("Robin Singh"));
