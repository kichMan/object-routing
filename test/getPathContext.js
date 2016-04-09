var assert = require("assert"),
    objectRouting = require('../object-routing');

describe('getPathContext()', () => {
    var Mock = {
        Context: {
            Child: 1
        }
    };
    objectRouting.setGlobal(Mock);
    it('Получить существующий объект пути', () => {
        assert.equal(objectRouting.getPathContext('Context.Child'), Mock.Context);
    });
    it('Результат при не существуюем объекте', () => {
        assert.equal(objectRouting.getPathContext('fake.fake'), false);
    });
});