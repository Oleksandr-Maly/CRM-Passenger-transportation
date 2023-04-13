import React, { useState } from 'react'

import { PageHeader } from '../component/PageHeader/PageHeader';
import { PageFooter } from '../component/PageFooter/PageFooter';
import { PageMain } from '../component/PageMain/PageMain';

export const AdminPage = () => { 
  return (
  <>
    <PageHeader />    
    <PageMain />
    <PageFooter />
  </>
  )
}
