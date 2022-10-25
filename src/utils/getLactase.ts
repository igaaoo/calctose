export interface GetLactaseProps {
  lactose: number;
}

export function GetLactase({ lactose }: GetLactaseProps) {
  let lactase = lactose * 200;

  return lactase
}