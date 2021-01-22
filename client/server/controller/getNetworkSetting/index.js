module.exports = (event, arg) => {
  const net = require('os').networkInterfaces();
  event.reply('Selection-NetWork-Setting-Reply', net);
};
