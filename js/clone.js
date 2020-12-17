// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……
function clone(src) {
  let result = Array.isArray(src) ? [] : {}
  for(let key in src) {
    if(typeof src[key] === 'object' && src[key] !== null) {
      result [key] = clone(src[key])
    } else {
      result [key] = src[key]
    }
  }
  return result
}

// * ---------------- 实现的效果：
true
true

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
}
