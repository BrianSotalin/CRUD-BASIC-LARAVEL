const productData = [
    {
      id: 1,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 2,
      pdate: "01 Apr, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.01224 LTC",
      valueInUsd: "$ 2773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 3,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "1.00224 LTC",
      valueInUsd: "$ 3773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 4,
      pdate: "13 May, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "2.00224 LTC",
      valueInUsd: "$ 4773.01",
      badgecolor: "danger",
      status: "Failed",
    },
    {
      id: 5,
      pdate: "16 Jun, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.02224 LTC",
      valueInUsd: "$ 5773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 6,
      pdate: "03 Mar, 2020",
      type: "Sell",
      coin: "Litecoin",
      value: "0.10224 LTC",
      valueInUsd: "$ 6773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 7,
      pdate: "23 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "5.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 8,
      pdate: "13 Mar, 2020",
      type: "Sell",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "danger",
      status: "Failed",
    },
    {
      id: 9,
      pdate: "4 Jan, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 2773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 10,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.12224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 11,
      pdate: "03 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.330224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 12,
      pdate: "23 Oct, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.12224 LTC",
      valueInUsd: "$ 1273.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 13,
      pdate: "13 Feb, 2020",
      type: "Sell",
      coin: "Litecoin",
      value: "0.50224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 14,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "0.70224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 15,
      pdate: "22 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "danger",
      status: "Failed",
    },
    {
      id: 16,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 17,
      pdate: "13 Mar, 2020",
      type: "Sell",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 18,
      pdate: "4 Jan, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 2773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 19,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.12224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 20,
      pdate: "03 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.330224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 21,
      pdate: "23 Oct, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.12224 LTC",
      valueInUsd: "$ 1273.01",
      badgecolor: "success",
      status: "completed",
    },
    {
      id: 22,
      pdate: "13 Feb, 2020",
      type: "Sell",
      coin: "Litecoin",
      value: "0.50224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "danger",
      status: "Failed",
    },
    {
      id: 23,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Bitcoin",
      value: "0.70224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 24,
      pdate: "22 Mar, 2020",
      type: "Sell",
      coin: "Bitcoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "warning",
      status: "Pending",
    },
    {
      id: 25,
      pdate: "03 Mar, 2020",
      type: "Buy",
      coin: "Litecoin",
      value: "0.00224 LTC",
      valueInUsd: "$ 1773.01",
      badgecolor: "success",
      status: "completed",
    },
  ];
  
  export default productData;