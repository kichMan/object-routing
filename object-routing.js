var objectRouting = {
    /**
     * Глобальный контекст
     * @type {object}
     */
    context: undefined,

    /**
	 * Получть свойство из цепочки объектов
	 * @arg {string} path - Путь до свойтва в цепочке объектов
	 * @arg {object} [context=window] - Контекстный объект
     * @return {object|false}
     *  
     * @todo Отсутствует проверка и инкапсуляция на спецсимволы
     * @todo Нужна предусмотреть, когда одноуровневая вложенность
	 */
    get: function (path, context) {
        var arr = path.split('.');
		context = context || this.context || this.setGlobal();
        for(var sub_str of arr) {
            if(!context[sub_str]) return false;
            context = context[sub_str];
        }
		return context;
    },

    /**
	 * Получть контекст пути
	 * @arg {string|undefined} path - Путь до свойтва в цепочке объектов
     * @return {object|false}
     */
    getPathContext: function (path) {
        var path_context = path.replace(/(\..[^.]+)$/, '');
        return this.get(path_context);
    },

    /**
	 * Получть Имя свойства
	 * @arg {string} path - Путь до свойтва в цепочке объектов
     * @return {string}
     */
    getPropertyName: function (path) {
        var arr = path.split('.'); 
        return arr[arr.length - 1];
    }, 

    /**
	 * Проверить на существование свойство относительно пути
	 * @arg {string} path - Путь до свойтва в цепочке объектов
     * @return {boolean}
     */
    has: function (path) {
        var source = this.get(path);
        return !(source === false);
    },
    
    /**
     * Установить контекст
     * @arg {object|undefined} [context=window] context - 
     */
    setGlobal: function (context) {
        this.context = context || this.context || window;
        return this.context;
    }
};

if (typeof module !== "undefined" && module.exports) {
    objectRouting.context = (function(){ return this || (0,eval)("this"); }());
    module.exports = objectRouting;    
}