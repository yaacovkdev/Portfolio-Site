let rays = [];
let enemies = [];
let score = 0;
let gameOver = false;

const createEnemy = function (speedMin, speedMax) {
  let px = CANVSIZEX + 2 * SIZEW;
  let py = CANVSIZEY + 2 * SIZEH;
  let pos = randomRectPerimiterPos(px, py);
  let target = randomRectPerimiterPos(px / 3, py / 3);
  pos[0] -= SIZEW;
  pos[1] -= SIZEH;
  target[0] -= SIZEW;
  target[1] -= SIZEH;
  let angle = direction(pos[0], pos[1], target[0] + px / 3, target[1] + py / 3);
  let be = structuredClone(basicEnemy);
  be.move.angle = angle;
  be.specs.color = colors[1];
  be.move.speed = int(random(speedMin, speedMax));
  be.move.x = pos[0];
  be.move.y = pos[1];
  enemies.push(be);
};

let setGun = function () {
  Player.gun.reloadtime = 20 - int(score / 5);

  if (Player.gun.reloadtime <= 1) Player.gun.reloadtime = 1;

  Player.ammo.rayspeed = 5 + int(score / 20);
};

function checkCollisions() {
  let s1, s2;
  for (let i = 0; i < enemies.length; i++) {
    s1 = { x: enemies[i].move.x, y: enemies[i].move.y };
    s2 = { x: Player.move.x, y: Player.move.y };

    if (
      interceptCircRect(
        s1,
        enemies[i].specs.width,
        s2,
        Player.specs.width,
        Player.specs.height
      )
    ) {
      gameOver = true;
    }
  }

  for (let i = 0; i < rays.length; i++) {
    let l1 = { x: rays[i].move.x, y: rays[i].move.y };
    let l2 = { x: rays[i].move.x2, y: rays[i].move.y2 };
    if (Player.specs.shape == 0) {
      //player thing
      s1 = {
        x: Player.move.x - Player.specs.width / 2,
        y: Player.move.y - Player.specs.height / 2,
      };
      s2 = { x: s1.x + Player.specs.width, y: s1.y + Player.specs.height };

      if (interceptLineRect(l1, l2, s1, s2)) {
        rays.splice(i, 1);
      }
    } else if (Player.specs.shape == 1) {
      s1 = { x: Player.move.x, y: Player.move.y };
      s2 = Player.specs.width / 2;

      if (interceptLineCirc(l1, l2, s1, s2)) {
        rays.splice(i, 1);
      }
    }

    //Collisions of rays with enemies
    for (let j = 0; j < enemies.length; j++) {
      if (
        isOutOfBound(
          enemies[j].move.x,
          enemies[j].move.y,
          enemies[j].specs.width,
          CANVSIZEX,
          CANVSIZEY
        )
      )
        continue;
      if (enemies[j].specs.shape == 0) {
        s1 = {
          x: enemies[j].move.x - enemies[j].specs.width / 2,
          y: enemies[j].move.y - enemies[j].specs.specs.height / 2,
        };
        s2 = {
          x: s1.x + enemies[j].specs.width,
          y: s1.y + enemies[j].specs.height,
        };

        if (interceptLineRect(l1, l2, s1, s2)) {
          rays.splice(i, 1);
          enemies.splice(j, 1);
          score++;
        }
      } else if (enemies[j].specs.shape == 1) {
        s1 = { x: enemies[j].move.x, y: enemies[j].move.y };
        s2 = enemies[j].specs.width / 2;

        if (interceptLineCirc(l1, l2, s1, s2)) {
          rays.splice(i, 1);
          enemies.splice(j, 1);
          score++;
        }
      }
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    for (let j = 0; j < enemies.length; j++) {
      if (i == j) continue;

      s1 = { x: enemies[i].move.x, y: enemies[i].move.y };
      s2 = { x: enemies[j].move.x, y: enemies[j].move.y };
      if (
        interceptCircs(s1, enemies[i].specs.width, s2, enemies[j].specs.width)
      ) {
        //in order to splice at the right element in the enemies array second time
        if (i < j) j--;

        enemies.splice(i, 1);
        enemies.splice(j, 1);
        score++;
      }
    }
  }
}

//checks for borders in order to not go over the canvas
function border() {
  if (Player.move.x >= CANVSIZEX - 15) Player.move.x = CANVSIZEX - 15;
  if (Player.move.x <= 15) Player.move.x = 15;
  if (Player.move.y >= CANVSIZEY - 15) Player.move.y = CANVSIZEY - 15;
  if (Player.move.y <= 15) Player.move.y = 15;
}

function updateMovements() {
  for (let i = 0; i < rays.length; i++) {
    //add the next speed
    let xincrease = Player.ammo.rayspeed * Math.cos(rays[i].move.angle);
    let yincrease = Player.ammo.rayspeed * Math.sin(rays[i].move.angle);

    rays[i].move.x += xincrease;
    rays[i].move.y += yincrease;
    rays[i].move.x2 += xincrease;
    rays[i].move.y2 += yincrease;

    if (
      isOutOfBound(rays[i].move.x, rays[i].move.y, 50, CANVSIZEX, CANVSIZEY)
    ) {
      rays.splice(i, 1);
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    //enemies always tend to look at the player
    let ddir = direction(
      enemies[i].move.x,
      enemies[i].move.y,
      Player.move.x,
      Player.move.y
    );
    //ddir = closestAngle(enemies[i].angle, ddir, Math.PI/10);
    enemies[i].move.x += enemies[i].move.speed * Math.cos(ddir);
    enemies[i].move.y += enemies[i].move.speed * Math.sin(ddir);

    //if enemy is out of bounds they dissapear
    if (
      isOutOfBound(
        enemies[i].move.x,
        enemies[i].move.y,
        50,
        CANVSIZEX,
        CANVSIZEY
      )
    ) {
      enemies.splice(i, 1);
      i--;
    }
  }
}

function resetGame() {
  enemies = [];
  rays = [];

  Player.move.x = width / 2;
  Player.move.y = height / 2;
  Player.gun.safety = true;
  Player.gun.reloadtime = 20;
  Player.ammo.rayspeed = 5;

  score = 0;
}

function mousePressed() {
  if (gameOver) {
    gameOver = false;
    resetGame();
    initEvents();
    beginEventLoop();
    loop();
  }
}
