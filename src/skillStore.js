const fs = require('node:fs');
const path = require('node:path');

const defaultDataPath = path.join(__dirname, '..', 'data', 'skills.json');

function ensureStore(filePath = defaultDataPath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ skills: [] }, null, 2), 'utf8');
  }
}

function readStore(filePath = defaultDataPath) {
  ensureStore(filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function writeStore(data, filePath = defaultDataPath) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function listSkills(filePath = defaultDataPath) {
  return readStore(filePath).skills;
}

function addSkill(skill, filePath = defaultDataPath) {
  const data = readStore(filePath);
  const exists = data.skills.some((item) => item.name.toLowerCase() === skill.name.toLowerCase());

  if (exists) {
    throw new Error(`技能 "${skill.name}" 已存在`);
  }

  data.skills.push(skill);
  writeStore(data, filePath);

  return skill;
}

function removeSkill(name, filePath = defaultDataPath) {
  const data = readStore(filePath);
  const before = data.skills.length;
  data.skills = data.skills.filter((item) => item.name.toLowerCase() !== name.toLowerCase());

  if (data.skills.length === before) {
    return false;
  }

  writeStore(data, filePath);
  return true;
}

function searchSkills(keyword, filePath = defaultDataPath) {
  const lower = keyword.toLowerCase();
  return listSkills(filePath).filter((item) => {
    const inName = item.name.toLowerCase().includes(lower);
    const inDesc = item.description.toLowerCase().includes(lower);
    return inName || inDesc;
  });
}

module.exports = {
  defaultDataPath,
  ensureStore,
  listSkills,
  addSkill,
  removeSkill,
  searchSkills
};
