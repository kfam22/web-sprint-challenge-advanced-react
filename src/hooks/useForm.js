import { useState } from 'react';

const useForm = (initialFormValue)=>{
    const [values, setValues] = useState(initialFormValue);
    const [input, setInput] = useState(initialFormValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const handleChanges = (e)=>{
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      setValues(values);
      setShowSuccessMessage(true);
      setInput(initialFormValue);
    }
  
  
    return [values, handleChanges, showSuccessMessage, handleSubmit, input];
  };

  export default useForm;