import SyncLoader from 'react-spinners/SyncLoader'

function LoadingBar() {
  return (
    <div>
      <div>Converting Guitar Pro file to midi...</div>
      <br />
      <SyncLoader color="#446147" loading={true} />
    </div>
  )
}

export default LoadingBar
