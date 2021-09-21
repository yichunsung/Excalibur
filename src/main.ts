import app from './app/app';

app.listen(port, () => {
  console.log(`Start in ${ port } for ${ projectName }`);
  console.log('            ');
  console.log('   ◢█████████████◣');
  console.log('   ◤◤◤◤◤◤◤◤◤◤◤◤◤◥◥');
  console.log('   │　     ╱      │        ', "\x1b[1m", '\x1b[33m', `Server start in port ${ port }`, "\x1b[0m");
  console.log('   │  ╰╮)) ●    ● ╰╮  ))   ');
  console.log('   │　╱    ﹏  ω ﹏ ╱');
  console.log('   │              │');
  console.log('   ╰─╮╭────────╮╭─╯');
  console.log('     ╰╯        ╰╯');
});
