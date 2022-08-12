const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const msg = 'https://www.youtube.com/watch?v=P9qbAuNnFU0';
const chave = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', chave, iv);


const msgEncriptada = cipher.update(msg, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encriptado: ${msgEncriptada}`);


const decipher = createDecipheriv('aes256', chave, iv);
const msgDescriptada = decipher.update(msgEncriptada, 'hex', 'utf-8') + decipher.final('utf8');
console.log(`Decifrado: ${msgDescriptada.toString('utf-8')}`);
