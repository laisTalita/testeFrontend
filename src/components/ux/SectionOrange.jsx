export default function SectionOrange({itens}) {
  return (
    <section >
      {itens.map(item => (
        <div key={item.id}>
          <p>{item.number}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}