'use client'

import PageAnimation from '@/components/_shared/page-animation/page-animation.component'
import PageTitle from '@/components/_shared/page-title/page-title.component'
import ContactForm from '@/components/contact/contact-form/contact-form.component'
import ContactInfo from '@/components/contact/contact-info/contact-info.component'
import useTranslate from '@/translations/useTranslate'
import React from 'react'
import { motion } from 'framer-motion';
import { fromLeftAnimationScroll, fromRightAnimationScroll } from '@/components/_shared/animations/on-scroll/from-sides'

const ContactPage = () => {

  const translate = useTranslate();
  return (
    <PageAnimation>
      <PageTitle 
        title={translate('contactTitle')} 
        subtitle={translate('contactSubtitle')} 
      />
      <div className="page-container">
        <div className="flex">
          <motion.div {...fromLeftAnimationScroll} className="col-xs-12 col-lg-4">
            <ContactInfo />
          </motion.div>
          <motion.div {...fromRightAnimationScroll} className="col-xs-12 col-lg-8">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default ContactPage