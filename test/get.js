var assert = require("assert"),
    objectRouting = require('../object-routing');

describe('get()', () => {
    var Mock = {
        Context: {
            Child: 1
        }
    };
    objectRouting.setGlobal(Mock);

    it('Получить существующий объект пути', () => {
        assert.equal(objectRouting.get('Context.Child'), Mock.Context.Child);
    });

    it('Результат при не существуюем объекте', () => {
        assert.equal(objectRouting.get('Context.fake'), false);
    });
});