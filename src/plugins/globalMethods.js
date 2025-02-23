export default {
    install(app) {
      app.config.globalProperties.$sayHello = function (name) {
        return `안녕하세요, ${name}!`;
      };
  
      app.config.globalProperties.$addNumbers = function (a, b) {
        return a + b;
      };
    },
  };
  