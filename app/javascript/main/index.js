import React from 'react'
import WebpackerReact from 'webpacker-react'
import Routes from './routes'

/*
 * Register the app so WebpackerReact can find it
 */
WebpackerReact.setup({ MainApp:Routes })

// For now we need to assign our view components to a const
// In future iterations, this might not be the case


/*
 * Build the application
 */
function MainApp () {
  return(
    <Routes/>
  )
}
