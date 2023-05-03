
const Phrase = ({ data }) => {

  return (
    <div>
      <div className='phrase-box'>
        <p>{ data.phrase }</p>
      </div>
      <div className="author-box"> 
        <p>{ data.author }</p>
      </div>
    </div>
  )
}

export default Phrase
