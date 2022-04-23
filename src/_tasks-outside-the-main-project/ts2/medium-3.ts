type FIXME = Exclude<Array<OrderState>, 'buyingSupplies' | 'producing'>

const orderStates = ['initial', 'inWork', 'buyingSupplies', 'producing', 'fullFilled'] as const

type OrderState = typeof orderStates[number]

export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter((state) => state !== 'buyingSupplies' && state !== 'producing')
