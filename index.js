'use strict'

function merger(item,a,b){
   
    if(Array.isArray(a[item])){

        if(b[item] !== undefined && (!Array.isArray(b[item]))){
            //Condition 1
            a[item].push(b[item]);
        }
        else if(b[item] === undefined || b[item] === null){
            //Condition 2
            a[item] = [];
        }
        else if(Array.isArray(b[item])){
            //Condition 3
            a[item] = b[item];
        }
    }
    else if(a.hasOwnProperty(item) && b[item] === undefined){
        //Condition 4
        delete a[item];
    }
    else if(b[item] && typeof b[item] !== 'object'){
        //Condition 5
        a[item] = b[item];

    }
    else if(a[item] && Array.isArray(b[item])){
        // Condition as discussed in e-mail
        a[item] = b[item];
    }
    else{
        if(a[item] !== undefined){
            for(var innerItem in b[item]){  
                if(b[item].hasOwnProperty(innerItem)){
                    merger(innerItem,a[item],b[item]);
                }
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

