'use strict'

var assert = require('assert');
var index = require('../index');

const x = {
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
    photos: ['IMG-1985.jpg',
             'IMG-1987.jpg'
    ]
        
}

const x1 = {
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
    photos: ['IMG-1985.jpg',
             'IMG-1987.jpg'
    ]
        
}

const y = {
    last_name: 'Jones',
    active: true,
    address: {
        line_1: '2143 South Main St',
        line_2: undefined
    },
    logins: {date: '10/23/2012',ip:'192.168.0.1'},
    photos: undefined 

}

const y1 = {
    last_name: 'Jones',
    active: true,
    address: {
        line_1: '2143 South Main St',
        line_2: undefined
    },
    logins: {date: '10/23/2012',ip:'192.168.0.1'},
    photos: undefined 

}

var result_stub_1 = {
    first_name: 'Bob',
    last_name: 'Jones',
    active: true,
    email: 'bob@gmail.com',
    address: {
    line_1: '2143 South Main St',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90048'
    },
    logins: [
        { date: '10/22/2012', ip: '192.168.0.1' },
        { date: '10/21/2012', ip: '192.168.0.1' },
        { date: '10/23/2012', ip: '192.168.0.1' }
    ],
    photos: []
    } 

var result_stub_2 = { 
    last_name: 'Joness',
    active: true,
    address: { 
        line_1: '1234 Main St',
        line_2: 'Apt 413',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90048' 
    },
    logins: [ 
        { date: '10/22/2012', ip: '192.168.0.1' },
        { date: '10/21/2012', ip: '192.168.0.1' } 
    ],
    photos: undefined,
    first_name: 'Bob',
    email: 'bob@gmail.com' 
}



describe('Testing Object Merger',function(){
    it('Empty objects', function(done){
        try{
            let result = index.mergewrapper({},{});
            assert.deepEqual({},result);
            done();  
        }catch(e){
            done(e);
        }
    });
    it('Sample test case B to A', function(done){
        try{

            let result = index.mergewrapper(x,y);
            assert.deepEqual(result_stub_1,result);
            done();  
        }catch(e){
            done(e);
        }
    });
    it('Sample test case A to B', function(done){
        try{
            let result = index.mergewrapper(y1,x1);
            assert.deepEqual(result_stub_2,result);
            done();  
        }catch(e){
            done(e);
        }
    });

});