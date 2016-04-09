var assert = require("assert"),
    objectRouting = require('../object-routing');

describe('has()', () => {
    var Mock = {
        Context: {
            Child: 1
        }
    };
    it('Свойство существует', () => {
        assert.equal(objectRouting.has('Context.Child'), true);
    });
    it('Свойство отсутствует', () => {
        assert.equal(objectRouting.has('Context.Fake'), false);
    });
});