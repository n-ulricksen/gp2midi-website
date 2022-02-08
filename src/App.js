import { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import FileUploadForm from './components/FileUploadForm'
import LoadingBar from './components/LoadingBar'
import DownloadPage from './components/DownloadPage'
import Navbar from './components/Navbar'
import Description from './components/Description'
import Converter from './components/Converter'
import Footer from './components/Footer'
import './App.css'

const API_URL_PROD = "https://fast-river-62884.herokuapp.com/compute"
const API_URL_DEV  = "http://127.0.0.1:8229/compute" 

function App() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [midiFile, setMidiFile] = useState(null)

  const API_URL = process.env.NODE_ENV === "production" ? API_URL_PROD : API_URL_DEV

  const uploadFile = () => {
    setIsProcessing(true)

    const formData = new FormData()
    formData.append("gpfile", selectedFile)

    axios.post(API_URL, formData)
      .then(response => { 
        if (!response || !response.data) {
          // TODO: failed to load
        }
        const midiData = response.data
        const midiFileName = selectedFile.name.replace(/\.[^/.]+$/, "") + ".mid"
        const newMidiFile = new File([midiData], midiFileName)

        setMidiFile(newMidiFile)
        setIsProcessing(false)
      })
    // TODO: error handling 
      .catch(err => { console.error(err) })
  }

  const startOver = () => {
    setSelectedFile(null)
    setIsProcessing(false)
    setMidiFile(null)
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Converter>
        {!isProcessing && !midiFile && (
          <FileUploadForm 
            setSelectedFile={setSelectedFile} 
            uploadFile={uploadFile} 
          />
        )}
        {isProcessing && (
          <LoadingBar />
        )}
        {midiFile && (
          <DownloadPage midiFile={midiFile} startOver={startOver} />
        )}
      </Converter>
      <Description />
      <Footer />
    </div>
  );
}

export default App
