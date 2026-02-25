#!/usr/bin/env node
const {
  ensureStore,
  listSkills,
  addSkill,
  removeSkill,
  searchSkills
} = require('./skillStore');

const validLevels = new Set(['beginner', 'intermediate', 'advanced']);

function printHelp() {
  console.log(`\nskills-cli - skills 管理工具\n
用法:
  skills-cli list
  skills-cli add <name> <description> [level]
  skills-cli remove <name>
  skills-cli search <keyword>

示例:
  skills-cli add JavaScript "前端开发基础" intermediate
  skills-cli list
`);
}

function printSkills(skills) {
  if (skills.length === 0) {
    console.log('暂无技能数据。');
    return;
  }

  for (const skill of skills) {
    console.log(`- ${skill.name} | 等级: ${skill.level} | 描述: ${skill.description}`);
  }
}

function main() {
  ensureStore();

  const [, , command, ...args] = process.argv;

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    printHelp();
    return;
  }

  try {
    if (command === 'list') {
      printSkills(listSkills());
      return;
    }

    if (command === 'add') {
      const [name, description, level = 'beginner'] = args;

      if (!name || !description) {
        throw new Error('add 命令需要 <name> <description> 参数');
      }

      if (!validLevels.has(level)) {
        throw new Error('level 仅支持: beginner | intermediate | advanced');
      }

      const created = addSkill({ name, description, level });
      console.log(`已添加技能: ${created.name}`);
      return;
    }

    if (command === 'remove') {
      const [name] = args;
      if (!name) {
        throw new Error('remove 命令需要 <name> 参数');
      }

      const removed = removeSkill(name);
      if (removed) {
        console.log(`已删除技能: ${name}`);
      } else {
        console.log(`未找到技能: ${name}`);
      }
      return;
    }

    if (command === 'search') {
      const [keyword] = args;
      if (!keyword) {
        throw new Error('search 命令需要 <keyword> 参数');
      }

      printSkills(searchSkills(keyword));
      return;
    }

    throw new Error(`未知命令: ${command}`);
  } catch (error) {
    console.error(`错误: ${error.message}`);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, printHelp, printSkills };
