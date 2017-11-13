'use strict'

var x = {
    first_name: 'Bob',
    last_name: 'Joness',
    email: 'bob@gmail.com',
    address: {
        line_1: '1234 Main St',
        line_2: 'Apt 413',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90048'
    },
    logins: [
            {date:'10/22/2012',ip:'192.168.0.1'},
            {date:'10/21/2012',ip:'192.168.0.1'}
    ],
    photos: [
        'IMG-1985.jpg',
        'IMG-1987.jpg'
    ]
}

var y = {
    last_name: 'Jones',
    active: true,
    address: {
        line_1: '2143 South Main St',
        line_2: undefined
    },
    logins: {date: '10/23/2012',ip:'192.168.0.1'},
    photos: undefined 

}
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

Object.keys(y).forEach(function(key){
    merger(key,x,y);
});

console.log(x);
