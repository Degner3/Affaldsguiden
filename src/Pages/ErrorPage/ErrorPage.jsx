

export const ErrorPage = () => {
  return (
    <section className={style.errpage}>
      <article className={style.errorwrapper} style={{
        // backgroundImage: "url(" + errorpage + ")",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // height: "100%",
        // width: "100%"
      }}>
        <h2>404</h2>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>

        {/* Button to navigate to the home page */}
        <div className={style.btnHome}>
            <Link to="/">Go to Home</Link>
        </div>
        
      </article>
    </section>

  )
}
