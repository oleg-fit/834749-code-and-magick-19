var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CONTENT_MARGIN = 30;
var TITLE_TEX_HEIGHT = 70;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_X = CLOUD_X + CONTENT_MARGIN;
var BAR_Y = CLOUD_Y + TITLE_TEX_HEIGHT;

var BAR_TEXT_X = CLOUD_X + CONTENT_MARGIN;
var BAR_TEXT_Y = CLOUD_Y + CLOUD_HEIGHT - CONTENT_MARGIN;
var TEXT_WIDTH = 40;

var DISTANCE_BETWEEN_BAR = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.font = '35px, Tahoma';
  ctx.fillText('Ура вы победили!', BAR_TEXT_X, CLOUD_Y + CONTENT_MARGIN);
  ctx.fillText('Список результатов:', BAR_TEXT_X, CLOUD_Y + CONTENT_MARGIN * 2);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], BAR_TEXT_X + (TEXT_WIDTH + DISTANCE_BETWEEN_BAR) * i, BAR_TEXT_Y);
    ctx.fillRect(BAR_X + (BAR_WIDTH + DISTANCE_BETWEEN_BAR) * i, BAR_Y + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }

  // var playerIndex = 0;
  // var playerName = 'Вы';

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillText(playerName, BAR_TEXT_X + (TEXT_WIDTH + DISTANCE_BETWEEN_BAR) * playerIndex, BAR_TEXT_Y);
  // ctx.fillRect(BAR_X + (BAR_WIDTH + DISTANCE_BETWEEN_BAR) * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  // playerIndex = 1;
  // playerName = 'Иван';

  // ctx.fillText(playerName, BAR_TEXT_X + (TEXT_WIDTH + DISTANCE_BETWEEN_BAR) * playerIndex, BAR_TEXT_Y);
  // ctx.fillRect(BAR_X + (BAR_WIDTH + DISTANCE_BETWEEN_BAR) * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  // playerIndex = 2;
  // playerName = 'Юлия';

  // ctx.fillText(playerName, BAR_TEXT_X + (TEXT_WIDTH + DISTANCE_BETWEEN_BAR) * playerIndex, BAR_TEXT_Y);
  // ctx.fillRect(BAR_X + (BAR_WIDTH + DISTANCE_BETWEEN_BAR) * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
};

