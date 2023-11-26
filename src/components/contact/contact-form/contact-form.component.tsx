import React, { useState } from 'react'
import BlockTitle from '@/components/_shared/block-title/block-title.component'
import useTranslate from '@/translations/useTranslate'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './contact-form.module.css'
import Input from '@/components/_shared/input/input.component'
import Textarea from '@/components/_shared/input/textarea.component'
import Popup from '@/components/_shared/popup/popup.component'
import Image from 'next/image'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

interface ModalInfo {
  title: string;
  description: string;
  theme: 'success' | 'error';
}

const defaultInputs: Inputs = { name: '', email: '', subject: '', message: '' }

const ContactForm = () => {

  const translate = useTranslate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [showSentModal, setShowSentModal] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo>({ title: '', description: '', theme: 'success' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleError = () => {
    setShowSentModal(true);
    setModalInfo({
      title: 'Something\'s wrong...',
      description: `You can try later, or write me directly 
        to andres.david.mm@hotmail.com`,
      theme: 'error',
    })
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      if (!res.ok) return handleError();
      setShowSentModal(true);
      setModalInfo({
        title: translate('contactMessageSent'),
        description: translate('contactMessageSentMessage'),
        theme: 'success'
      })
      reset(defaultInputs);
    } 
    catch (error) { handleError() }
    finally { setIsLoading(false) }
  }

  return (
    <>
      <BlockTitle
        title={translate('contactFormTitle')}
        className='mb-2'
      />
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex'>
          <div className='col-xs-12 col-sm-6'>
            <Input
              type='text'
              placeholder={translate('contactFormName')}
              {...register('name', { required: true, minLength: 2 })}
              error={errors.name && 'Enter a valid name'}
            />
            <Input
              type='text'
              placeholder={translate('contactFormEmail')}
              {...register('email', { 
                required: true, 
                minLength: 2, 
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g 
              })}
              error={errors.email && 'Enter a valid email'}
            />
            <Input
              type='text'
              placeholder={translate('contactFormSubject')}
              {...register('subject', { required: true, minLength: 2 })}
              error={errors.subject && 'Enter a valid subject'}
            />
          </div>
          <div className='col-xs-12 col-sm-6'>
            <Textarea
              rows={7}
              placeholder={translate('contactFormMessage')}
              {...register('message')}
              error={errors.message && 'Enter a valid message'}
            />
          </div>
        </div>


        <button className='btn-primary'>
          {!isLoading
            ? translate('contactFormSendButton')
            : <Image src='/spinners/grid.svg' alt='loading' width={18} height={18} />}
        </button>
      </form>
      <Popup
        {...modalInfo}
        show={showSentModal}
        handleClose={() => setShowSentModal(false)}
      />
    </>
  )
}

export default ContactForm