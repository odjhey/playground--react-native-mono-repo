type TMessage = {
  message: string;
  type: "m1" | "m2";
};

export const hello = () => "another hello";
export const say = (_: TMessage) => "hello";
