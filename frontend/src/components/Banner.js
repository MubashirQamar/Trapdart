import { logo } from "./Images"

function Banner()
{
    return <>
    <section className="banner-section">
        <div className="banner-inner">
            <img src={logo}/>
            <div className="text">
                <p>Unleashing trapped digital art into the wild.</p>
                <p>A boutique art gallery and marketplace focused on<br/>
                giving the freshest digital artists a place to shine.</p>
            </div>
        </div>
    </section>
    </>
}

export default Banner