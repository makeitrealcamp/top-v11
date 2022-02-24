import loading from '../loading.gif'

const Loader = ({isLoading}) => {

  return (
    <span className='loader'>
      { isLoading ? <img src={loading} /> : null }
    </span>
  )
}

export default Loader;