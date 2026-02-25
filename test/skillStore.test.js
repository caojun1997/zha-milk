const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const {
  ensureStore,
  listSkills,
  addSkill,
  removeSkill,
  searchSkills
} = require('../src/skillStore');

function tempStorePath() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-cli-'));
  return path.join(dir, 'skills.json');
}

test('ensureStore should create store file', () => {
  const store = tempStorePath();
  ensureStore(store);
  assert.equal(fs.existsSync(store), true);
});

test('add/list/search/remove flow works', () => {
  const store = tempStorePath();
  ensureStore(store);

  addSkill({ name: 'Node.js', description: '后端运行时', level: 'intermediate' }, store);
  addSkill({ name: 'React', description: '构建用户界面', level: 'advanced' }, store);

  const all = listSkills(store);
  assert.equal(all.length, 2);

  const hit = searchSkills('用户', store);
  assert.equal(hit.length, 1);
  assert.equal(hit[0].name, 'React');

  const removed = removeSkill('Node.js', store);
  assert.equal(removed, true);
  assert.equal(listSkills(store).length, 1);
});
