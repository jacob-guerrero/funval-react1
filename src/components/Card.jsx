export default function Card({ photo, name, position }) {
  return (
    <div className="max-w-60 h-auto justify-self-center even:mt-8 md:nth-[3n+2]:mt-4 flex flex-wrap">
      <div className="w-full flex">
        <figure className="w-full h-auto aspect-3/4 overflow-hidden">
          <img className="object-cover w-full h-auto" src={photo} alt={name} />
        </figure>
        <p className="[writing-mode:vertical-lr]">{position}</p>
      </div>
      <p className="w-full">{name}</p>
    </div>
  );
}
