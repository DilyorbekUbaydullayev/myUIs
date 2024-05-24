import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const input = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <input
              type="text"
              placeholder="Name"
            />
            <input
              type="email"
              placeholder="Email"
              style={{ fontSize: 18, padding: 12 }}
            />
            <Inputs
              type="text"
              placeholder="Subject"
              style={{ fontSize: 18, padding: 12 }}
            />
            <textarea
              placeholder="Massage"
              style={{ fontSize: 18, padding: 12,outlineStyle:'hidden' }}
              rows={6}></textarea>
          </Box>
    </div>
  )
}

export default input
