// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

type FIXME<T> = T extends { defaultProps: infer U } ? U : unknown

export const getDefaultProps = <T>(component: React.ComponentType<T>): FIXME<React.ComponentType<T>> => {
  return component.defaultProps
}
