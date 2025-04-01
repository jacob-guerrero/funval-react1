import Card from "./Card";

export function Cards() {
  const people = [
    {
      photo: "/images/photo1.png",
      name: "Bill Mahoney",
      position: "Product Owner",
    },
    {
      photo: "/images/photo2.png",
      name: "Saba Cabrera",
      position: "Art Director",
    },
    {
      photo: "/images/photo3.png",
      name: "Shae Le",
      position: "Tech Lead",
    },
    {
      photo: "/images/photo4.png",
      name: "Skylah Lu",
      position: "Ux Designer",
    },
    {
      photo: "/images/photo5.png",
      name: "Griff Richards",
      position: "Developer",
    },
    {
      photo: "/images/photo6.png",
      name: "Stan John",
      position: "Developer",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 p-4 gap-4 justify-center">
      <Card
        photo={people[0].photo}
        name={people[0].name}
        position={people[0].position}
      />
      <Card
        photo={people[1].photo}
        name={people[1].name}
        position={people[1].position}
      />
      <Card
        photo={people[2].photo}
        name={people[2].name}
        position={people[2].position}
      />
      <Card
        photo={people[1].photo}
        name={people[1].name}
        position={people[1].position}
      />
    </div>
  );
}
