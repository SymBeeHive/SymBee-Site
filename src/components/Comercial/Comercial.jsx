import "./Comercial.css";

function Comercial(){

    return(
    <section className="container">
        <h3>Asista ao nosso comercial</h3>
        <div className="video-container">
        <iframe width="360" height="315" src="https://www.youtube.com/embed/0_EVT24pz7w?si=OLbVYjBnaGSeD9jP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </section>
    );

}

export default Comercial;