import { useState } from "react";

const useForm = (initialState = {}) => {
  const [valuesForm, setValuesForm] = useState(initialState);

  const reset = () => {
    setValuesForm(initialState);
  };

  const handleChangeInput = ({ target }) => {
    setValuesForm({
      ...valuesForm,
      [target.name]: target.value,
    });
  };

  return [valuesForm, handleChangeInput, reset];
};

export default useForm;
