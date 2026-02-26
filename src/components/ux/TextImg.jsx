import Button from '../ux/Button'

export default function TextImg({children, text, img, button}) {
    
    return(
        <section>
            {children}
            <div>
                <p>{text}</p>
                <Button>{button}</Button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </section>
    )
}