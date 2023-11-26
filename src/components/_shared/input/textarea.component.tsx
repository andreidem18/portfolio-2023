import React, { forwardRef } from 'react'
import styles from './input.module.css'

interface TextareaParams extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaParams>(
  function Textarea({ error, ...props }: TextareaParams, ref) {
  return (
    <div className={styles.inputGroup}>
      <textarea
        {...props}
        ref={ref}
      />
      {error && (
        <div className={styles.helpBlock}>
          {error}
        </div>
      )}
    </div>
  )
})

export default Textarea