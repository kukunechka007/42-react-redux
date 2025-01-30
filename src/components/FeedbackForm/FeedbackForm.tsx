import { useFormik } from 'formik'

import Input from "../Input/Input"

import {  FeedbackFormContainer } from "./styles";
import Button from '../Button/Button';
import { FeedbackFormValue, FEEDBACK_FIELD_NAMES } from './types';
import { feedbackFormSliceActions, feedbackFormSliceSelectors } from '../../store/redux/FeedbackForm/FeedbackFormSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


function FeedbackForm() {
    const dispatch = useAppDispatch();
    const {error, status} = useAppSelector(feedbackFormSliceSelectors, feedbackFormSliceActions);


  const formik = useFormik({
    initialValues: {
      [FEEDBACK_FIELD_NAMES.NAME]: '',
      [FEEDBACK_FIELD_NAMES.EMAIL]: '',
    } as FeedbackFormValue,
    validateOnChange: false,
    onSubmit: (values: FeedbackFormValue) => {
        dispatch(feedbackFormSliceSelectors, sendData(Values))
    }
  })

  return (
    <FeedbackFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name={FEEDBACK_FIELD_NAMES.NAME}
        label='Name'
        placeholder='Enter your name'
        id='name_id'
        value={formik.values[FEEDBACK_FIELD_NAMES.NAME]}
        onChange={formik.handleChange}
      />
      <Input
        name={FEEDBACK_FIELD_NAMES.EMAIL}
        label='Email'
        placeholder='Enter email'
        id='email_id'
        value={formik.values[FEEDBACK_FIELD_NAMES.EMAIL]}
        onChange={formik.handleChange}
      />
      <Button name='SEND' type='submit' />
      {status === "success" && <Message>Data sucessfully saved</Message>}
    </FeedbackFormContainer>
  )
}

export default FeedbackForm