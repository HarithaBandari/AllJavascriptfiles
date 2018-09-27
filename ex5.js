var obj={
    _proto_: theProtoObj,
    handler,
    toString(){
        return 'd' + super.toString();
    },
    ['prop_' + (()=>42 )()]:42
    };