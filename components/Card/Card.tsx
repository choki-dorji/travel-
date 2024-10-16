"use client"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardComponent() {
  const list = [
    {
      title: "Thimphu",
      img: "/img/image.jpg",
      price: "$5.50",
    },
    {
      title: "Paro",
      img: "/img/image.jpg",
      price: "$3.00",
    },
    {
      title: "Bumthang",
      img: "/img/image.jpg",
      price: "$10.00",
    },
    {
      title: "Zhemgang",
      img: "/img/image.jpg",
      price: "$5.30",
    },
    {
      title: "Trsahigang",
      img: "/img/image.jpg",
      price: "$15.70",
    },
    {
      title: "Yangtse",
      img: "/img/image.jpg",
      price: "$8.00",
    },
    {
      title: "Punakha",
      img: "/img/image.jpg",
      price: "$7.50",
    },
    {
      title: "Samtse",
      img: "/img/image.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}