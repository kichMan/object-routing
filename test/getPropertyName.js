var assert = require("assert"),
    objectRouting = require('../object-routing');

describe('getPropertyName()', () => {
    var Mock = {
        Context: {
            Child: 1
        }
    };
    it('Получить существующий объект пути', () => {
        assert.equal(objectRouting.getPropertyName('Context.Child'), 'Child');
    });
});