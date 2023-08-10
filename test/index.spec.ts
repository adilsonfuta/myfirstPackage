import { equal } from 'assert';
import { helloWorld } from './../src';
import { expect } from 'chai';

describe('helloWorld', ()=>{
it('should return greetings', ()=>{
    expect(helloWorld).equals('Adilson Futa');
});

})