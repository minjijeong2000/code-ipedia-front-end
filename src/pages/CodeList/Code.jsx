const Code = (props) => {
    return (
      <div className="code-card">
        <section>
          <span>
            <p id="code-name">{props.post.title}</p>
            <p id="code-caption">{props.post.category[0].category}</p>
            <p id="code-category">{props.post.code}</p>
          </span>
        </section>
      </div>
    )
  }
  
  export default Code