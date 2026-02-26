import data from  '../../data/data.json'
export default function Artigos() {
    return(
        <section>
            <div>
                <p>Blog</p>
                <h2>Confira nossos artigos</h2>
            </div>
        
            <div>
                {data.artigos.map( i => (
                    <div key={i.id}>
                    <p>{i.data}</p>
                    <p>{i.text}</p>
                    </div>
                ))}
            </div>
           
        </section>
    )
}