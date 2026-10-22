import React from "react"
import { AlertButton, Button } from "./button"

const Home = () => {
  return (
    <AlertButton
      variant="danger"
      className="outline-2 outline-amber-300 bg-green-300"
    >
      Click me
    </AlertButton>
  )
}

export default Home
