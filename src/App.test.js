import Todo from './todo';

it('Api testing', async () => {
  const data = await Todo.api();
  console.log(data);
  expect(data.title).toEqual("delectus aut autem");
});
