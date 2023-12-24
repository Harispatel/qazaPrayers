export type benifitsT = {
  name: string
}

export type membershipT = {
  tag: string
  description: string
  prise: number
  base: string
  benifits: benifitsT[]
  button: string
}

export const memberhsip: membershipT[] = [
  {
    tag: "Free",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet porro",

    prise: 3.5,
    base: "month",
    benifits: [
      {
        name: "1-3 day turnaround",
      },
      {
        name: "Monthly strategy call",
      },
      {
        name: "Commercial Liennse",
      },
      {
        name: "Native Development",
      },
    ],
    button: "FREE",
  },
  {
    tag: "Pro",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet porro",

    prise: 3.5,
    base: "month",
    benifits: [
      {
        name: "1-3 day turnaround",
      },
      {
        name: "Monthly strategy call",
      },
      {
        name: "Commercial Liennse",
      },
      {
        name: "Native Development",
      },
    ],
    button: "BUY",
  },
]
