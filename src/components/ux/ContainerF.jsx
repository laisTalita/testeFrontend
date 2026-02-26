import Button from "../ux/Button"

export default function ContainerF({className, img ,text, textButton,children}) {
    return(
        <section className={className}>
            <div>
                <img src={img} alt="" />
                <p>{text}</p>
                <Button>{textButton}</Button>
            </div>
                {children}
        </section>
    )
}