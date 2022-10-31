const Logger = require('logplease');
const logger = Logger.create('utils');

const esPar = (number) => {
    if (number % 2 == 0) {
        return logger.info(`El número es par`);
    } else {
        return logger.error(`El número es impar`);;
    }
};

module.exports = {
   esPar,
}