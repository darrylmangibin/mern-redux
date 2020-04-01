import React from 'react'

import { Input, TextArea, Button } from "../common"

const CreateFields = () => {
  return (
    <div className="container">
      <Input />
      <TextArea />
      <Button>
        Save note
      </Button>
    </div>
  )
}

export default CreateFields
