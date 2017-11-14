'use strict'

var assert = require('assert');
var index = require('../index');

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
    photos: 'IMG-1985.jpg'
        
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

var result_stub = {
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
            assert.deepEqual(result_stub,result);
            done();  
        }catch(e){
            done(e);
        }

    });
    it.skip('Sample test case A to B', function(done){
        try{
            let result = index.mergewrapper(y,x);
            console.log('\n&&&&&&&&&&&&&&&&&&&&');
            console.log(result);
            console.log('\n&&&&&&&&&&&&&&&&&&&&\n');
            assert.deepEqual(result_stub,result);
            done();  
        }catch(e){
            done(e);
        }
    });
});