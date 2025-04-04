interface IProps {
  amount: number | string;
}
export default function FormatAmount({ amount }: IProps) {
  const formattedAmount = Number(amount).toLocaleString("en-US");

  return <span>{formattedAmount}</span>;
}
