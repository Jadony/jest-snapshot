import { config1, config2 } from "./snapshot";

test('测试 config1 返回值', () => {
  // 但如果每次函数修改的时候，当前测试用例也要不断地修改
  // expect(config()).toEqual({
  //   method: 'GET',
  //   url: '/api'
  // });

  // 需要使用快照匹配 toMatchSnapshot 方法
  // 此方法会生成一个 __snapshots__ 目录，下面的文件中，第一次执行中 config 生成的结果会存到快照文件中
  // 快照会根据 test 方法中的描述生成一个映射关系
  // 修改后的 config 的执行结果与快照中的结果不同时会报错，需要更新快照
  // 如果 config 中有的值是每次运行都会变化的，那么每次快照都不会与当前执行相同，除非执行后再更新快照
  // 需要将在 toMatchSnapshot 方法中传递一个参数，设置一下 time 为任意格式的 Date 类型
  expect(config1()).toMatchSnapshot({
    time: expect.any(Date)
  });
})

test('测试 config2 返回值', () => {
  expect(config2()).toMatchSnapshot({
    time: expect.any(Number)
  });
})

// 行内snapshot
// 需要安装 prettier
test("测试 config2 返回值", () => {
  // toMatchInlineSnapshot 方法，将执行快照放到行内中，会放到 toMatchInlineSnapshot 方法中
  expect(config2()).toMatchInlineSnapshot(
    {
      time: expect.any(Number)
    },
    `
    Object {
      "method": "GET",
      "time": Any<Number>,
      "url": "/api",
    }
  `
  );
});
