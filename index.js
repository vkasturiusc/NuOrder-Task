'use strict'

function merger(item,a,b){
    
    if(Array.isArray(a[item])){

        if(b[item] !== undefined && (!Array.isArray(b[item]))){
            a[item].push(b[item]);
        }
        else if(b[item] === undefined){
           
            a[item] = [];
        }
        else if(Array.isArray(b[item])){
            a[item] = b[item];
        }
    }
    else if(b[item] && typeof b[item] !== 'object'){
        a[item] = b[item];

    }
    else if(a[item] && b[item] === undefined){
        delete a[item];
    }
    else{
        for(var innerItem in b[item]){
            
            if(b[item].hasOwnProperty(innerItem)){
            
                merger(innerItem,a[item],b[item]);
            }
        }
    }
    return true;
};

module.exports.mergewrapper = function mergewrapper(a,b){
    Object.keys(b).forEach(function(key){
        merger(key,a,b);
    });
    return a;
}


//console.log(mergewrapper(x,y));
