import React, { useEffect } from 'react'
import { useState, useCallback } from 'react'
import useDebounce from './useDebounce'

const IncrementComp = () => {
  const [count, setCount] = useState(0)
  const [iframeUrl, setiframeUrl] = useState(null)
  useEffect(() => {
    fetch('ChooseToBeHappy.pdf?fileId=TRANSLATE').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        console.log({ response })
        const fileURL = window.URL.createObjectURL(blob)
        console.log({ fileURL })
        setiframeUrl(fileURL)
        // Setting various property values
        // let alink = document.createElement('a');
        // alink.href = fileURL;
        // alink.download = 'SamplePDF.pdf';
        //   alink.click();
      })
    })
  }, [])

  //useCallback(useDebounce(() => alert(`Current value is ${count}`), 3000, [count]), [])

  function debounce(fn) {
    // setCount(prevCount => prevCount + 1)
    let timerId
    return (...args) => {
      //  setCount(prevCount => prevCount + 1)
      if (timerId) {
        clearTimeout(timerId)
      }
      timerId = setTimeout(() => {
        fn(args)
      }, 3000)
    }
  }

  function fireAlert() {
    alert(`Current value is ${count}`)
  }

  const handleView = () => {
    fetch('FAQ.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        console.log({ response })
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'SamplePDF.pdf'
        alink.click()
      })
    })
  }
  //   const handleClick = debounce(fireAlert)
  // console.log("29", useDebounce(fireAlert))
  const a = useDebounce(fireAlert, 3000)

  return (
    <>
      {count}
      <button onClick={a}>Increment</button>

      <div className="loader">Loading..</div>

      <button onClick={handleView}>View Pdf</button>
      <iframe
        id="output_iframecontent_id"
        src={iframeUrl}
        width="100%"
        height="100vh"
        style={{ height: '100vh' }}
      ></iframe>
    </>
  )
}

export default IncrementComp
