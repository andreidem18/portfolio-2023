import React, { forwardRef } from 'react'
import styles from './input.module.css'

interface InputParams extends React.InputHTMLAttributes<HTMLInputElement>{
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputParams>(
  function Input({ error, ...props }: InputParams, ref) {
  return (
    <div className={styles.inputGroup}>
      <input
        {...props}
        className={`${props.className} ${error ? styles.error : ''}`}
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

export default Input