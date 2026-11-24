export const getFeeRange = (fee) => {
  fee = Number(fee.includes("£") ? fee.split("£")[1] : fee);

  let feeRange;

  switch (true) {
    case fee <= 3000:
      feeRange = "Up to £3,000";
      break;
    case fee > 3000 && fee <= 7000:
      feeRange = "£3,000 to £7,000";
      break;
    case fee > 7000 && fee <= 10000:
      feeRange = "£7,000 to £10,000";
      break;
    case fee > 10000:
      feeRange = "£10,000+";
      break;
  }

  return feeRange;
};
