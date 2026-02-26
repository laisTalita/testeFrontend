export default function CardContainer({text, titulo,className,children}) {
    return(
      <section className={className}>
        <p>{text}</p>
        <h3>{titulo}</h3>
        <div>
          {children}
        </div>
      </section>
    )
}