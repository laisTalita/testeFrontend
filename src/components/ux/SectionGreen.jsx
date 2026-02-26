import data from "../../data/data.json"

export default function SectionGreen() {
    return(
        <section>
            {data?.sectionGreen.map(item =>(
                <div key={item.id}>
                    <h5>+{item.number}</h5>
                    <p>{item.text}</p>
                </div>
            ))}

        </section>
    )
}