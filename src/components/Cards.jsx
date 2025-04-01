import Card from "./Card";

export function Cards() {
  const people = [
    {
      id: 1,
      photo: "/images/photo1.png",
      name: "Bill Mahoney",
      position: "Product Owner",
    },
    {
      id: 2,
      photo: "/images/photo2.png",
      name: "Saba Cabrera",
      position: "Art Director",
    },
    {
      id: 3,
      photo: "/images/photo3.png",
      name: "Shae Le",
      position: "Tech Lead",
    },
    {
      id: 4,
      photo: "/images/photo4.png",
      name: "Skylah Lu",
      position: "Ux Designer",
    },
    {
      id: 5,
      photo: "/images/photo5.png",
      name: "Griff Richards",
      position: "Developer",
    },
    {
      id: 6,
      photo: "/images/photo6.png",
      name: "Stan John",
      position: "Developer",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 px-4 py-6 gap-4 justify-center max-w-5xl mx-auto md:py-8">
      {people.map((card) => {
        return (
          <Card
            photo={card.photo}
            name={card.name}
            position={card.position}
            key={card.id}
          />
        );
      })}
    </div>
  );
}
