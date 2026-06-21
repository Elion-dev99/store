// ====== 初期ステータス ======
let atk = 3;
let enemyHp = 20;

// ====== 自動攻撃（1秒ごと） ======
setInterval(() => {
  attack();
}, 1000);

// ====== 攻撃処理 ======
function attack() {
  addLog(`プレイヤーの攻撃！ -${atk}`);
  damageEnemy(atk);
}

// ====== 敵HP管理 ======
function damageEnemy(amount) {
  enemyHp -= amount;
  updateEnemyHp();

  if (enemyHp <= 0) {
    enemyDefeated();
  }
}

function updateEnemyHp() {
  document.getElementById("hp").textContent = enemyHp;
}

function enemyDefeated() {
  addLog("敵を倒した！");
  spawnEnemy();
}

function spawnEnemy() {
  enemyHp = 20; // 後でスケールさせる
  updateEnemyHp();
}

// ====== ログ表示 ======
function addLog(text) {
  const log = document.getElementById("log");
  log.innerHTML += text + "<br>";
  log.scrollTop = log.scrollHeight;
}
