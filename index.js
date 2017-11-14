'use strict'

function merger(item,a,b){
    console.log('***********************');
    console.log('From A: \n'+item+':'+JSON.stringify(a[item]));
    console.log('-----------------------');
    console.log('From B: \n'+item+':'+JSON.stringify(b[item]));
    console.log('***********************');
    if(Array.isArray(a[item])){

        if(b[item] !== undefined && (!Array.isArray(b[item]))){
            console.log('\nCondition 1\n');
            a[item].push(b[item]);
        }
        else if(b[item] === undefined || b[item] === null){
            console.log('\nCondition 2\n');
            a[item] = [];
        }
        else if(Array.isArray(b[item])){
            console.log('\nCondition 3\n');
            a[item] = b[item];
        }
    }
    else if(a.hasOwnProperty(item) && b[item] === undefined){
        console.log('\nCondition 4\n');
        delete a[item];
    }
    else if(b[item] && typeof b[item] !== 'object'){
        console.log('\nCondition 5\n');
        a[item] = b[item];

    }
    else if(a[item] && Array.isArray(b[item])){
        console.log('\nMy Condition\n');
        a[item] = b[item];
    }
    else{
        for(var innerItem in b[item]){
            
            if(b[item].hasOwnProperty(innerItem)){
            
                merger(innerItem,a[item],b[item]);
            }
        }
    }
    console.log('Result: \n'+item+':'+JSON.stringify(a[item]));
    return true;
};

module.exports.mergewrapper = function mergewrapper(a,b){
    Object.keys(b).forEach(function(key){
        merger(key,a,b);
    });
    return a;
}


//console.log(mergewrapper(x,y));
